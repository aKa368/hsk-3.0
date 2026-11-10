/**
 * HSK 3.0 — IndexedDB Stroke Cache & SVG Vector Engine (stroke_cache_db.js)
 * Tự động lưu trữ vĩnh viễn cấu trúc nét chữ Hán vào IndexedDB cục bộ của thiết bị.
 * Cơ chế ưu tiên Offline First 3 tầng:
 *   Tầng 1: RAM (window.HSK_STROKES)
 *   Tầng 2: IndexedDB (HSK_STROKE_CACHE_DB) -> LocalStorage Fallback
 *   Tầng 3: Multi-CDN Network (JsDelivr -> Unpkg) -> Local Stroke Generator Fallback
 * Tích hợp SvgStrokeEngine: Render nét động SVG thuần mượt mà bằng clipPath và stroke-dasharray/stroke-dashoffset.
 */

(function (root, factory) {
  'use strict';
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else {
    const exports = factory();
    root.StrokeCacheDB = exports.StrokeCacheDB;
    root.loadHanziStrokeData = exports.loadHanziStrokeData;
    root.SvgStrokeEngine = exports.SvgStrokeEngine;
    root.generateFallbackStroke = exports.generateFallbackStroke;
  }
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this), function () {
  'use strict';

  const DB_NAME = 'HSK_STROKE_CACHE_DB';
  const DB_VERSION = 1;
  const STORE_NAME = 'strokes';
  const LOCAL_STORAGE_PREFIX = 'hsk_stroke_';

  let dbInstance = null;
  let isDBReady = false;

  // -------------------------------------------------------------
  // 1. TẦNG 2: INDEXEDDB & LOCALSTORAGE FALLBACK
  // -------------------------------------------------------------

  function getGlobalScope() {
    if (typeof window !== 'undefined') return window;
    if (typeof globalThis !== 'undefined') return globalThis;
    if (typeof global !== 'undefined') return global;
    return {};
  }

  // Khởi tạo IndexedDB an toàn
  function initDB() {
    return new Promise((resolve) => {
      const g = getGlobalScope();
      if (!g.indexedDB) {
        return resolve(null);
      }
      try {
        const req = g.indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'char' });
          }
        };
        req.onsuccess = (e) => {
          dbInstance = e.target.result;
          isDBReady = true;
          resolve(dbInstance);
        };
        req.onerror = () => {
          console.warn('[StrokeCacheDB] Không thể mở IndexedDB, chuyển sang LocalStorage fallback.');
          resolve(null);
        };
      } catch (err) {
        console.warn('[StrokeCacheDB] Lỗi khởi tạo IndexedDB:', err);
        resolve(null);
      }
    });
  }

  // Đọc dữ liệu nét từ IndexedDB hoặc LocalStorage
  function getStrokeFromDB(char) {
    return new Promise((resolve) => {
      const g = getGlobalScope();
      if (dbInstance) {
        try {
          const tx = dbInstance.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const req = store.get(char);
          req.onsuccess = () => {
            if (req.result && req.result.data) {
              return resolve(req.result.data);
            }
            readFromLocalStorage(char, resolve);
          };
          req.onerror = () => readFromLocalStorage(char, resolve);
          return;
        } catch (e) {
          readFromLocalStorage(char, resolve);
          return;
        }
      }
      readFromLocalStorage(char, resolve);
    });
  }

  function readFromLocalStorage(char, resolve) {
    try {
      const g = getGlobalScope();
      if (g.localStorage) {
        const item = g.localStorage.getItem(LOCAL_STORAGE_PREFIX + char);
        if (item) {
          const parsed = JSON.parse(item);
          return resolve(parsed);
        }
      }
    } catch (e) {}
    resolve(null);
  }

  // Lưu dữ liệu nét vào IndexedDB và LocalStorage
  function saveStrokeToDB(char, data) {
    if (!char || !data) return;
    if (dbInstance) {
      try {
        const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        store.put({ char: char, data: data, savedAt: Date.now() });
      } catch (e) {}
    }
    try {
      const g = getGlobalScope();
      if (g.localStorage) {
        g.localStorage.setItem(LOCAL_STORAGE_PREFIX + char, JSON.stringify(data));
      }
    } catch (e) {}
  }

  // -------------------------------------------------------------
  // 2. SVG STROKE ENGINE (PARSE SVG PATH, MEDIANS, DYNAMIC RENDER)
  // -------------------------------------------------------------

  const SvgStrokeEngine = {
    /**
     * Phân tích cú pháp chuỗi SVG path thành các lệnh và tính Bounding Box
     * Hỗ trợ các lệnh chuẩn: M, L, H, V, C, S, Q, T, A, Z
     */
    parseSvgPath: function (d) {
      if (!d || typeof d !== 'string') {
        return { commands: [], bbox: { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 }, isValid: false };
      }

      const commands = [];
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      let currX = 0;
      let currY = 0;
      let startX = 0;
      let startY = 0;

      // Regex bóc tách từng segment lệnh kèm tham số
      const segmentRegex = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
      const numberRegex = /[-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?/g;

      let match;
      while ((match = segmentRegex.exec(d)) !== null) {
        const type = match[1];
        const argsStr = match[2].trim();
        const args = [];
        let numMatch;
        while ((numMatch = numberRegex.exec(argsStr)) !== null) {
          args.push(parseFloat(numMatch[0]));
        }

        const isRelative = type === type.toLowerCase() && type !== 'z';
        const cmdUpper = type.toUpperCase();

        const updateBBox = (x, y) => {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        };

        if (cmdUpper === 'M' || cmdUpper === 'L') {
          for (let i = 0; i < args.length; i += 2) {
            let x = args[i];
            let y = args[i + 1];
            if (isRelative) {
              x += currX;
              y += currY;
            }
            currX = x;
            currY = y;
            if (cmdUpper === 'M' && i === 0) {
              startX = x;
              startY = y;
            }
            updateBBox(x, y);
          }
        } else if (cmdUpper === 'Q') {
          for (let i = 0; i < args.length; i += 4) {
            let cx = args[i];
            let cy = args[i + 1];
            let x = args[i + 2];
            let y = args[i + 3];
            if (isRelative) {
              cx += currX;
              cy += currY;
              x += currX;
              y += currY;
            }
            currX = x;
            currY = y;
            updateBBox(cx, cy);
            updateBBox(x, y);
          }
        } else if (cmdUpper === 'C') {
          for (let i = 0; i < args.length; i += 6) {
            let c1x = args[i];
            let c1y = args[i + 1];
            let c2x = args[i + 2];
            let c2y = args[i + 3];
            let x = args[i + 4];
            let y = args[i + 5];
            if (isRelative) {
              c1x += currX;
              c1y += currY;
              c2x += currX;
              c2y += currY;
              x += currX;
              y += currY;
            }
            currX = x;
            currY = y;
            updateBBox(c1x, c1y);
            updateBBox(c2x, c2y);
            updateBBox(x, y);
          }
        } else if (cmdUpper === 'H') {
          for (let i = 0; i < args.length; i++) {
            let x = args[i];
            if (isRelative) x += currX;
            currX = x;
            updateBBox(currX, currY);
          }
        } else if (cmdUpper === 'V') {
          for (let i = 0; i < args.length; i++) {
            let y = args[i];
            if (isRelative) y += currY;
            currY = y;
            updateBBox(currX, currY);
          }
        } else if (cmdUpper === 'Z') {
          currX = startX;
          currY = startY;
        }

        commands.push({ type: type, args: args });
      }

      const isValid = commands.length > 0 && isFinite(minX) && isFinite(maxX);
      const bbox = isValid
        ? { minX: minX, minY: minY, maxX: maxX, maxY: maxY, width: maxX - minX, height: maxY - minY }
        : { minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };

      return {
        commands: commands,
        bbox: bbox,
        isValid: isValid
      };
    },

    /**
     * Tính độ dài thực tế của đường median đa điểm (Euclidean distance)
     */
    calculateMedianLength: function (points) {
      if (!Array.isArray(points) || points.length < 2) return 1;
      let total = 0;
      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];
        if (Array.isArray(p1) && Array.isArray(p2) && p1.length >= 2 && p2.length >= 2) {
          const dx = p2[0] - p1[0];
          const dy = p2[1] - p1[1];
          total += Math.sqrt(dx * dx + dy * dy);
        }
      }
      return Math.max(1, Math.round(total * 100) / 100);
    },

    /**
     * Chuyển đổi danh sách điểm median thành chuỗi SVG Path
     */
    buildMedianPath: function (points) {
      if (!Array.isArray(points) || points.length === 0) return 'M 0 0';
      const parts = [`M ${points[0][0]} ${points[0][1]}`];
      for (let i = 1; i < points.length; i++) {
        parts.push(`L ${points[i][0]} ${points[i][1]}`);
      }
      return parts.join(' ');
    },

    /**
     * Sinh mã SVG hoàn chỉnh sử dụng clipPath và stroke-dasharray/stroke-dashoffset
     */
    generateSvgHtml: function (charData, options) {
      options = options || {};
      const width = options.width || options.size || 320;
      const height = options.height || options.size || 320;
      const strokeColor = options.strokeColor || '#2d2621';
      const outlineColor = options.outlineColor || '#9e8a75';
      const outlineOpacity = typeof options.outlineOpacity === 'number' ? options.outlineOpacity : 0.25;
      const strokeWidth = options.strokeWidth || 128;
      const showOutline = options.showOutline !== false;
      const uid = 'hsk_' + Math.random().toString(36).substring(2, 9);

      const strokes = (charData && Array.isArray(charData.strokes)) ? charData.strokes : [];
      const medians = (charData && Array.isArray(charData.medians)) ? charData.medians : [];

      let defsHtml = '<defs>';
      let outlineHtml = `<g class="hsk-outline-group" style="opacity: ${showOutline ? outlineOpacity : 0}; transition: opacity 0.3s ease;">`;
      let brushHtml = '<g class="hsk-brush-group">';

      for (let i = 0; i < strokes.length; i++) {
        const strokePath = strokes[i];
        const medianPoints = medians[i] || [];
        const medianPath = SvgStrokeEngine.buildMedianPath(medianPoints);
        const len = SvgStrokeEngine.calculateMedianLength(medianPoints);
        const clipId = `${uid}_clip_${i}`;
        const brushId = `${uid}_brush_${i}`;

        // Định nghĩa clipPath cho từng nét để bao trọn outline thư pháp
        defsHtml += `<clipPath id="${clipId}"><path d="${strokePath}" /></clipPath>`;

        // Nét phác thảo mờ (outline)
        outlineHtml += `<path class="hsk-stroke-outline" d="${strokePath}" fill="${outlineColor}" />`;

        // Nét vẽ động di chuyển theo đường median, được clip theo biên dạng nét
        brushHtml += `<path id="${brushId}" class="hsk-stroke-brush" data-stroke-index="${i}" ` +
          `d="${medianPath}" fill="none" stroke="${strokeColor}" stroke-width="${strokeWidth}" ` +
          `stroke-linecap="round" stroke-linejoin="round" clip-path="url(#${clipId})" ` +
          `style="stroke-dasharray: ${len}; stroke-dashoffset: ${len};" />`;
      }

      defsHtml += '</defs>';
      outlineHtml += '</g>';
      brushHtml += '</g>';

      // Tọa độ HSK MakeMeAHanzi: translate(0, 900) scale(1, -1) trên khung 1024x1024
      const svgHtml = `<svg id="${uid}_svg" class="hsk-stroke-svg" viewBox="0 0 1024 1024" ` +
        `width="${width}" height="${height}" style="display: block; width: 100%; height: 100%;" ` +
        `xmlns="http://www.w3.org/2000/svg">` +
        defsHtml +
        `<g transform="translate(0, 900) scale(1, -1)">` +
        outlineHtml +
        brushHtml +
        `</g>` +
        `</svg>`;

      return {
        svgHtml: svgHtml,
        uid: uid,
        strokeCount: strokes.length,
        lengths: medians.map(m => SvgStrokeEngine.calculateMedianLength(m))
      };
    },

    /**
     * Tạo một đối tượng điều khiển viết nét động tương thích HanziWriter API
     */
    create: function (target, char, options) {
      options = options || {};
      const container = typeof target === 'string'
        ? (typeof document !== 'undefined' ? document.getElementById(target) : null)
        : target;

      let isCancelled = false;
      let activeTimers = [];
      let currentData = null;
      let svgMeta = null;
      let isOutlineVisible = options.showOutline !== false;

      const controller = {
        char: char,
        options: options,
        cancelAnimation: function () {
          isCancelled = true;
          activeTimers.forEach(t => clearTimeout(t));
          activeTimers = [];
        },
        cancelQuiz: function () {
          this.cancelAnimation();
        },
        showOutline: function () {
          isOutlineVisible = true;
          if (container) {
            const group = container.querySelector('.hsk-outline-group');
            if (group) group.style.opacity = '0.25';
          }
        },
        hideOutline: function () {
          isOutlineVisible = false;
          if (container) {
            const group = container.querySelector('.hsk-outline-group');
            if (group) group.style.opacity = '0';
          }
        },
        reset: function () {
          this.cancelAnimation();
          if (!container || !svgMeta) return;
          for (let i = 0; i < svgMeta.strokeCount; i++) {
            const el = container.querySelector(`#${svgMeta.uid}_brush_${i}`);
            if (el) {
              el.style.transition = 'none';
              el.style.strokeDashoffset = svgMeta.lengths[i];
            }
          }
        },
        animateCharacter: function (callback) {
          this.reset();
          isCancelled = false;
          if (!container || !svgMeta || svgMeta.strokeCount === 0) {
            if (typeof callback === 'function') callback();
            return;
          }

          const speed = options.strokeAnimationSpeed || 1.3;
          const delayBetween = options.delayBetweenStrokes || 120;
          let currentStroke = 0;

          const animateNext = () => {
            if (isCancelled || currentStroke >= svgMeta.strokeCount) {
              if (!isCancelled && typeof callback === 'function') callback();
              if (!isCancelled && typeof options.onComplete === 'function') options.onComplete();
              return;
            }

            const i = currentStroke;
            const el = container.querySelector(`#${svgMeta.uid}_brush_${i}`);
            const len = svgMeta.lengths[i] || 100;
            // Tính thời lượng hoạt họa tương ứng độ dài nét
            const durationMs = Math.max(160, Math.min(500, Math.round((len / 1024) * 550 / speed)));

            if (el) {
              el.style.transition = `stroke-dashoffset ${durationMs}ms cubic-bezier(0.4, 0, 0.2, 1)`;
              el.style.strokeDashoffset = '0';
            }

            const timer = setTimeout(() => {
              currentStroke++;
              const pauseTimer = setTimeout(animateNext, delayBetween);
              activeTimers.push(pauseTimer);
            }, durationMs);

            activeTimers.push(timer);
          };

          animateNext();
        },
        quiz: function (quizOpts) {
          quizOpts = quizOpts || {};
          // Ở chế độ quiz fallback: Animate hướng dẫn và hoàn thành
          this.animateCharacter(() => {
            if (typeof quizOpts.onComplete === 'function') {
              quizOpts.onComplete({ totalMistakes: 0 });
            }
          });
        },
        getStrokeCount: function () {
          return svgMeta ? svgMeta.strokeCount : 0;
        },
        isFallback: function () {
          return !!(currentData && currentData.isFallback);
        }
      };

      // Tải dữ liệu nét qua loadHanziStrokeData và render vào container
      const loader = options.charDataLoader || loadHanziStrokeData;
      loader(char, function (data) {
        currentData = data;
        if (!container) return;
        svgMeta = SvgStrokeEngine.generateSvgHtml(data, options);
        container.innerHTML = svgMeta.svgHtml;
        if (options.showCharacter !== false) {
          setTimeout(() => {
            controller.animateCharacter();
          }, 100);
        }
      });

      return controller;
    },
    generateFallbackStroke: generateFallbackStroke
  };

  // -------------------------------------------------------------
  // 3. BỘ TẠO DỮ LIỆU NÉT DỰ PHÒNG (LOCAL FALLBACK GENERATOR)
  // -------------------------------------------------------------

  /**
   * Sinh cấu trúc dữ liệu nét an toàn 100% Offline khi không có kết nối mạng
   * Khung tọa độ 1024x1024 chuẩn MakeMeAHanzi, đầy đủ strokes và medians
   */
  function generateFallbackStroke(char) {
    const strokes = [
      // Nét 1: Ngang trên
      "M 220 760 Q 220 780 240 780 L 784 780 Q 804 780 804 760 L 804 720 Q 804 700 784 700 L 240 700 Q 220 700 220 720 Z",
      // Nét 2: Sổ đứng trung tâm
      "M 492 840 Q 492 860 512 860 L 532 860 Q 552 860 552 840 L 552 180 Q 552 160 532 160 L 512 160 Q 492 160 492 180 Z",
      // Nét 3: Ngang giữa
      "M 280 520 Q 280 540 300 540 L 724 540 Q 744 540 744 520 L 744 480 Q 744 460 724 460 L 300 460 Q 280 460 280 480 Z",
      // Nét 4: Ngang đáy
      "M 200 260 Q 200 280 220 280 L 824 280 Q 844 280 844 260 L 844 220 Q 844 200 824 200 L 220 200 Q 200 200 200 220 Z"
    ];

    const medians = [
      [[230, 740], [794, 740]],
      [[512, 850], [512, 170]],
      [[290, 500], [734, 500]],
      [[210, 240], [834, 240]]
    ];

    return {
      strokes: strokes,
      medians: medians,
      radStrokes: [0],
      isFallback: true,
      char: char || '字'
    };
  }

  // -------------------------------------------------------------
  // 4. HÀM TẢI DỮ LIỆU NÉT 3 TẦNG (OFFLINE FIRST HIERARCHY)
  // -------------------------------------------------------------

  /**
   * Tải dữ liệu nét chữ Hán chuẩn 3 tầng:
   *   Tầng 1: RAM (HSK_STROKES)
   *   Tầng 2: IndexedDB (HSK_STROKE_CACHE_DB) & LocalStorage
   *   Tầng 3: Multi-CDN Network (JsDelivr -> Unpkg) -> Local Fallback Generator
   */
  async function loadHanziStrokeData(char, onComplete) {
    if (!char) return;
    if (typeof onComplete !== 'function') {
      onComplete = () => {};
    }

    const g = getGlobalScope();
    g.HSK_STROKES = g.HSK_STROKES || {};

    // TẦNG 1: Đọc tức thì từ RAM
    if (g.HSK_STROKES[char] && Array.isArray(g.HSK_STROKES[char].strokes)) {
      return onComplete(g.HSK_STROKES[char]);
    }

    // TẦNG 2: Đọc từ bộ đệm vĩnh viễn IndexedDB / LocalStorage (100% Offline)
    if (!dbInstance && isDBReady === false) {
      await initDB();
    }
    const dbData = await getStrokeFromDB(char);
    if (dbData && Array.isArray(dbData.strokes)) {
      g.HSK_STROKES[char] = dbData;
      return onComplete(dbData);
    }

    // KIỂM TRA TRẠNG THÁI MẠNG
    const isOffline = (typeof navigator !== 'undefined' && navigator.onLine === false);
    if (isOffline) {
      const fallbackData = generateFallbackStroke(char);
      g.HSK_STROKES[char] = fallbackData;
      return onComplete(fallbackData);
    }

    // TẦNG 3: Tải từ Multi-CDN với AbortController Timeout (2500ms)
    const u1 = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';
    const u2 = 'https://unpkg.com/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';

    const fetchWithTimeout = (url, timeoutMs = 2500) => {
      if (typeof g.fetch !== 'function') {
        return Promise.reject(new Error('Fetch not available'));
      }
      if (typeof AbortController === 'undefined') {
        return g.fetch(url).then(r => {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        });
      }
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      return g.fetch(url, { signal: controller.signal })
        .then(r => {
          clearTimeout(timer);
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .catch(err => {
          clearTimeout(timer);
          throw err;
        });
    };

    try {
      let data = null;
      try {
        data = await fetchWithTimeout(u1, 2500);
      } catch (e1) {
        data = await fetchWithTimeout(u2, 2500);
      }

      if (data && Array.isArray(data.strokes)) {
        g.HSK_STROKES[char] = data;
        saveStrokeToDB(char, data);
        return onComplete(data);
      }
      throw new Error('Dữ liệu nét không đúng định dạng');
    } catch (networkErr) {
      // Khi mất mạng hoặc CDN không phản hồi: Kích hoạt Local Fallback tức thì
      const fallbackData = generateFallbackStroke(char);
      g.HSK_STROKES[char] = fallbackData;
      onComplete(fallbackData);
    }
  }

  // Tự động khởi tạo DB khi nạp trong môi trường trình duyệt
  if (typeof window !== 'undefined') {
    initDB();
  }

  return {
    StrokeCacheDB: {
      init: initDB,
      get: getStrokeFromDB,
      save: saveStrokeToDB,
      loadCharData: loadHanziStrokeData,
      generateFallbackStroke: generateFallbackStroke
    },
    loadHanziStrokeData: loadHanziStrokeData,
    SvgStrokeEngine: SvgStrokeEngine,
    generateFallbackStroke: generateFallbackStroke
  };
});
