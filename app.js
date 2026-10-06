// HSK 3.0 Thư Phòng — Core Controller
(function () {
  'use strict';

  // Global State
  let currentLevel = 'HSK4';
  let currentMode = 'study';
  let activeTab = 'tab-writing';
  let currentCharIndex = 0;
  let currentOrderIndex = 0;
  let currentBingjuIndex = 0;
  let currentEssayIndex = 0;
  
  // Hàm tính toán kích thước ô Mễ linh hoạt theo kích thước màn hình thiết bị
  function getResponsiveWriterSize() {
    const w = window.innerWidth;
    if (w < 360) return 230;
    if (w < 480) return 270;
    if (w < 768) return 300;
    if (w < 1024) return 340;
    return 360;
  }

  let hanziWriter = null;
  let outlineVisible = true;

  // Tracing Canvas State
  let currentBrushType = 'primary';
  function getThemeBrushColor(type = 'primary') {
    const prop = type === 'secondary' ? '--trace-brush-secondary' : '--trace-brush-primary';
    return getComputedStyle(document.documentElement).getPropertyValue(prop).trim() || (type === 'secondary' ? '#b93829' : '#2d2621');
  }
  let brushColor = getThemeBrushColor('primary');
  let brushSize = 4;
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  const data = window.HSK_DATA || {
    handwriting: { HSK4: [], HSK5: [], HSK6: [] },
    grammar: [],
    word_order: [],
    bingju: [],
    essay_structures: {}
  };


  // Helper to retrieve SVG illustration
  function getIllustrationSvg(key) {
    const svgs = data.svg_illustrations || {};
    if (svgs[key]) return svgs[key];
    // Fallback: Elegant traditional seal icon with the character inside
    return `<svg viewBox="0 0 100 100" class="vis-svg">
              <rect x="18" y="18" width="64" height="64" rx="8" fill="#fdfbf7" stroke="#b93829" stroke-width="2"/>
              <circle cx="50" cy="50" r="24" fill="none" stroke="#b93829" stroke-dasharray="3 3"/>
              <text x="50" y="58" font-family="serif" font-size="24" fill="#b93829" text-anchor="middle" font-weight="bold">${key.length > 2 ? key.slice(0, 2) : key}</text>
            </svg>`;
  }

  // TTS Audio Player
  function playAudio(text, audioUrl) {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play().catch(() => speakTTS(text));
    } else {
      speakTTS(text);
    }
  }

  function speakTTS(text) {
    if (!text) return;
    const cleanText = text.trim();

    // 1. Ưu tiên Native Android TTS Bridge (trên ứng dụng điện thoại APK)
    if (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function') {
      window.AndroidTTS.speak(cleanText);
      return;
    }

    // 2. Sử dụng Web Speech API chuẩn hệ điều hành (trên trình duyệt điện thoại/máy tính)
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'zh-CN';
      utterance.rate = 0.85;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
      return;
    }

    // 3. Dự phòng qua Audio Cloud Streaming nếu thiết bị không có voice offline
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(cleanText)}&type=1`;
    const audio = new Audio(audioUrl);
    audio.play().catch(() => {});
  }
  window.speakTTS = speakTTS;

  // --- TAB 1: LUYỆN VIẾT BẰNG BÚT (TỪNG CHỮ) ---
  function getHandwritingList(lvl) {
    if (data.handwriting && data.handwriting[lvl] && data.handwriting[lvl].length > 0) {
      return data.handwriting[lvl];
    }
    const dict = window.HSK_DICTIONARY || [];
    const lvlNum = parseInt((lvl || '').replace(/[^0-9]/g, '')) || 1;
    const chars = dict.filter(d => (d.lvl_num === lvlNum || d.lvl === (lvl || '').replace('HSK', 'HSK ')) && d.zh && d.zh.length === 1);
    if (chars.length > 0) {
      return chars.map(c => ({
        char: c.zh,
        pinyin: c.py || '',
        hanviet: c.hv || '',
        meaning: c.vi || c.en || '',
        compounds: []
      }));
    }
    return data.handwriting['HSK4'] || [];
  }

  // Hàm tải bất kỳ chữ Hán nào vào bàn tập viết nét HanziWriter
  function loadCharacterToWriter(char, meta) {
    if (!char) return;
    const ch = char.match(/[\u4e00-\u9fa5]/) ? char.match(/[\u4e00-\u9fa5]/)[0] : char.charAt(0);

    let pinyin = meta?.pinyin || '';
    let hanviet = meta?.hanviet || '';
    let meaning = meta?.meaning || '';

    if (!pinyin || !meaning) {
      const dItem = (window.HSK_DICTIONARY || []).find(d => d.zh === ch) || (window.HSK_DICTIONARY || []).find(d => d.zh.includes(ch)) || {};
      const stdEntry = (window.STANDARD_CHAR_DB && window.STANDARD_CHAR_DB[ch]) || {};
      pinyin = pinyin || dItem.py || stdEntry.py || '';
      hanviet = hanviet || dItem.hv || stdEntry.hv || '';
      meaning = meaning || dItem.vi || dItem.en || 'Tra cứu chữ Hán tự do (Hanzi Stroke Order)';
    }

    const pyEl = document.getElementById('char-pinyin');
    const hvEl = document.getElementById('char-hanviet');
    const mnEl = document.getElementById('char-meaning');
    const prEl = document.getElementById('char-progress');

    if (pyEl) pyEl.textContent = pinyin;
    if (hvEl) hvEl.textContent = hanviet ? `Hán-Việt: ${hanviet.toUpperCase()}` : '';
    if (mnEl) mnEl.textContent = meaning;
    if (prEl) prEl.textContent = `Tự nhập: [${ch}]`;

    const audioBtn = document.getElementById('char-audio-btn');
    if (audioBtn) {
      audioBtn.onclick = () => speakTTS(ch);
    }

    const visDesc = document.getElementById('char-visual-desc');
    if (visDesc) {
      visDesc.innerHTML = `<strong>Tập viết chữ Hán:</strong> ${ch} (${hanviet || ''})`;
    }

    const target = document.getElementById('hanzi-target');
    if (target && typeof HanziWriter !== 'undefined') {
      target.innerHTML = '';
      const style = getComputedStyle(document.documentElement);
      const strokeColor = style.getPropertyValue('--hanzi-stroke').trim() || '#2d2621';
      const outlineColor = style.getPropertyValue('--hanzi-outline').trim() || '#9e8a75';
      const drawingColor = style.getPropertyValue('--hanzi-drawing').trim() || '#b93829';

      const writerSize = getResponsiveWriterSize();
      hanziWriter = HanziWriter.create('hanzi-target', ch, {
        width: writerSize,
        height: writerSize,
        padding: 20,
        showOutline: outlineVisible,
        showCharacter: true,
        strokeAnimationSpeed: 1.4,
        delayBetweenStrokes: 150,
        strokeColor: strokeColor,
        outlineColor: outlineColor,
        drawingColor: drawingColor,
        charDataLoader: function(c, onComplete) {
          if (window.HSK_STROKES && window.HSK_STROKES[c]) {
            onComplete(window.HSK_STROKES[c]);
          } else {
            const u1 = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(c) + '.json';
            const u2 = 'https://unpkg.com/hanzi-writer-data@2.0/' + encodeURIComponent(c) + '.json';
            fetch(u1)
              .then(r => { if (!r.ok) throw new Error(); return r.json(); })
              .then(data => {
                window.HSK_STROKES = window.HSK_STROKES || {};
                window.HSK_STROKES[c] = data;
                onComplete(data);
              })
              .catch(() => {
                fetch(u2)
                  .then(r => r.json())
                  .then(data => {
                    window.HSK_STROKES = window.HSK_STROKES || {};
                    window.HSK_STROKES[c] = data;
                    onComplete(data);
                  })
                  .catch(() => {});
              });
          }
        }
      });

      setTimeout(() => {
        if (hanziWriter) hanziWriter.animateCharacter();
      }, 250);
    }
  }

  window.loadCharacterToWriter = loadCharacterToWriter;

  function renderWritingTab() {
    const list = getHandwritingList(currentLevel);
    if (list.length === 0) return;
    if (currentCharIndex >= list.length) currentCharIndex = 0;
    const item = list[currentCharIndex];

    const pyEl = document.getElementById('char-pinyin');
    const hvEl = document.getElementById('char-hanviet');
    const mnEl = document.getElementById('char-meaning');
    const prEl = document.getElementById('char-progress');

    if (pyEl) pyEl.textContent = item.pinyin || '';
    if (hvEl) hvEl.textContent = item.hanviet ? `Hán-Việt: ${item.hanviet.toUpperCase()}` : '';
    if (mnEl) mnEl.textContent = item.meaning ? item.meaning : 'Đang cập nhật giải nghĩa';
    if (prEl) prEl.textContent = `${currentCharIndex + 1} / ${list.length}`;

    const audioBtn = document.getElementById('char-audio-btn');
    if (audioBtn) {
      audioBtn.onclick = () => playAudio(item.char, item.audio);
    }

    // Render HSK Compounds & Context
    const visDesc = document.getElementById('char-visual-desc');
    if (visDesc) {
      const compounds = item.compounds || [];
      if (compounds.length > 0) {
        const compHtml = compounds.map(cp => 
          `<span class="compound-chip" onclick="window.speakTTS('${cp.word}')">
            <strong>${cp.word}</strong> <small class="cp-py">${cp.py}</small>: ${cp.meaning}
          </span>`
        ).join(' ');
        visDesc.innerHTML = `<div class="comp-title">📚 Từ ghép HSK thông dụng:</div><div class="comp-chips">${compHtml}</div>`;
      } else {
        visDesc.innerHTML = `<strong>Chữ Hán chuẩn HSK:</strong> ${item.char} (${item.hanviet || ''})`;
      }
    }

    const target = document.getElementById('hanzi-target');
    if (target) {
      target.innerHTML = '';
      if (typeof HanziWriter !== 'undefined') {
        const targetEl = document.getElementById('hanzi-target');
        if (targetEl) targetEl.innerHTML = '';

        const style = getComputedStyle(document.documentElement);
        const strokeColor = style.getPropertyValue('--hanzi-stroke').trim() || '#2d2621';
        const outlineColor = style.getPropertyValue('--hanzi-outline').trim() || '#9e8a75';
        const drawingColor = style.getPropertyValue('--hanzi-drawing').trim() || '#b93829';

        const writerSize = getResponsiveWriterSize();
        hanziWriter = HanziWriter.create('hanzi-target', item.char, {
          width: writerSize,
          height: writerSize,
          padding: 20,
          showOutline: outlineVisible,
          showCharacter: true,
          strokeAnimationSpeed: 1.4,
          delayBetweenStrokes: 150,
          strokeColor: strokeColor,
          outlineColor: outlineColor,
          drawingColor: drawingColor,
          charDataLoader: function(char, onComplete) {
            if (window.HSK_STROKES && window.HSK_STROKES[char]) {
              onComplete(window.HSK_STROKES[char]);
            } else {
              const u1 = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';
              const u2 = 'https://unpkg.com/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';
              fetch(u1)
                .then(r => { if (!r.ok) throw new Error(); return r.json(); })
                .then(data => {
                  window.HSK_STROKES = window.HSK_STROKES || {};
                  window.HSK_STROKES[char] = data;
                  onComplete(data);
                })
                .catch(() => {
                  fetch(u2)
                    .then(r => r.json())
                    .then(data => {
                      window.HSK_STROKES = window.HSK_STROKES || {};
                      window.HSK_STROKES[char] = data;
                      onComplete(data);
                    })
                    .catch(() => {});
                });
            }
          },
          onComplete: () => {
            const tip = document.getElementById('writing-status-tip');
            if (tip) tip.innerHTML = `🎉 <strong>Tuyệt vời!</strong> Bạn đã hoàn thành đúng thứ tự nét chữ [${item.char}]!`;
          }
        });

        // Tự động thị phạm nét chữ sau khi tải
        setTimeout(() => {
          if (hanziWriter && typeof hanziWriter.animateCharacter === 'function') {
            hanziWriter.animateCharacter();
          }
        }, 250);
      }
    }
  }

  // --- TAB 2: VỞ TẬP TÔ ĐOẠN VĂN (TRACING COPYBOOK) ---
  window._CUSTOM_ESSAYS = window._CUSTOM_ESSAYS || [];
  let currentActiveTracingItem = null;

  function getAllTracingItemsForLevel(lvlStr) {
    const lvlKey = lvlStr || currentLevel || 'HSK4';
    const items = [];

    // 1. Các đoạn văn mẫu chất lượng cao
    const practiceLib = (window.HSK_PRACTICE_ESSAYS && window.HSK_PRACTICE_ESSAYS[lvlKey]) || [];
    practiceLib.forEach(item => items.push({ ...item, group: 'standard' }));

    // Đoạn mẫu có sẵn trong data.js nếu có
    const legacyEssays = (data.essay_structures && data.essay_structures[lvlKey]) || [];
    legacyEssays.forEach(item => {
      if (!items.some(x => x.id === item.id)) {
        items.push({ ...item, group: 'standard' });
      }
    });

    // 2. Các bài đọc từ Giáo trình Chuẩn HSK 1-9
    if (typeof window.extractCurriculumPassages === 'function') {
      const currPassages = window.extractCurriculumPassages(lvlKey) || [];
      currPassages.slice(0, 15).forEach(item => items.push({ ...item, group: 'curriculum' }));
    }

    // 3. Các đoạn văn do người dùng tự tạo
    window._CUSTOM_ESSAYS.forEach(item => {
      items.push({ ...item, group: 'custom' });
    });

    
    // 3. Các đoạn văn Y học Cổ truyền kinh điển (TCM Classics)
    if (window.TCM_DATA && window.TCM_DATA.passages) {
      window.TCM_DATA.passages.forEach(p => {
        items.push({
          id: p.id,
          title: `🌿 [Đông Y] ${p.title}`,
          content: p.content_zh,
          trans: p.translation_vi,
          pinyin: p.pinyin,
          group: 'tcm'
        });
      });
    }

    return items;
  }

  function initTracingTab() {
    const selectEl = document.getElementById('tracing-select');
    if (!selectEl) return;

    populateTracingDropdown();

    selectEl.onchange = () => {
      const selectedId = selectEl.value;
      const allItems = getAllTracingItemsForLevel(currentLevel);
      const target = allItems.find(x => x.id === selectedId) || allItems[0];
      if (target) renderTracingSheet(target);
    };

    // Nút nghe phát âm đoạn văn
    const audioBtn = document.getElementById('btn-tracing-audio');
    if (audioBtn) {
      audioBtn.onclick = () => {
        if (currentActiveTracingItem && currentActiveTracingItem.sample_zh) {
          speakTTS(currentActiveTracingItem.sample_zh);
        }
      };
    }

    // Nút chọn ngẫu nhiên một đoạn văn
    const randomBtn = document.getElementById('btn-tracing-random');
    if (randomBtn) {
      randomBtn.onclick = () => {
        const allItems = getAllTracingItemsForLevel(currentLevel);
        if (allItems.length <= 1) return;
        const currentId = selectEl.value;
        const pool = allItems.filter(x => x.id !== currentId);
        const randomItem = pool[Math.floor(Math.random() * pool.length)] || allItems[0];
        selectEl.value = randomItem.id;
        renderTracingSheet(randomItem);
      };
    }

    // Nút mở/đóng panel tự tạo đoạn văn theo từ vựng tự chọn
    const customBtn = document.getElementById('btn-tracing-custom');
    const customPanel = document.getElementById('tracing-custom-panel');
    const closePanelBtn = document.getElementById('btn-close-custom-panel');
    const submitGenBtn = document.getElementById('btn-submit-generate-essay');

    if (customBtn && customPanel) {
      customBtn.onclick = () => {
        const isHidden = customPanel.style.display === 'none';
        customPanel.style.display = isHidden ? 'block' : 'none';
        if (isHidden) {
          const wordsInput = document.getElementById('custom-essay-words');
          if (wordsInput) wordsInput.focus();
        }
      };
    }

    if (closePanelBtn && customPanel) {
      closePanelBtn.onclick = () => {
        customPanel.style.display = 'none';
      };
    }

    if (submitGenBtn) {
      submitGenBtn.onclick = () => {
        const lvlVal = document.getElementById('custom-essay-level')?.value || '4';
        const wordsVal = document.getElementById('custom-essay-words')?.value?.trim();
        if (!wordsVal) {
          alert('Vui lòng nhập ít nhất 1-2 từ vựng tiếng Trung!');
          return;
        }

        if (typeof window.generateCustomEssay === 'function') {
          const generated = window.generateCustomEssay(lvlVal, wordsVal);
          window._CUSTOM_ESSAYS.unshift(generated);
          
          // Đóng panel và nạp ngay vào bàn tập tô
          if (customPanel) customPanel.style.display = 'none';
          populateTracingDropdown(generated.id);
          renderTracingSheet(generated);
        }
      };
    }

    // Nạp bài đầu tiên
    const allItems = getAllTracingItemsForLevel(currentLevel);
    if (allItems.length > 0) {
      renderTracingSheet(allItems[0]);
    }
    setupTracingCanvas();
  }

  function populateTracingDropdown(selectTargetId) {
    const selectEl = document.getElementById('tracing-select');
    if (!selectEl) return;
    selectEl.innerHTML = '';

    const allItems = getAllTracingItemsForLevel(currentLevel);

    const groupStandard = document.createElement('optgroup');
    groupStandard.label = '📝 Đoạn Văn Mẫu Tiêu Chuẩn';

    const groupCurriculum = document.createElement('optgroup');
    groupCurriculum.label = '📚 Trích Đoạn Giáo Trình Chuẩn HSK';

    const groupCustom = document.createElement('optgroup');
    groupCustom.label = '✨ Đoạn Văn Bạn Tự Tạo';

    allItems.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = item.title;
      if (item.group === 'custom') groupCustom.appendChild(opt);
      else if (item.group === 'curriculum') groupCurriculum.appendChild(opt);
      else groupStandard.appendChild(opt);
    });

    if (groupCustom.children.length > 0) selectEl.appendChild(groupCustom);
    if (groupStandard.children.length > 0) selectEl.appendChild(groupStandard);
    if (groupCurriculum.children.length > 0) selectEl.appendChild(groupCurriculum);

    if (selectTargetId) {
      selectEl.value = selectTargetId;
    } else if (allItems.length > 0) {
      selectEl.value = allItems[0].id;
    }
  }

  function renderTracingSheet(targetItem) {
    if (!targetItem) return;
    currentActiveTracingItem = targetItem;

    // Tự động phân tích annotation nếu chưa có
    if (!targetItem.chars_annotated || targetItem.chars_annotated.length === 0) {
      if (typeof window.annotateChineseText === 'function') {
        const ann = window.annotateChineseText(targetItem.sample_zh);
        targetItem.chars_annotated = ann.chars_annotated;
        if (!targetItem.sample_pinyin) targetItem.sample_pinyin = ann.pinyin;
        if (!targetItem.sample_hanviet) targetItem.sample_hanviet = ann.hanviet;
      }
    }

    // 1. Hiển thị 4 tầng nội dung đầy đủ ở trên
    const meanEl = document.getElementById('tracing-meaning-text');
    if (meanEl) {
      meanEl.innerHTML = `
        <div class="tracing-full-zh">${targetItem.sample_zh || ''}</div>
        <div class="tracing-full-py">${targetItem.sample_pinyin || ''}</div>
        <div class="tracing-full-hv">Hán-Việt: ${targetItem.sample_hanviet || ''}</div>
        <div class="tracing-full-vi">➔ Dịch nghĩa: ${targetItem.sample_vi || ''}</div>
      `;
    }

    // 2. Sinh lưới ô Mễ Tự Cách (Tian Zi Ge / Mi Zi Ge)
    const container = document.getElementById('mige-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const annotated = targetItem.chars_annotated || [];
    annotated.forEach(an => {
      const cell = document.createElement('div');
      if (an.is_punct) {
        cell.className = 'trace-cell punct';
        cell.innerHTML = `<div class="trace-punct-box">${an.ch}</div>`;
      } else {
        cell.className = 'trace-cell';
        cell.innerHTML = `
          <div class="trace-py">${an.py || ''}</div>
          <div class="trace-box">
            <span class="trace-shadow-char">${an.ch}</span>
          </div>
          <div class="trace-hv">${an.hv || ''}</div>
        `;
      }
      container.appendChild(cell);
    });

    // Xóa vết vẽ cũ và canh chỉnh lại canvas
    const canvas = document.getElementById('tracing-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    setTimeout(() => {
      resizeTracingCanvas();
    }, 60);
  }

  let tracingListenersAttached = false;
  function setupTracingCanvas() {
    if (tracingListenersAttached) return;
    const canvas = document.getElementById('tracing-canvas');
    if (!canvas) return;
    tracingListenersAttached = true;
    const ctx = canvas.getContext('2d');

    function getCoords(e) {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    }

    function startDraw(e) {
      isDrawing = true;
      const coords = getCoords(e);
      lastX = coords.x;
      lastY = coords.y;
    }

    function draw(e) {
      if (!isDrawing) return;
      e.preventDefault();
      const coords = getCoords(e);

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(coords.x, coords.y);
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      lastX = coords.x;
      lastY = coords.y;
    }

    function stopDraw() {
      isDrawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDraw);

    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    window.addEventListener('touchend', stopDraw);

    // Color and size buttons
    const btnBlack = document.getElementById('brush-black');
    const btnRed = document.getElementById('brush-red');
    if (btnBlack && btnRed) {
      btnBlack.onclick = () => {
        currentBrushType = 'primary';
        brushColor = getThemeBrushColor('primary');
        btnBlack.classList.add('active');
        btnRed.classList.remove('active');
      };
      btnRed.onclick = () => {
        currentBrushType = 'secondary';
        brushColor = getThemeBrushColor('secondary');
        btnRed.classList.add('active');
        btnBlack.classList.remove('active');
      };
    }

    const btnSm = document.getElementById('size-sm');
    const btnMd = document.getElementById('size-md');
    const btnLg = document.getElementById('size-lg');
    if (btnSm && btnMd && btnLg) {
      btnSm.onclick = () => { brushSize = 2.5; setActiveSize(btnSm); };
      btnMd.onclick = () => { brushSize = 4.5; setActiveSize(btnMd); };
      btnLg.onclick = () => { brushSize = 7.0; setActiveSize(btnLg); };
    }

    function setActiveSize(activeBtn) {
      [btnSm, btnMd, btnLg].forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');
    }

    const btnClear = document.getElementById('btn-clear-tracing');
    if (btnClear) {
      btnClear.onclick = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }

  function resizeTracingCanvas() {
    const canvas = document.getElementById('tracing-canvas');
    const container = document.getElementById('mige-grid-container');
    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
  }

  window.addEventListener('resize', resizeTracingCanvas);
  
  
  // --- TAB 3: LUYỆN VIẾT & PHÂN TÍCH ĐOẠN VĂN (WRITING LAB) ---
  function renderEssayTab() {
    const structures = data.essay_structures || {};
    const list = structures[currentLevel] || [];
    if (list.length === 0) return;
    if (currentEssayIndex >= list.length) currentEssayIndex = 0;
    const item = list[currentEssayIndex];

    const zhEl = document.getElementById('sample-essay-zh');
    const pyEl = document.getElementById('sample-essay-py');
    const hvEl = document.getElementById('sample-essay-hv');
    const viEl = document.getElementById('sample-essay-vi');

    if (zhEl) zhEl.textContent = item.sample_zh || '';
    if (pyEl) pyEl.textContent = item.sample_pinyin ? `Pinyin: ${item.sample_pinyin}` : '';
    if (hvEl) hvEl.textContent = item.sample_hanviet ? `Hán-Việt: ${item.sample_hanviet}` : '';
    if (viEl) viEl.textContent = item.sample_vi ? `Dịch nghĩa: ${item.sample_vi}` : '';

    const structBox = document.getElementById('structure-analysis-box');
    if (structBox) {
      structBox.innerHTML = '';
      (item.structure || []).forEach(st => {
        const blk = document.createElement('div');
        blk.className = 'struct-item';
        blk.innerHTML = `
          <div class="struct-role">${st.part}</div>
          <div class="struct-sample-zh">${st.zh}</div>
          <div class="struct-sample-py">${st.py}</div>
          <div class="struct-sample-hv">[${st.hv}]</div>
          <div class="struct-sample-vi">➔ ${st.vi}</div>
          <div class="struct-tip">💡 ${st.tip}</div>
        `;
        structBox.appendChild(blk);
      });
    }

    const guideEl = document.getElementById('essay-guideline');
    if (guideEl) guideEl.textContent = item.guideline;

    const kwBox = document.getElementById('essay-keywords');
    if (kwBox) {
      kwBox.innerHTML = '';
      (item.words || []).forEach(w => {
        const card = document.createElement('div');
        card.className = 'visual-flashcard';
        card.innerHTML = `
          <button class="vcard-sound-btn" title="Nghe đọc">🔊</button>
          <div class="vcard-vi">${w.mean ? w.mean.split(';')[0] : w.zh}</div>
          <div class="vcard-img-wrap">${getIllustrationSvg(w.zh)}</div>
          <div class="vcard-zh">${w.zh}</div>
          <div class="vcard-py">${w.py}</div>
          <div class="vcard-hv">${w.hv}</div>
        `;
        const sBtn = card.querySelector('.vcard-sound-btn');
        if (sBtn) sBtn.onclick = (e) => { e.stopPropagation(); speakTTS(w.zh); };
        card.onclick = () => speakTTS(w.zh);
        kwBox.appendChild(card);
      });
    }

    const counter = document.getElementById('char-counter');
    if (counter) counter.textContent = `0 / ${item.targetLength.max} chữ`;

    const feedback = document.getElementById('essay-feedback');
    if (feedback) {
      feedback.className = 'feedback-paper-card';
      feedback.textContent = '';
    }

    updateEssayRubric(0, []);
  }

  function updateEssayRubric(charCount, usedWords) {
    const structures = data.essay_structures || {};
    const list = structures[currentLevel] || [];
    if (list.length === 0) return;
    const item = list[currentEssayIndex];

    const rubricBox = document.getElementById('checklist-section');
    if (!rubricBox) return;

    const wordList = (item.words || []).map(w => w.zh);
    const missingWords = wordList.filter(w => !usedWords.includes(w));
    const allWordsUsed = missingWords.length === 0;
    const isLenOk = charCount >= item.targetLength.min && charCount <= item.targetLength.max;

    rubricBox.innerHTML = `
      <div class="rubric-item ${allWordsUsed ? 'passed' : ''}">
        <span>${allWordsUsed ? '✓' : '○'}</span>
        <span>Lồng ghép đủ ${wordList.length} từ mới: ${wordList.join(', ')} ${allWordsUsed ? '(Đã đủ)' : `(Còn thiếu: ${missingWords.join(', ')})`}</span>
      </div>
      <div class="rubric-item ${isLenOk ? 'passed' : ''}">
        <span>${isLenOk ? '✓' : '○'}</span>
        <span>Độ dài văn bản chuẩn HSK: ${charCount}/${item.targetLength.min}–${item.targetLength.max} chữ</span>
      </div>
      <div class="rubric-item ${charCount >= 20 ? 'passed' : ''}">
        <span>${charCount >= 20 ? '✓' : '○'}</span>
        <span>Đầy đủ 3 phần: Mở đoạn ➔ Luận điểm ➔ Kết đoạn</span>
      </div>
    `;
  }

  function evaluateEssay() {
    const structures = data.essay_structures || {};
    const list = structures[currentLevel] || [];
    if (list.length === 0) return;
    const item = list[currentEssayIndex];

    const textarea = document.getElementById('essay-input');
    const text = textarea ? textarea.value.trim() : '';
    const charCount = text.replace(/\s+/g, '').length;

    const wordList = (item.words || []).map(w => w.zh);
    const usedWords = wordList.filter(w => text.includes(w));
    const allWords = usedWords.length === wordList.length;
    const isLenOk = charCount >= item.targetLength.min;

    const fb = document.getElementById('essay-feedback');
    if (!fb) return;
    fb.classList.add('show');

    if (allWords && isLenOk) {
      fb.className = 'feedback-paper-card show success';
      fb.innerHTML = `<strong>🎉 Bài viết rất xuất sắc!</strong> Đạt chuẩn dung lượng ${charCount} chữ và sử dụng đầy đủ các từ mới bắt buộc.<br>
                      <em>Gợi ý luyện tập thêm:</em> Lắng nghe phát âm toàn bài và đối chiếu với bản dịch nghĩa phía trên để hoàn thiện văn phong.`;
      speakTTS(text);
    } else {
      fb.className = 'feedback-paper-card show warning';
      const missing = wordList.filter(w => !usedWords.includes(w));
      fb.innerHTML = `<strong>⚠️ Cần bổ sung thêm:</strong><br>
                      ${!isLenOk ? `- Số chữ hiện tại (${charCount}) chưa đạt chuẩn tối thiểu ${item.targetLength.min} chữ.<br>` : ''}
                      ${!allWords ? `- Chưa có các từ mới: ${missing.join(', ')}.` : ''}`;
    }
  }


  function renderDirectionalGallery() {
    const grid = document.getElementById('directional-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = data.directional_cards || [];
    list.forEach(c => {
      const card = document.createElement('div');
      card.className = 'visual-flashcard';
      card.innerHTML = `
        <button class="vcard-sound-btn" title="Nghe đọc">🔊</button>
        <div class="vcard-vi">${c.vi}</div>
        <div class="vcard-img-wrap">${getIllustrationSvg(c.zh)}</div>
        <div class="vcard-zh">${c.zh}</div>
        <div class="vcard-py">${c.py}</div>
        <div class="vcard-hv">${c.hv}</div>
      `;
      const sBtn = card.querySelector('.vcard-sound-btn');
      if (sBtn) sBtn.onclick = (e) => { e.stopPropagation(); speakTTS(c.zh); };
      card.onclick = () => speakTTS(c.zh);
      grid.appendChild(card);
    });
  }

  // --- TAB 4: THƯ VIỆN NGỮ PHÁP SONG NGỮ ---
  function renderGrammarTab(searchQuery = '') {
    const listEl = document.getElementById('grammar-items-list');
    const countEl = document.getElementById('grammar-total-count');
    if (!listEl) return;
    listEl.innerHTML = '';

    const lvlNum = parseInt(currentLevel.replace('HSK', ''));
    let filtered = (data.grammar || []).filter(g => g.level === lvlNum);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(g => {
        return (g.label && g.label.toLowerCase().includes(q)) ||
               (g.label_pinyin && g.label_pinyin.toLowerCase().includes(q)) ||
               (g.label_hanviet && g.label_hanviet.toLowerCase().includes(q)) ||
               (g.cat_vn && g.cat_vn.toLowerCase().includes(q)) ||
               (g.sub_vn && g.sub_vn.toLowerCase().includes(q)) ||
               (g.examples && g.examples.some(ex => ex.zh.includes(q) || ex.pinyin.includes(q) || ex.hanviet.includes(q)));
      });
    }

    if (countEl) countEl.textContent = `${filtered.length} điểm ngữ pháp`;

    if (filtered.length === 0) {
      listEl.innerHTML = '<p style="color:var(--ink-muted); text-align:center; padding:20px;">Không tìm thấy điểm ngữ pháp phù hợp.</p>';
      return;
    }

    filtered.forEach(g => {
      const card = document.createElement('div');
      card.className = 'grammar-entry-card';
      
      const exHtml = (g.examples || []).slice(0, 2).map(ex => `
        <div class="ex-block">
          <div class="ex-zh">• ${ex.zh}</div>
          <div class="ex-py">  ${ex.pinyin}</div>
          <div class="ex-hv">  Hán-Việt: ${ex.hanviet}</div>
        </div>
      `).join('');
      
      card.innerHTML = `
        <div class="grammar-header-row">
          <span class="grammar-point-title">${g.label || 'Ngữ pháp'}</span>
          <span class="grammar-category-badge">${g.cat_vn || ''} ➔ ${g.sub_vn || ''}</span>
        </div>
        <div class="grammar-full-label">
          <em>Pinyin:</em> ${g.label_pinyin || ''} | <em>Hán-Việt:</em> ${g.label_hanviet || ''}<br>
          <small style="color:var(--ink-muted)">${g.label_full || ''}</small>
        </div>
        ${exHtml ? `<div class="grammar-examples-box">${exHtml}</div>` : ''}
      `;
      listEl.appendChild(card);
    });
  }


  // --- TAB 4: BỘ GIÁO TRÌNH HÁN NGỮ TOÀN DIỆN HSK 1 - HSK 9 ---
  let currSelectedLevel = 'HSK 5';
  let currSelectedLessonIdx = 0;
  let currSubnavListenersAttached = false;

  function initCurriculumTab() {
    const levelSelect = document.getElementById('curriculum-level-select');
    const lessonSelect = document.getElementById('curriculum-lesson-select');
    if (!levelSelect || !lessonSelect) return;

    setupCurriculumSubnav();

    // Map global level to curriculum level if available
    if (currentLevel && ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6', 'HSK 7-9'].includes(currentLevel)) {
      currSelectedLevel = currentLevel;
      levelSelect.value = currSelectedLevel;
    }

    function populateLessons(lvl) {
      lessonSelect.innerHTML = '';
      const dataset = (window.HSK_FULL_CURRICULUM && window.HSK_FULL_CURRICULUM[lvl]) || [];

      dataset.forEach((l, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `Bài ${l.no}: ${l.titleZh} ${l.titleEn ? `(${l.titleEn})` : ''}`;
        lessonSelect.appendChild(opt);
      });

      currSelectedLessonIdx = 0;
      if (dataset.length > 0) {
        renderCurriculumLesson(lvl, 0);
      }
    }

    levelSelect.onchange = () => {
      currSelectedLevel = levelSelect.value;
      populateLessons(currSelectedLevel);
    };

    lessonSelect.onchange = () => {
      currSelectedLessonIdx = parseInt(lessonSelect.value) || 0;
      renderCurriculumLesson(currSelectedLevel, currSelectedLessonIdx);
    };

    populateLessons(currSelectedLevel);
  }

  function setupCurriculumSubnav() {
    if (currSubnavListenersAttached) return;
    currSubnavListenersAttached = true;

    document.querySelectorAll('.curr-subtab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.curr-subtab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.curr-content-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.dataset.subtab;
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      };
    });
  }

  
  // ==========================================================================
  // HỆ THỐNG TỰ ĐỘNG RENDER HÌNH ẢNH MINH HỌA TRỰC QUAN (DYNAMIC SEMANTIC SVG)
  // ==========================================================================
  function renderWordSvg(zh, py, meaning, pos) {
    const z = zh || '';
    const m = (meaning || '').toLowerCase();

    // 1. Phát thanh / Truyền thông / Âm thanh
    if (z.includes('电台') || z.includes('广播') || z.includes('电视') || m.includes('đài') || m.includes('phát thanh')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 52 L50 20" stroke="var(--ink-primary)" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="54" r="5" fill="var(--vermilion)"/>
        <circle cx="50" cy="18" r="4" fill="var(--amber-gold)"/>
        <path d="M40 14 A 14 14 0 0 0 40 26" stroke="var(--vermilion)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M60 14 A 14 14 0 0 1 60 26" stroke="var(--vermilion)" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M32 8 A 24 24 0 0 0 32 32" stroke="var(--amber-gold)" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
        <path d="M68 8 A 24 24 0 0 1 68 32" stroke="var(--amber-gold)" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/>
      </svg>`;
    }

    // 2. Tình cảm / Ân ái / Tình yêu / Hôn nhân
    if (z.includes('恩爱') || z.includes('爱') || z.includes('情') || m.includes('yêu') || m.includes('ân ái') || m.includes('tình')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 26 C36 17 25 15 21 23 C17 15 6 17 6 26 C6 37 21 46 21 46 C21 46 36 37 36 26 Z" fill="var(--vermilion)" opacity="0.8"/>
        <path d="M66 28 C66 18 53 15 49 24 C45 15 32 18 32 28 C32 41 49 52 49 52 C49 52 66 41 66 28 Z" fill="var(--vermilion)"/>
        <circle cx="74" cy="16" r="3" fill="var(--amber-gold)"/>
        <circle cx="82" cy="22" r="2" fill="var(--amber-gold)"/>
      </svg>`;
    }

    // 3. So sánh / Đối chiếu / Cán cân
    if (z.includes('对比') || z.includes('比较') || z.includes('比') || m.includes('so sánh') || m.includes('đối chiếu')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="12" x2="50" y2="56" stroke="var(--ink-primary)" stroke-width="3" stroke-linecap="round"/>
        <line x1="25" y1="56" x2="75" y2="56" stroke="var(--ink-primary)" stroke-width="3" stroke-linecap="round"/>
        <line x1="20" y1="22" x2="80" y2="22" stroke="var(--vermilion)" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="50" cy="22" r="3.5" fill="var(--amber-gold)"/>
        <path d="M20 22 L14 38 L30 38 Z" fill="none" stroke="var(--ink-secondary)" stroke-width="1.8"/>
        <path d="M80 22 L74 34 L90 34 Z" fill="none" stroke="var(--ink-secondary)" stroke-width="1.8"/>
        <circle cx="22" cy="35" r="3" fill="var(--vermilion)"/>
        <circle cx="82" cy="31" r="3" fill="var(--amber-gold)"/>
      </svg>`;
    }

    // 4. Vào vòng trong / Thi đấu / Cúp / Giải thưởng
    if (z.includes('入围') || z.includes('奖') || z.includes('赢') || z.includes('赛') || m.includes('vòng trong') || m.includes('giải')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 16 L65 16 L60 38 C58 44 54 48 50 48 C46 48 42 44 40 38 Z" fill="var(--amber-gold)"/>
        <line x1="50" y1="48" x2="50" y2="58" stroke="var(--amber-gold)" stroke-width="4"/>
        <rect x="34" y="58" width="32" height="6" rx="2" fill="var(--ink-primary)"/>
        <path d="M35 22 C26 22 24 32 37 34" fill="none" stroke="var(--amber-gold)" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M65 22 C74 22 76 32 63 34" fill="none" stroke="var(--amber-gold)" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="50,22 53,29 60,29 55,34 57,41 50,37 43,41 45,34 40,29 47,29" fill="#ffffff" opacity="0.9"/>
      </svg>`;
    }

    // 5. Ban giám khảo / Đánh giá / Chấm điểm
    if (z.includes('评委') || z.includes('考') || z.includes('检查') || z.includes('审') || m.includes('giám khảo') || m.includes('đánh giá')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="12" width="40" height="50" rx="4" fill="var(--paper-card)" stroke="var(--ink-primary)" stroke-width="2.5"/>
        <rect x="42" y="8" width="16" height="8" rx="2" fill="var(--vermilion)"/>
        <line x1="38" y1="26" x2="62" y2="26" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"/>
        <line x1="38" y1="36" x2="62" y2="36" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"/>
        <line x1="38" y1="46" x2="52" y2="46" stroke="var(--ink-secondary)" stroke-width="2" stroke-linecap="round"/>
        <path d="M58 44 L63 50 L74 38" fill="none" stroke="var(--vermilion)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    }

    // 6. Chi tiết / Kính lúp / Quan sát
    if (z.includes('细节') || z.includes('察') || z.includes('看') || z.includes('见') || m.includes('chi tiết') || m.includes('quan sát')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="16" width="36" height="42" rx="3" fill="var(--paper-card)" stroke="var(--border-paper)" stroke-width="2"/>
        <line x1="26" y1="24" x2="48" y2="24" stroke="var(--ink-muted)" stroke-width="2" stroke-dasharray="2 2"/>
        <line x1="26" y1="32" x2="44" y2="32" stroke="var(--ink-muted)" stroke-width="2" stroke-dasharray="2 2"/>
        <line x1="26" y1="40" x2="48" y2="40" stroke="var(--ink-muted)" stroke-width="2" stroke-dasharray="2 2"/>
        <circle cx="56" cy="30" r="16" fill="var(--vermilion-soft)" stroke="var(--vermilion)" stroke-width="3"/>
        <circle cx="56" cy="30" r="10" fill="none" stroke="var(--amber-gold)" stroke-width="1.5" stroke-dasharray="3 2"/>
        <line x1="68" y1="42" x2="84" y2="58" stroke="var(--ink-primary)" stroke-width="4.5" stroke-linecap="round"/>
      </svg>`;
    }

    // 7. Y tế / Bệnh tật / Liệt / Sức khỏe
    if (z.includes('瘫痪') || z.includes('病') || z.includes('医') || z.includes('药') || m.includes('bệnh') || m.includes('y tế') || m.includes('liệt')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="14" width="50" height="46" rx="6" fill="var(--paper-card)" stroke="var(--border-paper)" stroke-width="2"/>
        <rect x="44" y="22" width="12" height="30" rx="2" fill="var(--vermilion)"/>
        <rect x="35" y="31" width="30" height="12" rx="2" fill="var(--vermilion)"/>
        <path d="M20 54 Q 30 50 40 54 T 60 54 T 80 54" fill="none" stroke="var(--amber-gold)" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }

    // 8. Ly hôn / Chia rẽ / Rẽ nhánh
    if (z.includes('离婚') || z.includes('分') || z.includes('别') || m.includes('ly hôn') || m.includes('chia')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M42 22 C42 14 32 12 28 19 C24 12 14 14 14 22 C14 31 28 38 28 38 C28 38 42 31 42 22 Z" fill="var(--ink-muted)"/>
        <path d="M86 22 C86 14 76 12 72 19 C68 12 58 14 58 22 C58 31 72 38 72 38 C72 38 86 31 86 22 Z" fill="var(--ink-muted)"/>
        <line x1="50" y1="10" x2="50" y2="58" stroke="var(--vermilion)" stroke-width="2.5" stroke-dasharray="4 3" stroke-linecap="round"/>
        <path d="M36 50 L24 50 L30 44" fill="none" stroke="var(--amber-gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M64 50 L76 50 L70 44" fill="none" stroke="var(--amber-gold)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    }

    // 9. Như thế nào / Câu hỏi / Suy nghĩ
    if (z.includes('如何') || z.includes('么') || z.includes('问') || z.includes('疑') || m.includes('thế nào') || m.includes('sao')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 18 C26 12 36 8 50 8 C64 8 74 12 74 24 C74 34 60 36 56 42" fill="none" stroke="var(--vermilion)" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="56" cy="52" r="3.5" fill="var(--vermilion)"/>
        <circle cx="30" cy="46" r="3" fill="var(--amber-gold)"/>
        <circle cx="20" cy="52" r="2" fill="var(--amber-gold)"/>
      </svg>`;
    }

    // 10. Cảnh báo / Nguy hiểm / Sinh mệnh
    if (z.includes('杀') || z.includes('险') || z.includes('害') || m.includes('nguy') || m.includes('hại')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,12 82,58 18,58" fill="var(--vermilion-soft)" stroke="var(--vermilion)" stroke-width="3" stroke-linejoin="round"/>
        <line x1="50" y1="26" x2="50" y2="42" stroke="var(--vermilion)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="50" r="2.5" fill="var(--vermilion)"/>
      </svg>`;
    }

    // 11. Kết hôn / Nhẫn cưới / Gia đình
    if (z.includes('结婚') || z.includes('婚') || z.includes('家') || m.includes('kết hôn') || m.includes('cưới')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="38" r="16" fill="none" stroke="var(--amber-gold)" stroke-width="3.5"/>
        <circle cx="60" cy="38" r="16" fill="none" stroke="var(--amber-gold)" stroke-width="3.5"/>
        <polygon points="40,16 44,22 40,24 36,22" fill="var(--vermilion)"/>
      </svg>`;
    }

    // 12. Di chuyển / Phương hướng / Du lịch
    if (z.includes('走') || z.includes('去') || z.includes('来') || z.includes('车') || z.includes('路') || m.includes('đi') || m.includes('xe')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="35" r="24" fill="none" stroke="var(--border-paper)" stroke-width="2"/>
        <circle cx="50" cy="35" r="4" fill="var(--ink-primary)"/>
        <polygon points="50,15 55,35 50,32 45,35" fill="var(--vermilion)"/>
        <polygon points="50,55 55,35 50,38 45,35" fill="var(--ink-muted)"/>
        <text x="50" y="12" text-anchor="middle" font-size="9" font-weight="700" fill="var(--vermilion)">N</text>
      </svg>`;
    }

    // 13. Học tập / Sách vở / Tri thức
    if (z.includes('书') || z.includes('读') || z.includes('学') || z.includes('文') || m.includes('sách') || m.includes('học')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 48 C40 44 26 44 16 47 L16 20 C26 17 40 17 50 21 Z" fill="var(--paper-card)" stroke="var(--vermilion)" stroke-width="2"/>
        <path d="M50 48 C60 44 74 44 84 47 L84 20 C74 17 60 17 50 21 Z" fill="var(--paper-card)" stroke="var(--vermilion)" stroke-width="2"/>
        <line x1="50" y1="21" x2="50" y2="49" stroke="var(--ink-primary)" stroke-width="2.5"/>
        <path d="M48 12 L56 6 L62 10" fill="none" stroke="var(--amber-gold)" stroke-width="2" stroke-linecap="round"/>
      </svg>`;
    }

    // 14. Tiền bạc / Mua bán / Kinh tế
    if (z.includes('钱') || z.includes('买') || z.includes('卖') || z.includes('元') || m.includes('tiền') || m.includes('mua')) {
      return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="35" r="22" fill="var(--amber-gold)" opacity="0.15" stroke="var(--amber-gold)" stroke-width="2.5"/>
        <rect x="42" y="27" width="16" height="16" fill="none" stroke="var(--amber-gold)" stroke-width="2.5"/>
        <circle cx="50" cy="35" r="3" fill="var(--vermilion)"/>
      </svg>`;
    }

    // 15. Default: Elegant Traditional Calligraphy Seal Plaque
    return `<svg viewBox="0 0 100 70" width="100" height="70" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="8" width="56" height="54" rx="8" fill="var(--paper-card-sub)" stroke="var(--border-paper)" stroke-width="1.5"/>
      <rect x="26" y="12" width="48" height="46" rx="5" fill="none" stroke="var(--vermilion)" stroke-width="1" stroke-dasharray="3 2" opacity="0.6"/>
      <text x="50" y="44" text-anchor="middle" font-family="var(--font-chinese)" font-size="26" font-weight="700" fill="var(--vermilion)">${z.charAt(0)}</text>
      <circle cx="68" cy="18" r="2.5" fill="var(--amber-gold)"/>
    </svg>`;
  }


  // Hàm làm nổi bật từ mới & cấu trúc ngữ pháp thuộc bài học trong văn bản
  function highlightLessonKeywords(zhText, vocabList, grammarList) {
    if (!zhText) return '';
    const keywords = [];
    const grammarWordsSet = new Set();

    // 1. Nạp các cấu trúc ngữ pháp trước (Ưu tiên hiển thị kiểu ngữ pháp)
    (grammarList || []).forEach(g => {
      const title = g.titleZh || g.content || '';
      if (title && title.length >= 1) {
        grammarWordsSet.add(title);
        keywords.push({
          word: title,
          type: 'grammar',
          title: `Cấu trúc Ngữ pháp: ${title} (${g.titleEn || ''})`
        });
      }
    });

    // 2. Nạp từ mới (Nếu từ nào trùng với ngữ pháp thì ưu tiên ngữ pháp)
    (vocabList || []).forEach(v => {
      const h = v.hanzi || v.zh;
      if (h && h.length >= 1 && !grammarWordsSet.has(h)) {
        keywords.push({
          word: h,
          type: 'vocab',
          title: `Từ mới: ${h} (${v.pinyin || v.py || ''}) — ${v.vi || v.en || ''}`
        });
      }
    });

    // Sắp xếp cụm từ dài lên trước để tránh nuốt từ ghép
    keywords.sort((a, b) => b.word.length - a.word.length);

    let result = zhText;
    const tokens = [];
    keywords.forEach((kw, idx) => {
      const ph = `___KW_${idx}___`;
      if (result.includes(kw.word)) {
        tokens.push({ ph, ...kw });
        result = result.split(kw.word).join(ph);
      }
    });

    tokens.forEach(tok => {
      const className = tok.type === 'grammar' ? 'kw-grammar' : 'kw-new-word';
      const cleanTitle = (tok.title || '').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const span = `<span class="${className}" title="${cleanTitle}">${tok.word}</span>`;
      result = result.split(tok.ph).join(span);
    });

    return result;
  }

  function renderCurriculumLesson(lvl, lessonIdx) {
    const dataset = (window.HSK_FULL_CURRICULUM && window.HSK_FULL_CURRICULUM[lvl]) || [];
    const lesson = dataset[lessonIdx];
    if (!lesson) return;

    // 1. Header info
    const titleEl = document.getElementById('curr-lesson-title');
    const countEl = document.getElementById('curr-lesson-count');
    if (titleEl) titleEl.textContent = `${lvl} · Bài ${lesson.no}: ${lesson.titleZh} ${lesson.titleEn ? `— ${lesson.titleEn}` : ''}`;
    if (countEl) countEl.textContent = `${lesson.texts.length} bài đọc · ${lesson.grammar.length} ngữ pháp · ${lesson.vocab.length} từ mới`;

    // 2. Subtab 1: Bài đọc & Hội thoại
    const textsContainer = document.getElementById('curr-texts-container');
    if (textsContainer) {
      textsContainer.innerHTML = '';
      if (!lesson.texts || lesson.texts.length === 0) {
        textsContainer.innerHTML = '<p style="color:var(--ink-muted); text-align:center; padding:24px;">Bài học này không có đoạn hội thoại dài.</p>';
      } else {
        lesson.texts.forEach(txt => {
          const card = document.createElement('div');
          card.className = 'curr-text-card';
          card.innerHTML = `
            <div class="curr-text-header">
              <h4 class="curr-text-title">${txt.title || 'Đoạn văn bài đọc'}</h4>
              ${txt.scene ? `<p class="curr-text-scene">📍 Bối cảnh: ${txt.scene} ${txt.sceneEn ? `(${txt.sceneEn})` : ''}</p>` : ''}
            </div>
            <div class="curr-dialogue-list">
              ${(txt.lines || []).map(line => {
                const highlightedZh = highlightLessonKeywords(line.zh, lesson.vocab, lesson.grammar);
                return `
                <div class="dialogue-item">
                  ${line.speaker ? `<span class="speaker-badge">${line.speaker}</span>` : ''}
                  <div class="line-content-wrap">
                    <div class="line-zh-row">
                      <span class="line-zh">${highlightedZh}</span>
                      <button class="line-audio-btn" title="Phát âm" onclick="speakTTS('${line.zh.replace(/'/g, "\'")}')">🔊</button>
                    </div>
                    <div class="line-py">${line.py || ''}</div>
                    ${line.en ? `<div class="line-en"><span class="lang-tag en">🇬🇧 EN</span> ${line.en}</div>` : ''}
                    <div class="line-vi" data-zh="${encodeURIComponent(line.zh)}">
                      <span class="lang-tag vi">🇻🇳 VI</span>
                      <span class="vi-text">${line.vi || 'Đang tải bản dịch...'}</span>
                    </div>
                  </div>
                </div>
              `;}).join('')}
            </div>
          `;
          textsContainer.appendChild(card);
        });

        // Tự động phân giải bản dịch tiếng Việt cho các câu chưa có trong cơ sở dữ liệu
        setTimeout(() => {
          document.querySelectorAll('#curr-texts-container .line-vi').forEach(el => {
            const textSpan = el.querySelector('.vi-text');
            if (textSpan && textSpan.textContent === 'Đang tải bản dịch...') {
              const zh = decodeURIComponent(el.dataset.zh || '');
              if (!zh) return;
              const cacheKey = 'curr_vi_' + zh.slice(0, 30);
              try {
                const cached = localStorage.getItem(cacheKey);
                if (cached) {
                  textSpan.textContent = cached;
                  return;
                }
              } catch(e){}

              fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=vi&dt=t&q=${encodeURIComponent(zh)}`)
                .then(res => res.json())
                .then(data => {
                  const trans = (data[0] || []).map(p => p[0]).filter(Boolean).join('').trim();
                  if (trans) {
                    textSpan.textContent = trans;
                    try { localStorage.setItem(cacheKey, trans); } catch(e){}
                  }
                })
                .catch(() => {});
            }
          });
        }, 60);
      }
    }

    // 3. Subtab 2: Ngữ pháp bài học
    const grammarContainer = document.getElementById('curr-grammar-container');
    if (grammarContainer) {
      grammarContainer.innerHTML = '';
      if (!lesson.grammar || lesson.grammar.length === 0) {
        grammarContainer.innerHTML = '<p style="color:var(--ink-muted); text-align:center; padding:24px;">Không có điểm ngữ pháp riêng cho bài học này.</p>';
      } else {
        lesson.grammar.forEach(gm => {
          const card = document.createElement('div');
          card.className = 'curr-grammar-card';
          card.innerHTML = `
            <h4 class="curr-grammar-title">📌 ${gm.titleZh || ''} ${gm.titleEn ? `(${gm.titleEn})` : ''}</h4>
            ${gm.pattern ? `<div class="curr-grammar-pattern">Cấu trúc: ${gm.pattern}</div>` : ''}
            <div class="curr-grammar-desc">${gm.explanation || ''}</div>
            ${(gm.examples && gm.examples.length > 0) ? `
              <div class="curr-grammar-examples-list">
                ${gm.examples.map(ex => `
                  <div class="grammar-ex-item">
                    <div class="grammar-ex-zh">${ex.zh} <button class="line-audio-btn" onclick="speakTTS('${ex.zh.replace(/'/g, "\\'")}')">🔊</button></div>
                    <div class="grammar-ex-py">${ex.py}</div>
                    ${ex.en ? `<div class="grammar-ex-en">➔ ${ex.en}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            ` : ''}
          `;
          grammarContainer.appendChild(card);
        });
      }
    }

    // 4. Subtab 3: Từ mới của bài học dạng Thẻ Trực Quan (Visual Vocabulary Cards)
    const wordsContainer = document.getElementById('curr-words-container');
    if (wordsContainer) {
      wordsContainer.innerHTML = '';
      (lesson.vocab || []).forEach(w => {
        const topicKey = (window.HSK_WORD_TOPIC_MAP && window.HSK_WORD_TOPIC_MAP[w.hanzi]) || 'abstract_concept';
        const svgMarkup = typeof window.renderTopicIllustrationSvg === 'function'
          ? window.renderTopicIllustrationSvg(w.hanzi, topicKey, w.vi || w.en, w.pos)
          : renderWordSvg(w.hanzi, w.pinyin, w.vi || w.en, w.pos);
        const card = document.createElement('div');
        card.className = 'vocab-visual-card';
        card.innerHTML = `
          <div class="vcard-svg-hero">${svgMarkup}</div>
          <div class="vcard-header-row">
            <span class="vcard-zh">${w.hanzi}</span>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="vcard-pos-badge">${w.pos || 'từ'}</span>
              <button class="vcard-audio-btn" title="Phát âm" onclick="event.stopPropagation(); speakTTS('${w.hanzi.replace(/'/g, "\\'")}')">🔊</button>
            </div>
          </div>
          <div class="vcard-sub-row">
            <span class="vcard-py">${w.pinyin}</span>
            ${w.hanviet ? `<span class="vcard-hv">[${w.hanviet}]</span>` : ''}
          </div>
          <div class="vcard-vi">${w.vi || w.en || 'Chưa có giải nghĩa'}</div>
          ${w.example ? `
            <div class="vcard-example">
              <strong>Ví dụ:</strong> ${w.example}
              <button class="line-audio-btn" onclick="event.stopPropagation(); speakTTS('${w.example.replace(/'/g, "\\'")}')">🔊</button>
              ${w.examplePy ? `<div style="color:var(--vermilion); font-size:0.75rem;">${w.examplePy}</div>` : ''}
              ${w.exampleEn ? `<div style="color:var(--ink-muted); font-size:0.75rem;">${w.exampleEn}</div>` : ''}
            </div>
          ` : ''}
          <div class="vcard-btn-row">
            <button class="vcard-mini-btn" onclick="event.stopPropagation(); window.practiceWritingDict('${w.hanzi}')">✍️ Tập viết nét</button>
            <button class="vcard-mini-btn" onclick="event.stopPropagation(); window.practiceTracingDict('${w.hanzi}', '${w.pinyin}', '${(w.vi || w.en || '').replace(/'/g, "\\'")}')">📝 Tập tô ô Mễ</button>
          </div>
        `;
        card.onclick = () => speakTTS(w.hanzi);
        wordsContainer.appendChild(card);
      });
    }

    // 5. Subtab 4: Đề cương 593 điểm ngữ pháp HSK 3.0
    const offGrammarContainer = document.getElementById('curr-official-grammar-container');
    if (offGrammarContainer) {
      offGrammarContainer.innerHTML = '';
      const offList = (window.HSK_OFFICIAL_GRAMMAR && window.HSK_OFFICIAL_GRAMMAR[lvl]) || [];
      if (offList.length === 0) {
        offGrammarContainer.innerHTML = '<p style="color:var(--ink-muted); padding:16px;">Đang cập nhật đề cương cho cấp độ này.</p>';
      } else {
        offList.forEach(item => {
          const card = document.createElement('div');
          card.className = 'off-grammar-card';
          card.innerHTML = `
            <div class="off-grammar-head">
              <span class="off-grammar-content">${item.content}</span>
              <span class="off-grammar-tags">${item.type} · ${item.category}</span>
            </div>
            ${item.detail ? `<div style="font-size:0.8rem; color:var(--ink-secondary); font-weight:600;">Chi tiết: ${item.detail}</div>` : ''}
            ${item.cases && item.cases.length > 0 ? `
              <div class="off-grammar-cases">
                ${item.cases.map(cs => `<div>• ${cs} <button class="line-audio-btn" onclick="speakTTS('${cs.replace(/'/g, "\\'")}')">🔊</button></div>`).join('')}
              </div>
            ` : ''}
          `;
          offGrammarContainer.appendChild(card);
        });
      }
    }
  }

  // --- TAB 5: BÀI TẬP GHÉP CÂU & SỬA BỆNH CÚ ---
  let selectedTokens = [];
  let availableTokens = [];

  function renderExerciseTab() {
    renderWordOrder();
    renderBingju();
  }

  function renderWordOrder() {
    const lvlNum = parseInt(currentLevel.replace('HSK', ''));
    const list = (data.word_order || []).filter(x => x.level === lvlNum);
    
    const counterEl = document.getElementById('order-progress-tag');
    const hintEl = document.getElementById('order-meaning-hint');
    const fb = document.getElementById('order-feedback');
    if (fb) {
      fb.className = 'feedback-paper-card';
      fb.textContent = '';
    }

    if (list.length === 0) {
      if (counterEl) counterEl.textContent = '0 / 0';
      if (hintEl) hintEl.textContent = 'Chưa có câu hỏi cho cấp này.';
      return;
    }

    if (currentOrderIndex >= list.length) currentOrderIndex = 0;
    const item = list[currentOrderIndex];

    if (counterEl) counterEl.textContent = `Câu ${currentOrderIndex + 1} / ${list.length}`;
    if (hintEl) hintEl.textContent = `Pinyin: ${item.pinyin} | Nghĩa: ${item.meaning_vn}`;

    selectedTokens = [];
    availableTokens = [...item.tokens].sort(() => Math.random() - 0.5);
    renderOrderTray();
  }

  function renderOrderTray() {
    const dropZone = document.getElementById('order-drop-zone');
    const poolZone = document.getElementById('order-pool-zone');
    if (!dropZone || !poolZone) return;
    dropZone.innerHTML = '';
    poolZone.innerHTML = '';

    if (selectedTokens.length === 0) {
      const hint = document.createElement('span');
      hint.className = 'tray-empty-hint';
      hint.textContent = 'Chạm vào các khối từ bên dưới để ghép câu';
      dropZone.appendChild(hint);
    } else {
      selectedTokens.forEach((tok, idx) => {
        const chip = document.createElement('div');
        chip.className = 'paper-word-chip selected';
        chip.textContent = tok;
        chip.onclick = () => {
          selectedTokens.splice(idx, 1);
          availableTokens.push(tok);
          renderOrderTray();
        };
        dropZone.appendChild(chip);
      });
    }

    availableTokens.forEach((tok, idx) => {
      const chip = document.createElement('div');
      chip.className = 'paper-word-chip';
      chip.textContent = tok;
      chip.onclick = () => {
        availableTokens.splice(idx, 1);
        selectedTokens.push(tok);
        renderOrderTray();
      };
      poolZone.appendChild(chip);
    });
  }

  function checkWordOrder() {
    const lvlNum = parseInt(currentLevel.replace('HSK', ''));
    const list = (data.word_order || []).filter(x => x.level === lvlNum);
    if (list.length === 0) return;
    const item = list[currentOrderIndex];

    const currentStr = selectedTokens.join('');
    const targetClean = item.target.replace(/[。？！]/g, '');
    const isCorrect = currentStr === targetClean || (currentStr + '。') === item.target;

    const fb = document.getElementById('order-feedback');
    if (!fb) return;
    fb.classList.add('show');

    if (isCorrect) {
      fb.className = 'feedback-paper-card show success';
      fb.innerHTML = `
        <strong>🎉 Chính xác!</strong> Trật tự ngữ pháp hoàn toàn đúng.<br>
        <strong>Chữ Hán:</strong> ${item.target}<br>
        <strong>Pinyin:</strong> ${item.pinyin}<br>
        <strong>Hán-Việt:</strong> ${item.hanviet}<br>
        <strong>Dịch nghĩa:</strong> ${item.meaning_vn}
      `;
      playAudio(item.target);
    } else {
      fb.className = 'feedback-paper-card show warning';
      fb.innerHTML = `<strong>❌ Chưa chính xác.</strong><br><strong>Đáp án đúng:</strong> ${item.target}`;
    }
  }

  function renderBingju() {
    const lvlNum = parseInt(currentLevel.replace('HSK', ''));
    const list = (data.bingju || []).filter(x => x.level === lvlNum);
    const badgeEl = document.getElementById('bingju-type-badge');
    const zone = document.getElementById('bingju-segments-zone');
    const fb = document.getElementById('bingju-feedback');

    if (zone) zone.innerHTML = '';
    if (fb) {
      fb.className = 'feedback-paper-card';
      fb.textContent = '';
    }

    if (list.length === 0) {
      if (badgeEl) badgeEl.textContent = 'Chưa có câu hỏi';
      return;
    }

    if (currentBingjuIndex >= list.length) currentBingjuIndex = 0;
    const item = list[currentBingjuIndex];

    if (badgeEl) badgeEl.textContent = item.type;
    const letters = ['A', 'B', 'C', 'D'];

    item.options.forEach((opt, idx) => {
      const row = document.createElement('div');
      row.className = 'bingju-option-row';
      row.innerHTML = `<span class="option-prefix">[${letters[idx] || idx + 1}]</span>
                       <span class="option-text">${opt}</span>`;
      row.onclick = () => {
        if (!fb) return;
        fb.classList.add('show');
        if (idx === item.error_segment_index) {
          fb.className = 'feedback-paper-card show success';
          fb.innerHTML = `
            <strong>🎉 Rất chuẩn!</strong> Điểm sai là [${letters[idx]}]: "${opt}".<br>
            <strong>Câu sửa đúng:</strong> ${item.correct}<br>
            <strong>Pinyin câu đúng:</strong> ${item.correct_py || ''}<br>
            <strong>Hán-Việt:</strong> ${item.correct_hv || ''}<br>
            <strong>Phân tích quy tắc:</strong> ${item.explanation}
          `;
        } else {
          fb.className = 'feedback-paper-card show warning';
          fb.innerHTML = `<strong>❌ Chưa đúng!</strong> Phân đoạn [${letters[idx]}] ngữ pháp hoàn toàn bình thường.`;
        }
      };
      if (zone) zone.appendChild(row);
    });
  }

  // --- RENDER DISPATCHER ---
  function renderCurrentTab() {
    if (activeTab === 'tab-writing') renderWritingTab();
    else if (activeTab === 'tab-tracing') initTracingTab();
    else if (activeTab === 'tab-essay') renderEssayTab();
    else if (activeTab === 'tab-curriculum') { initCurriculumTab(); renderDirectionalGallery(); renderGrammarTab(); }
    else if (activeTab === 'tab-exercise') renderExerciseTab();
    else if (activeTab === 'tab-dictionary') renderDictionaryTab();
  }


  // ==========================================================================
  // HỆ THỐNG ĐA NGÔN NGỮ QUỐC TẾ (i18n: TIẾNG VIỆT & ENGLISH)
  // ==========================================================================
  window.currentLang = localStorage.getItem('hsk_app_lang') || 'vi';
  let currentLang = window.currentLang;

  const I18N = {
    vi: {
      sub_title: "Sổ Tay Học Tập: Tập Tô · Viết Bút · Giáo Trình Chuẩn · Song Ngữ",
      label_theme: "Giao diện:",
      label_level: "Cấp độ:",
      label_lang: "Ngôn ngữ:",
      mode_study: "📖 Học tập",
      mode_quiz: "✍️ Thử thách",
      tab_1: "Luyện Nét",
      tab_2: "Tập Tô",
      tab_3: "Viết Đoạn",
      tab_4: "Giáo Trình",
      tab_5: "Ôn Tập",
      tab_6: "Từ Điển",
      btn_quiz: "✍️ Luyện viết nét",
      btn_animate: "▶ Chạy nét mẫu",
      btn_next_char: "Chữ tiếp theo ❯",
      btn_clear_trace: "🗑️ Xóa nét vẽ",
      btn_audio: "🔊 Nghe đọc",
      btn_evaluate: "Đánh giá bài viết",
      btn_reset: "Làm mới",
      btn_check_order: "Kiểm tra trật tự câu",
      btn_next_bingju: "Câu bệnh cú tiếp ❯",
      dict_search_btn: "Tra cứu",
      dict_clear_btn: "✕",
      dict_placeholder: "Nhập Chữ Hán, Pinyin, Hán-Việt hoặc Tiếng Anh/Việt (VD: 坚持, jianchi, persist, doctor, 医生)...",
      dict_title: "Tra Cứu Từ Điển HSK 3.0 & Song Ngữ Anh - Việt (字典)",
      dict_subtitle: "11.470+ từ vựng chuẩn HSK 3.0 (Cấp 1-9) · 122.000+ từ điển hiện đại CC-CEDICT · Âm Hán-Việt & Phát âm",
      dict_lvl_label: "Phân cấp HSK 3.0:",
      dict_chip_all: "Tất cả (11.470)",
      dict_chip_full: "Toàn bộ CC-CEDICT (122k)",
      dict_action_write: "✍️ Tập viết nét",
      dict_action_trace: "📝 Tập tô ô Mễ",
      dict_action_copy: "📋 Sao chép",
      dict_page_prev: "❮ Trang trước",
      dict_page_next: "Trang sau ❯",
      dict_copy_msg: "Đã sao chép vào bộ nhớ tạm:"
    },
    en: {
      sub_title: "HSK 3.0 Study Companion: Stroke Order · Tracing · Standard Course · Dual Dictionary",
      label_theme: "Theme:",
      label_level: "Level:",
      label_lang: "Language:",
      mode_study: "📖 Study Mode",
      mode_quiz: "✍️ Quiz Mode",
      tab_1: "Stroke Practice (Handwriting)",
      tab_2: "Tracing Sheet (Calligraphy)",
      tab_3: "Essay Writing & Analysis",
      tab_4: "Standard Curriculum & Vocab",
      tab_5: "Sentence Builder & Quiz",
      tab_6: "Comprehensive Dictionary",
      btn_quiz: "✍️ Practice Stroke",
      btn_animate: "▶ Animate Strokes",
      btn_next_char: "Next Character ❯",
      btn_clear_trace: "🗑️ Clear Canvas",
      btn_audio: "🔊 Listen Audio",
      btn_evaluate: "Evaluate Essay",
      btn_reset: "Reset",
      btn_check_order: "Check Sentence Order",
      btn_next_bingju: "Next Question ❯",
      dict_search_btn: "Search",
      dict_clear_btn: "✕",
      dict_placeholder: "Search Chinese, Pinyin, Sino-Vietnamese or English/Vietnamese (e.g. 坚持, jianchi, persist, doctor, 医生)...",
      dict_title: "HSK 3.0 & Dual English-Vietnamese Dictionary (字典)",
      dict_subtitle: "11,470+ HSK 3.0 words (Levels 1-9) · 122,000+ CC-CEDICT entries · Pronunciation & Etymology",
      dict_lvl_label: "HSK 3.0 Levels:",
      dict_chip_all: "All (11,470)",
      dict_chip_full: "Full CC-CEDICT (122k)",
      dict_action_write: "✍️ Stroke Order",
      dict_action_trace: "📝 Trace Grid",
      dict_action_copy: "📋 Copy Word",
      dict_page_prev: "❮ Prev",
      dict_page_next: "Next ❯",
      dict_copy_msg: "Copied to clipboard:"
    }
  };

  function applyAppLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('hsk_app_lang', lang);
    const t = I18N[lang] || I18N.vi;

    // Header controls
    const subTitle = document.querySelector('.sub-title');
    if (subTitle) subTitle.textContent = t.sub_title;

    const labelTheme = document.querySelector('.theme-selector-wrap .control-label');
    if (labelTheme) labelTheme.textContent = t.label_theme;

    const labelLevel = document.getElementById('label-level');
    if (labelLevel) labelLevel.textContent = t.label_level;

    const labelLang = document.getElementById('label-lang');
    if (labelLang) labelLang.textContent = t.label_lang;

    const btnStudy = document.getElementById('mode-study');
    if (btnStudy) btnStudy.textContent = t.mode_study;

    const btnQuiz = document.getElementById('mode-quiz');
    if (btnQuiz) btnQuiz.textContent = t.mode_quiz;

    // Tabs navigation
    const tabMap = {
      'tab-writing': t.tab_1,
      'tab-tracing': t.tab_2,
      'tab-essay': t.tab_3,
      'tab-curriculum': t.tab_4,
      'tab-exercise': t.tab_5,
      'tab-dictionary': t.tab_6
    };
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const tabKey = btn.dataset.tab;
      const nameEl = btn.querySelector('.tab-name');
      if (nameEl && tabMap[tabKey]) nameEl.textContent = tabMap[tabKey];
    });

    // Dictionary Tab headers & placeholders
    const dictTitle = document.querySelector('.dict-main-title');
    if (dictTitle) dictTitle.textContent = t.dict_title;

    const dictSubtitle = document.querySelector('.dict-subtitle');
    if (dictSubtitle) dictSubtitle.textContent = t.dict_subtitle;

    const dictInput = document.getElementById('dict-search-input');
    if (dictInput) dictInput.placeholder = t.dict_placeholder;

    const dictSearchBtn = document.getElementById('dict-search-btn');
    if (dictSearchBtn) dictSearchBtn.textContent = t.dict_search_btn;

    const dictFilterLabel = document.querySelector('.dict-filter-label');
    if (dictFilterLabel) dictFilterLabel.textContent = t.dict_lvl_label;

    const chipAll = document.querySelector('.dict-lvl-chip[data-lvl="all"]');
    if (chipAll) chipAll.textContent = t.dict_chip_all;

    const chipFull = document.querySelector('.dict-lvl-chip[data-lvl="full"]');
    if (chipFull) chipFull.textContent = t.dict_chip_full;

    const topicLabel = document.getElementById('dict-topic-filter-label');
    if (topicLabel) topicLabel.textContent = lang === 'en' ? 'Vocabulary Topics:' : 'Chủ đề từ vựng:';

    document.querySelectorAll('.dict-topic-chip').forEach(chip => {
      const topKey = chip.dataset.topic;
      if (topKey === 'all') {
        chip.textContent = lang === 'en' ? '🌟 All Topics' : '🌟 Tất cả chủ đề';
      } else if (DICT_CATEGORIES[topKey]) {
        const cat = DICT_CATEGORIES[topKey];
        chip.textContent = lang === 'en' ? (cat.label_en || cat.label) : cat.label;
      }
    });

    renderCurrentTab();
  }

  // --- EVENT LISTENERS ---
  
  // ==========================================================================
  // HỆ THỐNG TỰ ĐỘNG CẬP NHẬT TRỰC TUYẾN (AUTO-UPDATE HOT RELOAD ENGINE)
  // ==========================================================================
  window.APP_VERSION = '1.1.3';
  window.APP_BUILD = 2026100601;

  function initAutoUpdateChecker() {
    // 1. Đăng ký Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                showUpdateNotification('Đã có bản cập nhật mới từ hệ thống!', () => {
                  window.location.reload();
                });
              }
            };
          }
        };
      }).catch(() => {});
    }

    // 2. Kiểm tra phiên bản từ xa qua GitHub Raw (khi có mạng)
    if (navigator.onLine) {
      setTimeout(checkRemoteVersion, 3000);
    }
    window.addEventListener('online', () => setTimeout(checkRemoteVersion, 1000));
  }

  function checkRemoteVersion() {
    // 1. Kiểm tra thời gian hoãn nhắc nhở (Snooze 24h)
    const snoozeUntil = parseInt(localStorage.getItem('hsk_snooze_update_until') || '0', 10);
    if (Date.now() < snoozeUntil) return;

    // 2. Kiểm tra bản build đã lưu trong máy
    const savedBuild = parseInt(localStorage.getItem('hsk_acknowledged_build') || '0', 10);
    const currentBuild = Math.max(window.APP_BUILD, savedBuild);

    const updateUrl = 'https://raw.githubusercontent.com/aKa368/hsk-3.0/main/version.json?t=' + Date.now();
    fetch(updateUrl, { cache: 'no-store' })
      .then(res => res.json())
      .then(remote => {
        if (remote && remote.build && remote.build > currentBuild) {
          showUpdateNotification(remote);
        }
      })
      .catch(() => {});
  }

  function showUpdateNotification(remote) {
    let toast = document.getElementById('app-update-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-update-toast';
      toast.className = 'app-update-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <div class="update-toast-content">
        <span class="update-toast-icon">🚀</span>
        <div class="update-toast-body">
          <div class="update-toast-title">HSK 3.0 v${remote.version} — Tự động cập nhật</div>
          <div class="update-toast-msg">${remote.changelog || 'Cải tiến giao diện và sửa lỗi'}</div>
        </div>
      </div>
      <div class="update-toast-actions">
        <button id="btn-update-now" class="paper-btn primary-btn sm-btn">Cập nhật ngay</button>
        <button id="btn-update-later" class="paper-btn sm-btn">Để sau</button>
      </div>
    `;
    toast.style.display = 'flex';

    document.getElementById('btn-update-now').onclick = () => {
      // Đánh dấu bản build đã được người dùng xác nhận
      localStorage.setItem('hsk_acknowledged_build', remote.build);
      toast.innerHTML = '<div style="text-align:center; padding:10px; width:100%;"><strong>🔄 Đang đồng bộ tài nguyên mới...</strong><div style="font-size:0.8rem; margin-top:4px;">Ứng dụng sẽ tự nạp lại trong giây lát.</div></div>';

      if ('caches' in window) {
        caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => {
          if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
          }
          setTimeout(() => window.location.reload(true), 800);
        }).catch(() => {
          setTimeout(() => window.location.reload(true), 800);
        });
      } else {
        setTimeout(() => window.location.reload(true), 800);
      }
    };

    document.getElementById('btn-update-later').onclick = () => {
      // Tạm hoãn 24 tiếng không quấy rầy người dùng
      localStorage.setItem('hsk_snooze_update_until', Date.now() + 24 * 60 * 60 * 1000);
      toast.style.display = 'none';
    };
  }

  window.checkAppUpdate = checkRemoteVersion;
  window.showUpdateNotification = showUpdateNotification;

  
  // ==========================================================================
  // KHỞI TẠO PHÂN HỆ LUYỆN TẬP, THI THỬ & THẺ NHỚ SRS FLASHCARD
  // ==========================================================================
  function initExerciseSubtabs() {
    // 1. Chuyển đổi giữa 3 subtab: Quiz / SRS / Ghép câu
    const subnavBtns = document.querySelectorAll('.exercise-subnav-bar .subnav-btn');
    subnavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        subnavBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.subtab-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const subId = btn.getAttribute('data-subtab');
        const targetPane = document.getElementById(subId.replace('sub-', 'subtab-'));
        if (targetPane) targetPane.classList.add('active');

        if (subId === 'sub-quiz') {
          triggerQuizStart();
        } else if (subId === 'sub-srs') {
          triggerSRSStart();
        }
      });
    });

    // 2. Kích hoạt nút bắt đầu Quiz
    const btnStartQuiz = document.getElementById('btn-start-quiz');
    if (btnStartQuiz) {
      btnStartQuiz.addEventListener('click', triggerQuizStart);
    }

    // 3. Kích hoạt nút reset SRS
    const btnResetSRS = document.getElementById('btn-reset-srs');
    if (btnResetSRS) {
      btnResetSRS.addEventListener('click', () => {
        if (window.SRSQuizEngine) {
          window.SRSQuizEngine.initSRS();
          triggerSRSStart();
        }
      });
    }
  }

  function triggerQuizStart() {
    if (window.SRSQuizEngine) {
      const lvl = document.getElementById('quiz-level-select')?.value || 'all';
      const cnt = parseInt(document.getElementById('quiz-count-select')?.value || '10');
      window.SRSQuizEngine.renderQuizUI('quiz-container', lvl, cnt);
    }
  }

  function triggerSRSStart() {
    if (window.SRSQuizEngine) {
      window.SRSQuizEngine.initSRS();
      window.SRSQuizEngine.renderSRSUI('srs-container');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initExerciseSubtabs();
    initAutoUpdateChecker();

    // Bảo mật chống cào và inspect DevTools trên Web/App
    document.addEventListener('contextmenu', e => {
      if (!e.target.matches('input, textarea')) {
        e.preventDefault();
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
      }
    });


        // 0.1 Internationalization (i18n) Engine
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = currentLang;
      langSelect.addEventListener('change', (e) => {
        applyAppLanguage(e.target.value);
      });
    }
    applyAppLanguage(currentLang);

    // 0. Theme Switcher Engine
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
      const savedTheme = localStorage.getItem('hsk_app_theme') || 'paper';
      document.documentElement.setAttribute('data-theme', savedTheme);
      themeSelect.value = savedTheme;
      themeSelect.addEventListener('change', (e) => {
        const t = e.target.value;
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('hsk_app_theme', t);
        brushColor = getThemeBrushColor(currentBrushType);
        // Refresh active tab to apply theme colors to HanziWriter canvas & tracing sheet
        renderCurrentTab();
      });
    }

    // 1. Level switcher (Kiểu chọn Dropdown đồng bộ phong cách Giao diện)
    const levelSelect = document.getElementById('level-select');
    if (levelSelect) {
      levelSelect.addEventListener('change', (e) => {
        currentLevel = e.target.value;
        currentCharIndex = 0;
        currentOrderIndex = 0;
        currentBingjuIndex = 0;
        currentEssayIndex = 0;

        // Tự động đồng bộ với Tab 4 (Giáo trình) nếu đang mở
        const currLvlSelect = document.getElementById('curriculum-level-select');
        if (currLvlSelect) {
          const mapToCurr = {
            'HSK1': 'HSK 1', 'HSK2': 'HSK 2', 'HSK3': 'HSK 3',
            'HSK4': 'HSK 4', 'HSK5': 'HSK 5', 'HSK6': 'HSK 6', 'HSK7-9': 'HSK 7-9'
          };
          if (mapToCurr[currentLevel]) {
            currLvlSelect.value = mapToCurr[currentLevel];
            currLvlSelect.dispatchEvent(new Event('change'));
          }
        }

        renderCurrentTab();
      });
    }

    // 2. Mode toggle
    const btnStudy = document.getElementById('mode-study');
    const btnQuiz = document.getElementById('mode-quiz');
    if (btnStudy && btnQuiz) {
      btnStudy.onclick = () => {
        btnStudy.classList.add('active');
        btnQuiz.classList.remove('active');
        currentMode = 'study';
        renderCurrentTab();
      };
      btnQuiz.onclick = () => {
        btnQuiz.classList.add('active');
        btnStudy.classList.remove('active');
        currentMode = 'quiz';
        renderCurrentTab();
      };
    }

    // 3. Tab navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.page-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        activeTab = btn.dataset.tab;
        const target = document.getElementById(activeTab);
        if (target) target.classList.add('active');
        renderCurrentTab();
      };
    });

    // 4. Tab 1: Handwriting controls
    const btnAnim = document.getElementById('btn-animate');
    const btnToggleOutline = document.getElementById('btn-toggle-outline');
    const btnQuizWrite = document.getElementById('btn-quiz');
    const btnResetWrite = document.getElementById('btn-reset');
    const tipEl = document.getElementById('writing-status-tip');

    if (btnAnim) {
      btnAnim.onclick = () => {
        if (hanziWriter) {
          if (typeof hanziWriter.cancelQuiz === 'function') hanziWriter.cancelQuiz();
          hanziWriter.showOutline();
          hanziWriter.animateCharacter();
          btnAnim.classList.add('active');
          btnQuizWrite?.classList.remove('active');
          if (tipEl) tipEl.innerHTML = `▶ <strong>Đang thị phạm:</strong> Quan sát thứ tự và hướng đi của từng nét chữ...`;
        }
      };
    }

    if (btnToggleOutline) {
      btnToggleOutline.onclick = () => {
        outlineVisible = !outlineVisible;
        if (hanziWriter) {
          if (outlineVisible) {
            hanziWriter.showOutline();
            btnToggleOutline.textContent = '✏️ Tắt nét mờ';
            btnToggleOutline.classList.add('active');
          } else {
            hanziWriter.hideOutline();
            btnToggleOutline.textContent = '✏️ Bật nét mờ';
            btnToggleOutline.classList.remove('active');
          }
        }
      };
    }

    if (btnQuizWrite) {
      btnQuizWrite.onclick = () => {
        if (hanziWriter) {
          btnQuizWrite.classList.add('active');
          btnAnim?.classList.remove('active');
          if (tipEl) tipEl.innerHTML = `✍️ <strong>Chế độ tự viết:</strong> Hãy dùng ngón tay hoặc bút viết từng nét vào ô Mễ!`;
          hanziWriter.quiz({
            showOutline: outlineVisible,
            onComplete: (summary) => {
              if (tipEl) tipEl.innerHTML = `🎉 <strong>Hoàn thành xuất sắc!</strong> (Sai số: ${summary?.totalMistakes || 0} nét)`;
            }
          });
        }
      };
    }

    if (btnResetWrite) {
      btnResetWrite.onclick = () => {
        if (hanziWriter) {
          if (btnQuizWrite?.classList.contains('active')) {
            hanziWriter.quiz({
              showOutline: outlineVisible,
              onComplete: (summary) => {
                if (tipEl) tipEl.innerHTML = `🎉 <strong>Hoàn thành xuất sắc!</strong> (Sai số: ${summary?.totalMistakes || 0} nét)`;
              }
            });
            if (tipEl) tipEl.innerHTML = `🔄 Đã xóa nét. Hãy thử viết lại từ đầu!`;
          } else {
            if (typeof hanziWriter.cancelQuiz === 'function') hanziWriter.cancelQuiz();
            hanziWriter.showOutline();
            hanziWriter.animateCharacter();
            btnAnim?.classList.add('active');
            btnQuizWrite?.classList.remove('active');
            if (tipEl) tipEl.innerHTML = `🔄 Đang thị phạm lại thứ tự nét...`;
          }
        }
      };
    }

    const btnPrevChar = document.getElementById('btn-prev-char');
    if (btnPrevChar) {
      btnPrevChar.onclick = () => {
        const list = getHandwritingList(currentLevel);
        if (list.length > 0) {
          currentCharIndex = (currentCharIndex - 1 + list.length) % list.length;
          btnAnim?.classList.add('active');
          btnQuizWrite?.classList.remove('active');
          renderWritingTab();
        }
      };
    }
    const btnNextChar = document.getElementById('btn-next-char');
    if (btnNextChar) {
      btnNextChar.onclick = () => {
        const list = getHandwritingList(currentLevel);
        if (list.length > 0) {
          currentCharIndex = (currentCharIndex + 1) % list.length;
          btnAnim?.classList.add('active');
          btnQuizWrite?.classList.remove('active');
          renderWritingTab();
        }
      };
    }

    // Ô tra cứu cách viết chữ Hán tự nhập tùy ý (Custom Hanzi Lookup)
    const charInput = document.getElementById('custom-char-input');
    const charLookupBtn = document.getElementById('btn-custom-char-lookup');

    function handleCustomCharLookup() {
      const val = charInput ? charInput.value.trim() : '';
      if (!val) return;
      const ch = val.match(/[\u4e00-\u9fa5]/) ? val.match(/[\u4e00-\u9fa5]/)[0] : val.charAt(0);
      if (ch) {
        loadCharacterToWriter(ch);
      }
    }

    if (charLookupBtn) charLookupBtn.onclick = handleCustomCharLookup;
    if (charInput) {
      charInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleCustomCharLookup();
      });
    }

    // 5. Tab 3: Writing Lab controls
    const essayInput = document.getElementById('essay-input');
    if (essayInput) {
      essayInput.addEventListener('input', () => {
        const val = essayInput.value;
        const charCount = val.replace(/\s+/g, '').length;
        const structures = data.essay_structures || {};
        const list = structures[currentLevel] || [];
        const item = list[currentEssayIndex] || { targetLength: { max: 65 }, words: [] };

        const counter = document.getElementById('char-counter');
        if (counter) counter.textContent = `${charCount} / ${item.targetLength.max} chữ`;

        const wordList = (item.words || []).map(w => w.zh);
        const usedWords = wordList.filter(w => val.includes(w));
        updateEssayRubric(charCount, usedWords);
      });
    }

    const btnCheckEssay = document.getElementById('btn-check-essay');
    if (btnCheckEssay) btnCheckEssay.onclick = evaluateEssay;

    const btnResetEssay = document.getElementById('btn-reset-essay');
    if (btnResetEssay) {
      btnResetEssay.onclick = () => {
        if (essayInput) {
          essayInput.value = '';
          essayInput.dispatchEvent(new Event('input'));
        }
      };
    }

    const btnCopyEssay = document.getElementById('btn-copy-essay');
    if (btnCopyEssay) {
      btnCopyEssay.onclick = () => {
        if (essayInput) {
          navigator.clipboard.writeText(essayInput.value);
          alert('Đã sao chép đoạn văn của bạn!');
        }
      };
    }

    const btnToggleStruct = document.getElementById('btn-toggle-struct');
    if (btnToggleStruct) {
      btnToggleStruct.onclick = () => {
        const box = document.getElementById('structure-analysis-box');
        if (box) {
          box.style.display = box.style.display === 'none' ? 'grid' : 'none';
        }
      };
    }

    // 6. Tab 4: Grammar search
    const grammarSearch = document.getElementById('grammar-search-input');
    if (grammarSearch) {
      grammarSearch.addEventListener('input', (e) => {
        renderGrammarTab(e.target.value);
      });
    }

    // 7. Tab 5: Exercise controls
    const btnCheckOrder = document.getElementById('btn-check-order');
    if (btnCheckOrder) btnCheckOrder.onclick = checkWordOrder;
    const btnResetOrder = document.getElementById('btn-reset-order');
    if (btnResetOrder) btnResetOrder.onclick = renderWordOrder;
    const btnNextOrder = document.getElementById('btn-next-order');
    if (btnNextOrder) {
      btnNextOrder.onclick = () => {
        const lvlNum = parseInt(currentLevel.replace('HSK', ''));
        const list = (data.word_order || []).filter(x => x.level === lvlNum);
        if (list.length > 0) {
          currentOrderIndex = (currentOrderIndex + 1) % list.length;
          renderWordOrder();
        }
      };
    }

    const btnNextBingju = document.getElementById('btn-next-bingju');
    if (btnNextBingju) {
      btnNextBingju.onclick = () => {
        const lvlNum = parseInt(currentLevel.replace('HSK', ''));
        const list = (data.bingju || []).filter(x => x.level === lvlNum);
        if (list.length > 0) {
          currentBingjuIndex = (currentBingjuIndex + 1) % list.length;
          renderBingju();
        }
      };
    }

    // Initial render
    renderCurrentTab();
  });

  // ==========================================================================
  // VI. TỪ ĐIỂN HSK 3.0 & TRUNG - VIỆT TOÀN DIỆN (11.470+ HSK & 122.000+ TỪ ĐIỂN)
  // ==========================================================================
  let dictQuery = '';
  let dictCurrentLevel = 'all';
  let dictCurrentTopic = 'all';
  let dictCurrentPage = 1;
  const DICT_PAGE_SIZE = 24;
  let fullCvdictCache = null;
  let isFullCvdictLoading = false;
  let dictListenersAttached = false;

  function stripAccents(str) {
    if (!str) return '';
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function getDictSource() {
    return window.HSK_DICTIONARY || [];
  }

  function performDictSearch() {
    const rawList = getDictSource();
    const q = dictQuery.trim();
    const qLower = q.toLowerCase();
    const qClean = stripAccents(qLower).replace(/\s+/g, '');

    let filtered = rawList;

    // Filter by HSK Level
    if (dictCurrentLevel !== 'all' && dictCurrentLevel !== 'full') {
      const targetLvl = parseInt(dictCurrentLevel);
      filtered = filtered.filter(item => item.lvl_num === targetLvl);
    }

    // Filter by Real-world Topic/Category
    if (dictCurrentTopic !== 'all') {
      if (dictCurrentTopic === 'tcm') {
        const tcmMapped = (window.TCM_DATA?.terms || []).map(t => ({
          zh: t.zh,
          py: t.pinyin || '',
          py_clean: (t.pinyin || '').replace(/[^a-zA-Z]/g, ''),
          hv: (t.hanviet || '').toUpperCase(),
          lvl: 'Đông Y',
          lvl_num: 0,
          vi: t.vi || '',
          en: t.en || '',
          pos: 'Thuật ngữ Y học',
          rad: '🌿'
        }));
        const hskTcm = rawList.filter(item => matchItemCategory(item, 'tcm'));
        filtered = [...tcmMapped, ...hskTcm];
      } else {
        filtered = filtered.filter(item => matchItemCategory(item, dictCurrentTopic));
      }
    }

    if (!q) {
      return filtered;
    }

    // Smart multi-field scoring search
    const scored = [];
    filtered.forEach(item => {
      let score = 0;
      const zh = item.zh || '';
      const trad = item.trad || '';
      const pyClean = item.py_clean || '';
      const hv = (item.hv || '').toLowerCase();
      const hvClean = stripAccents(hv).replace(/\s+/g, '');
      const vi = (item.vi || '').toLowerCase();
      const viClean = stripAccents(vi);

      // 1. Exact Chinese match (highest priority)
      if (zh === q || trad === q) score += 100;
      else if (zh.startsWith(q) || trad.startsWith(q)) score += 60;
      else if (zh.includes(q) || trad.includes(q)) score += 40;

      // 2. Pinyin match
      if (pyClean === qClean) score += 50;
      else if (pyClean.startsWith(qClean)) score += 30;
      else if (pyClean.includes(qClean)) score += 15;

      // 3. Sino-Vietnamese (Hán-Việt) match
      const hvNorm = hvClean;
      if (hvNorm === qClean) score += 55;
      else if (hvNorm.startsWith(qClean)) score += 35;
      else if (hv.includes(qLower) || hvNorm.includes(qClean)) score += 20;

      // 4. Vietnamese definition match
      const viNorm = stripAccents(vi).replace(/\s+/g, '');
      if (vi.includes(qLower) || viNorm.includes(qClean)) score += 25;
      if (vi.startsWith(qLower) || viNorm.startsWith(qClean)) score += 15;

      // 5. English definition match (Commercial International Standard)
      const en = (item.en || '').toLowerCase();
      if (en.includes(qLower)) score += 25;
      if (en.startsWith(qLower)) score += 15;

      if (score > 0) {
        scored.push({ item, score });
      }
    });

    // Sort by relevance score, then level
    scored.sort((a, b) => b.score - a.score || a.item.lvl_num - b.item.lvl_num);
    return scored.map(s => s.item);
  }

  
  // ==========================================================================
  // PHÂN LOẠI CHỦ ĐỀ MINH HỌA VECTOR CHO TỪ ĐIỂN (SMART TOPIC CLASSIFIER)
  // ==========================================================================
  
  // ==========================================================================
  // HỆ THỐNG PHÂN LOẠI CHỦ ĐỀ THỰC TẾ CHO TỪ ĐIỂN
  // ==========================================================================
  const DICT_CATEGORIES = {
    tcm: {
      label: 'Y Học Cổ Truyền & Đông Y',
      label_en: 'Traditional Chinese Medicine',
      vn_terms: ['đông y', 'thuốc', 'châm cứu', 'huyệt', 'kinh lạc', 'phương tễ', 'tạng phủ', 'khí huyết', 'âm dương', 'bắt mạch', 'y học cổ truyền'],
      en_terms: ['tcm', 'acupuncture', 'meridian', 'chinese medicine', 'herb', 'acupoint'],
      words: ['中医', '中药', '针灸', '穴位', '经络', '方剂', '阴阳', '气血', '脉象', '脏腑']
    },
    fruit: {
      label: 'Hoa quả & Trái cây',
      label_en: 'Fruits',
      vn_terms: ['trái cây', 'hoa quả', 'quả táo', 'chuối', 'dưa hấu', 'quả cam', 'quả nho', 'quả chanh', 'xoài', 'dâu tây', 'quả lê', 'quả đào', 'quả dứa', 'dưa chuột', 'dưa lê', 'trái thơm', 'quả quất', 'bưởi', 'đu đủ', 'vải thiều', 'sầu riêng', 'măng cụt', 'hồng xiêm', 'quả mận', 'quả mơ', 'việt quất', 'anh đào', 'quả dừa', 'thanh long'],
      en_terms: ['fruit', 'apple', 'banana', 'watermelon', 'orange', 'grape', 'lemon', 'mango', 'strawberry', 'pear', 'peach', 'pineapple', 'cherry', 'papaya', 'lychee', 'durian', 'plum', 'apricot', 'blueberry', 'coconut'],
      words: ['苹果', '香蕉', '西瓜', '水果', '橘子', '葡萄', '柠檬', '桃子', '草莓', '梨', '芒果', '菠萝', '柚子', '木瓜', '荔枝', '樱桃', '柿子', '哈密瓜', '榴莲', '山竹', '椰子', '果汁', '火龙果']
    },
    vegetable: {
      label: 'Rau củ & Nông sản',
      label_en: 'Vegetables',
      vn_terms: ['rau củ', 'rau xanh', 'nông sản', 'cà chua', 'khoai tây', 'khoai lang', 'bắp cải', 'cải thảo', 'cà rốt', 'hành tây', 'củ tỏi', 'nấm hương', 'bắp ngô', 'ớt đỏ', 'đậu phụ', 'dưa chuột', 'cà tím', 'củ gừng', 'bí ngô', 'bí đao', 'mướp', 'rau muống', 'rau thơm', 'su hào', 'súp lơ', 'rau bina', 'cần tây', 'đậu hà lan'],
      en_terms: ['vegetable', 'veggie', 'tomato', 'potato', 'cabbage', 'carrot', 'onion', 'garlic', 'mushroom', 'corn', 'pepper', 'chili', 'tofu', 'cucumber', 'eggplant', 'ginger', 'pumpkin', 'spinach', 'celery', 'broccoli', 'cauliflower'],
      words: ['蔬菜', '西红柿', '土豆', '白菜', '胡萝卜', '洋葱', '蘑菇', '黄瓜', '茄子', '辣椒', '大蒜', '生姜', '玉米', '豆角', '豆腐', '南瓜', '冬瓜', '芹菜', '菠菜', '菜花', '大葱']
    },
    clothing: {
      label: 'Quần áo & Phụ kiện',
      label_en: 'Clothing & Wear',
      vn_terms: ['quần áo', 'áo sơ mi', 'áo khoác', 'áo len', 'áo thun', 'áo phông', 'váy đầm', 'váy', 'quần bò', 'quần jean', 'giày da', 'giày thể thao', 'đôi giày', 'đôi dép', 'mũ nón', 'chiếc mũ', 'tất chân', 'đôi tất', 'túi xách', 'kính mắt', 'mắt kính', 'đồng hồ đeo tay', 'nhẫn cưới', 'khăn quàng', 'cà vạt', 'thắt lưng', 'dây nịt', 'đồ lót', 'áo mưa', 'găng tay', 'áo sơ-mi'],
      en_terms: ['clothing', 'clothes', 'shirt', 't-shirt', 'pants', 'trousers', 'jeans', 'dress', 'skirt', 'jacket', 'coat', 'sweater', 'shoes', 'shoe', 'boot', 'sandal', 'hat', 'cap', 'sock', 'socks', 'handbag', 'scarf', 'tie', 'belt', 'glasses', 'sunglasses', 'underwear', 'glove'],
      words: ['衣服', '裤子', '裙子', '鞋', '鞋子', '帽子', '袜子', '包', '皮包', '眼镜', '手表', '围巾', '大衣', '衬衫', '西服', '外套', '毛衣', '羽绒服', '领带', '雨伞', '皮带', '手套']
    },
    appliance: {
      label: 'Đồ điện gia dụng',
      label_en: 'Home Appliances',
      vn_terms: ['tủ lạnh', 'máy giặt', 'máy điều hòa', 'máy lạnh', 'tivi', 'máy thu hình', 'quạt điện', 'lò vi sóng', 'nồi cơm điện', 'máy hút bụi', 'bếp điện', 'bếp từ', 'bóng đèn', 'ổ cắm điện', 'máy sấy tóc', 'bình nóng lạnh', 'ấm đun nước', 'đồ gia dụng'],
      en_terms: ['refrigerator', 'fridge', 'washing machine', 'air conditioner', 'television', 'tv set', 'electric fan', 'microwave oven', 'rice cooker', 'vacuum cleaner', 'home appliance', 'hair dryer', 'water heater', 'electric kettle'],
      words: ['冰箱', '洗衣机', '空调', '电视', '电视机', '风扇', '电风扇', '微波炉', '电饭煲', '吸尘器', '烤箱', '台灯', '电池', '插座', '吹风机', '热水器', '电水壶']
    },
    daily_goods: {
      label: 'Đồ dùng sinh hoạt',
      label_en: 'Daily Supplies',
      vn_terms: ['bàn chải đánh răng', 'kem đánh răng', 'xà phòng', 'khăn mặt', 'khăn tắm', 'gương soi', 'lược chải đầu', 'chăn bông', 'gối đầu', 'giường ngủ', 'bàn ăn', 'ghế ngồi', 'bát đũa', 'đôi đũa', 'thìa muỗng', 'chìa khóa', 'cái ô', 'cây dù', 'thùng rác', 'dầu gội', 'sữa tắm', 'giấy vệ sinh', 'kéo cắt', 'chậu rửa'],
      en_terms: ['toothbrush', 'toothpaste', 'soap', 'towel', 'mirror', 'comb', 'blanket', 'pillow', 'bed', 'table', 'chair', 'bowl', 'plate', 'chopsticks', 'spoon', 'key', 'umbrella', 'trash can', 'shampoo', 'shower gel', 'toilet paper', 'scissors'],
      words: ['牙膏', '牙刷', '肥皂', '香皂', '毛巾', '镜子', '梳子', '被子', '枕头', '床', '桌子', '椅子', '碗', '盘子', '筷子', '勺子', '钥匙', '垃圾桶', '洗发水', '沐浴露', '纸巾', '剪刀']
    },
    food_drink: {
      label: 'Ẩm thực & Món ăn',
      label_en: 'Food & Drinks',
      vn_terms: ['món ăn', 'ẩm thực', 'cơm', 'mì sợi', 'phở', 'bánh bao', 'sủi cảo', 'thịt bò', 'thịt lợn', 'thịt gà', 'con cá', 'trứng gà', 'bánh mì', 'uống trà', 'cà phê', 'sữa tươi', 'bia', 'rượu vang', 'nước ngọt', 'lẩu', 'canh', 'bánh ngọt'],
      en_terms: ['food', 'cuisine', 'dish', 'rice', 'noodle', 'dumpling', 'beef', 'pork', 'chicken', 'fish', 'egg', 'bread', 'tea', 'coffee', 'milk', 'beer', 'wine', 'soup', 'hotpot', 'cake', 'beverage', 'juice'],
      words: ['米饭', '面条', '包子', '饺子', '肉', '牛肉', '猪肉', '鸡肉', '鱼', '鸡蛋', '面包', '茶', '咖啡', '牛奶', '水', '啤酒', '红酒', '汤', '火锅', '蛋糕', '果汁', '饮料']
    },
    medical_health: {
      label: 'Y tế & Sức khỏe',
      label_en: 'Medical & Health',
      vn_terms: ['bệnh viện', 'bác sĩ', 'y tá', 'uống thuốc', 'cảm cúm', 'phát sốt', 'ho khan', 'đau đầu', 'đau bụng', 'bị bệnh', 'khám bệnh', 'tiêm thuốc', 'sức khỏe', 'thân thể', 'kiểm tra sức khỏe', 'phẫu thuật', 'phòng khám', 'xe cấp cứu'],
      en_terms: ['hospital', 'doctor', 'physician', 'nurse', 'medicine', 'drug', 'pill', 'cold', 'fever', 'cough', 'headache', 'sick', 'illness', 'injection', 'health', 'surgery', 'clinic', 'ambulance'],
      words: ['医院', '医生', '护士', '药', '感冒', '发烧', '咳嗽', '头痛', '胃痛', '生病', '看病', '打针', '吃药', '健康', '身体', '检查', '手术', '诊所', '救护车']
    },
    travel_transport: {
      label: 'Giao thông & Đi lại',
      label_en: 'Transportation',
      vn_terms: ['xe ô tô', 'xe buýt', 'xe taxi', 'tàu hỏa', 'tàu điện ngầm', 'máy bay', 'sân bay', 'nhà ga', 'vé tàu', 'vé máy bay', 'đường phố', 'giao thông', 'du lịch', 'khách sạn', 'hành lý'],
      en_terms: ['car', 'bus', 'taxi', 'train', 'subway', 'metro', 'airplane', 'flight', 'airport', 'railway station', 'ticket', 'road', 'traffic', 'travel', 'trip', 'hotel', 'luggage'],
      words: ['汽车', '公共汽车', '出租车', '火车', '地铁', '飞机', '机场', '火车站', '车票', '机票', '马路', '路', '交通', '旅行', '旅游', '宾馆', '酒店', '行李']
    },
    education_study: {
      label: 'Trường học & Sách vở',
      label_en: 'Education & Study',
      vn_terms: ['học tập', 'sách vở', 'vở ghi', 'bút viết', 'bút chì', 'thước kẻ', 'trường học', 'lớp học', 'thầy giáo', 'cô giáo', 'bạn học', 'học sinh', 'bài tập về nhà', 'kỳ thi', 'thi cử', 'đại học', 'thư viện', 'từ điển', 'tiết học'],
      en_terms: ['study', 'learn', 'book', 'notebook', 'pen', 'pencil', 'ruler', 'school', 'classroom', 'teacher', 'classmate', 'student', 'homework', 'exam', 'examination', 'university', 'library', 'dictionary', 'lesson'],
      words: ['学习', '书', '本子', '笔', '铅笔', '尺子', '学校', '教室', '老师', '同学', '学生', '作业', '考试', '大学', '图书馆', '课本', '词典', '课', '上课']
    },
    business_economy: {
      label: 'Mua sắm & Kinh tế',
      label_en: 'Shopping & Economy',
      vn_terms: ['tiền bạc', 'giá cả', 'mua sắm', 'bán hàng', 'siêu thị', 'trung tâm thương mại', 'cửa hàng', 'ngân hàng', 'công ty', 'giá rẻ', 'giá đắt', 'hóa đơn', 'giảm giá', 'thẻ tín dụng', 'tiền mặt', 'kinh tế', 'ông chủ', 'khách hàng'],
      en_terms: ['money', 'price', 'buy', 'purchase', 'sell', 'supermarket', 'mall', 'shop', 'store', 'bank', 'company', 'cheap', 'expensive', 'invoice', 'discount', 'credit card', 'cash', 'economy', 'boss', 'customer'],
      words: ['钱', '价格', '买', '卖', '超市', '商场', '商店', '银行', '公司', '便宜', '贵', '发票', '打折', '信用卡', '现金', '经济', '老板', '客户']
    },
    animal_nature: {
      label: 'Động vật & Tự nhiên',
      label_en: 'Animals & Nature',
      vn_terms: ['con chó', 'con mèo', 'con chim', 'con cá', 'con ngựa', 'con bò', 'con cừu', 'gấu trúc', 'con hổ', 'bông hoa', 'cái cây', 'trời mưa', 'tuyết rơi', 'cơn gió', 'mặt trời', 'mặt trăng', 'ngọn núi', 'dòng sông', 'biển cả', 'động vật', 'thiên nhiên'],
      en_terms: ['dog', 'cat', 'bird', 'fish', 'horse', 'cow', 'sheep', 'panda', 'tiger', 'flower', 'tree', 'rain', 'snow', 'wind', 'sun', 'moon', 'mountain', 'river', 'sea', 'ocean', 'animal', 'nature'],
      words: ['狗', '猫', '鸟', '马', '牛', '羊', '大熊猫', '老虎', '花', '树', '雨', '雪', '风', '太阳', '月亮', '山', '河', '海', '动物']
    },
    family_love: {
      label: 'Gia đình & Con người',
      label_en: 'Family & People',
      vn_terms: ['bố', 'mẹ', 'ông nội', 'bà nội', 'anh trai', 'chị gái', 'em trai', 'em gái', 'con trai', 'con gái', 'người chồng', 'người vợ', 'gia đình', 'bạn bè', 'người thân', 'cha mẹ'],
      en_terms: ['father', 'mother', 'grandfather', 'grandmother', 'elder brother', 'elder sister', 'younger brother', 'younger sister', 'son', 'daughter', 'husband', 'wife', 'family', 'friend', 'parents'],
      words: ['爸爸', '妈妈', '爷爷', '奶奶', '哥哥', '姐姐', '弟弟', '妹妹', '儿子', '女儿', '丈夫', '妻子', '家', '家庭', '朋友', '人', '亲戚', '父母']
    },
    emotion_mind: {
      label: 'Cảm xúc & Tâm lý',
      label_en: 'Emotion & Mind',
      vn_terms: ['vui mừng', 'vui vẻ', 'hạnh phúc', 'buồn bã', 'đau lòng', 'lo lắng', 'sợ hãi', 'tức giận', 'nhớ nhung', 'cảm thấy', 'cho rằng', 'hy vọng', 'yêu thích', 'chán ghét', 'hài lòng', 'yên tâm', 'sốt ruột', 'tâm trạng'],
      en_terms: ['happy', 'glad', 'joy', 'sad', 'sorrow', 'worry', 'anxious', 'afraid', 'fear', 'angry', 'miss', 'feel', 'think', 'hope', 'like', 'hate', 'satisfied', 'relieved', 'mood', 'emotion'],
      words: ['高兴', '快乐', '难过', '伤心', '担心', '害怕', '生气', '想念', '觉得', '认为', '希望', '喜欢', '讨厌', '满意', '放心', '着急', '心情']
    }
  };

  function matchItemCategory(item, catKey) {
    if (!catKey || catKey === 'all') return true;
    if (catKey === 'tcm') {
      if (item.lvl === 'Đông Y' || item.pos === 'Thuật ngữ Y học') return true;
      if (window.TCM_DATA && window.TCM_DATA.terms) {
        if (window.TCM_DATA.terms.some(t => t.zh === item.zh)) return true;
      }
    }
    const cat = DICT_CATEGORIES[catKey];
    if (!cat) return true;
    const zh = item.zh || '';
    if (catKey === 'fruit' && (zh === '肉' || zh === '猪肉' || zh === '牛肉' || zh === '羊肉')) return false;
    if (cat.words.includes(zh)) return true;
    const textVi = ` ${item.vi || ''} `.toLowerCase();
    for (const vn of cat.vn_terms) {
      const regex = new RegExp(`(?:[\\s,;:.!?:/"']|^)${vn}(?:[\\s,;:.!?:/"']|$)`, 'i');
      if (regex.test(textVi)) return true;
    }
    const textEn = ` ${item.en || ''} `.toLowerCase();
    for (const en of cat.en_terms) {
      const regex = new RegExp(`\\b${en}\\b`, 'i');
      if (regex.test(textEn)) return true;
    }
    return false;
  }

  const TOPIC_KEYWORDS = [
    ['medical_health', ['bác sĩ', 'y tế', 'thuốc', 'bệnh', 'viện', 'doctor', 'medicine', 'hospital', 'health', 'disease', 'pain', 'sick']],
    ['food_drink', ['ăn', 'uống', 'cơm', 'món', 'trà', 'bánh', 'thịt', 'rau', 'rượu', 'táo', 'quả', 'food', 'drink', 'eat', 'apple', 'tea', 'cook', 'bread', 'water']],
    ['tech_media', ['máy tính', 'điện thoại', 'máy', 'mạng', 'phim', 'ảnh', 'computer', 'phone', 'tv', 'radio', 'internet', 'tech', 'video']],
    ['travel_transport', ['xe', 'tàu', 'máy bay', 'bay', 'đường', 'du lịch', 'vé', 'car', 'bus', 'train', 'flight', 'plane', 'travel', 'ticket', 'trip']],
    ['education_study', ['học', 'sách', 'trường', 'giáo', 'bài tập', 'thi', 'lớp', 'study', 'school', 'book', 'learn', 'student', 'teacher', 'class']],
    ['business_economy', ['tiền', 'giá', 'mua', 'bán', 'công ty', 'kinh tế', 'đắt', 'rẻ', 'money', 'price', 'buy', 'sell', 'company', 'cheap', 'expensive', 'pay']],
    ['family_love', ['bố', 'mẹ', 'anh', 'chị', 'em', 'con', 'vợ', 'chồng', 'yêu', 'gia đình', 'bạn bè', 'father', 'mother', 'family', 'love', 'brother', 'sister', 'friend']],
    ['nature_weather', ['mưa', 'nắng', 'gió', 'trời', 'núi', 'sông', 'biển', 'hoa', 'cây', 'thời tiết', 'rain', 'sun', 'wind', 'nature', 'flower', 'weather', 'tree', 'sky']],
    ['emotion_mind', ['vui', 'buồn', 'lo', 'sợ', 'giận', 'nhớ', 'nghĩ', 'cảm giác', 'yêu thích', 'happy', 'sad', 'worry', 'fear', 'feel', 'angry']],
    ['sports_fitness', ['thể thao', 'bóng', 'chạy', 'bơi', 'tập', 'vận động', 'sport', 'ball', 'run', 'swim', 'fitness']],
    ['greeting_social', ['chào', 'cảm ơn', 'xin lỗi', 'tạm biệt', 'mời', 'hẹn', 'hello', 'thank', 'sorry', 'bye', 'please']],
    ['time_history', ['năm', 'tháng', 'ngày', 'giờ', 'tuần', 'hôm', 'mai', 'phút', 'giây', 'time', 'day', 'year', 'hour', 'week', 'minute', 'today', 'tomorrow']],
    ['person_pronoun', ['tôi', 'bạn', 'anh ấy', 'cô ấy', 'người', 'ai', 'ông', 'bà', 'chúng tôi', 'i', 'you', 'he', 'she', 'we', 'they', 'person', 'who']],
    ['country_geography', ['nước', 'quốc gia', 'tỉnh', 'thành phố', 'bắc kinh', 'việt nam', 'trung quốc', 'country', 'city', 'china', 'vietnam']],
    ['evaluation_judge', ['đúng', 'sai', 'tốt', 'xấu', 'cao', 'thấp', 'so sánh', 'kiên trì', 'chăm chỉ', 'good', 'bad', 'right', 'wrong', 'persist']],
    ['daily_action', ['làm', 'nhìn', 'nghe', 'nói', 'ngủ', 'thức', 'đứng', 'ngồi', 'do', 'look', 'see', 'hear', 'say', 'sleep', 'sit', 'stand']]
  ];

  function getSmartTopic(zh, vi, en) {
    if (window.HSK_WORD_TOPIC_MAP && window.HSK_WORD_TOPIC_MAP[zh]) {
      return window.HSK_WORD_TOPIC_MAP[zh];
    }
    const text = ` ${zh} ${vi || ''} ${en || ''} `.toLowerCase();
    for (const [topic, kws] of TOPIC_KEYWORDS) {
      for (const kw of kws) {
        const regex = new RegExp(`(?:\\s|[^\\w\\s]|^)${kw}(?:\\s|[^\\w\\s]|$)`, 'i');
        if (regex.test(text)) return topic;
      }
    }
    return 'abstract_concept';
  }

  
  // ==========================================================================
  // BỘ NẠP ẢNH MINH HỌA THỰC TẾ ĐỘNG (DYNAMIC REAL-WORLD IMAGE RESOLVER)
  // ==========================================================================
  function resolveCardImages() {
    const unres = document.querySelectorAll('.dict-art-viewport[data-need-resolve="true"]');
    unres.forEach(el => {
      const w = el.dataset.word;
      if (!w) return;
      el.removeAttribute('data-need-resolve');

      // Check localStorage first
      let cached = null;
      try { cached = localStorage.getItem('hsk_img_' + w); } catch(e){}
      if (cached) {
        const imgEl = document.createElement('img');
        imgEl.className = 'dict-art-img';
        imgEl.alt = w;
        imgEl.src = `${window.HSK_MEDIA_ENDPOINT || 'https://content.lazidi.vn/media/v1/'}${cached}`;
        const svgEl = el.querySelector('svg');
        if (svgEl) svgEl.remove();
        el.appendChild(imgEl);
        el.style.background = 'var(--paper-card-sub)';
        return;
      }

      // Query Visual Media Cache non-blocking in background
      /* Offline-first cached resolution */ Promise.reject('local only')
        .then(r => r.json())
        .then(data => {
          const img = data && data.card && data.card.entry && data.card.entry.image;
          if (img) {
            const hash = img.replace('m/', '');
            try { localStorage.setItem('hsk_img_' + w, hash); } catch(e){}
            const imgEl = document.createElement('img');
            imgEl.className = 'dict-art-img';
            imgEl.alt = w;
            imgEl.src = `${window.HSK_MEDIA_ENDPOINT || 'https://content.lazidi.vn/media/v1/'}${hash}`;
            const svgEl = el.querySelector('svg');
            if (svgEl) svgEl.remove();
            el.appendChild(imgEl);
            el.style.background = 'var(--paper-card-sub)';
          }
        })
        .catch(() => {});
    });
  }

  function renderDictionaryTab() {
    setupDictionaryListeners();

    const results = performDictSearch();
    const total = results.length;
    const totalPages = Math.max(1, Math.ceil(total / DICT_PAGE_SIZE));
    if (dictCurrentPage > totalPages) dictCurrentPage = 1;

    // Update stats bar
        // Sync dropdown values with current state
    const lvlSel = document.getElementById('dict-level-select');
    if (lvlSel && lvlSel.value !== dictCurrentLevel) lvlSel.value = dictCurrentLevel;
    const topSel = document.getElementById('dict-topic-select');
    if (topSel && topSel.value !== dictCurrentTopic) topSel.value = dictCurrentTopic;

    const infoEl = document.getElementById('dict-count-info');
    if (infoEl) {
      const qText = dictQuery ? `cho từ khóa "${dictQuery}"` : '';
      const lvlText = dictCurrentLevel === 'all' ? (currentLang === 'en' ? 'All Levels' : 'Tất cả các cấp') : `HSK ${dictCurrentLevel}`;
      const topicObj = DICT_CATEGORIES[dictCurrentTopic];
      const topicText = dictCurrentTopic === 'all' ? '' : ` · ${currentLang === 'en' ? topicObj?.label_en : topicObj?.label}`;
      infoEl.innerHTML = `${currentLang === 'en' ? 'Found' : 'Tìm thấy'} <strong>${total.toLocaleString()}</strong> ${currentLang === 'en' ? 'entries' : 'mục từ'} ${qText} (${lvlText}${topicText}) · ${currentLang === 'en' ? 'Page' : 'Trang'} ${dictCurrentPage} / ${totalPages}`;
    }

    // Slice results for current page
    const startIdx = (dictCurrentPage - 1) * DICT_PAGE_SIZE;
    const pageItems = results.slice(startIdx, startIdx + DICT_PAGE_SIZE);

    // Render cards
    const container = document.getElementById('dict-results-container');
    if (!container) return;
    container.innerHTML = '';

    if (pageItems.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--paper-card); border: 1px dashed var(--border-paper); border-radius: 8px;">
          <p style="font-size: 1.2rem; color: var(--ink-secondary); margin-bottom: 8px;">Không tìm thấy từ vựng phù hợp với "${dictQuery}"</p>
          <p style="font-size: 0.9rem; color: var(--ink-muted);">Hãy thử tìm bằng Pinyin không dấu (vd: <em>jianchi</em>, <em>yisheng</em>), chữ Hán hoặc nghĩa tiếng Việt.</p>
        </div>
      `;
    } else {
      pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'dict-card';

        // 1. Sinh ảnh minh họa Vector SVG trực quan theo chủ đề (Visual Topic Hero)
        const topicKey = getSmartTopic(item.zh, item.vi, item.en);
        const svgHero = typeof window.renderTopicIllustrationSvg === 'function'
          ? window.renderTopicIllustrationSvg(item.zh, topicKey, item.vi || item.en, item.pos)
          : '';

        // 2. Dữ liệu Chiết tự, Mẹo nhớ & Chữ dễ nhầm (từ HSK 3.0 Etymology Knowledge Base)
        const etymology = (window.HSK_ETYMOLOGY_ENTRIES && window.HSK_ETYMOLOGY_ENTRIES[item.zh]) || null;
        let etymologyHtml = '';
        if (etymology) {
          const lzItems = [];
          if (etymology.mnemonic) lzItems.push(`<div class="dict-etymology-item"><strong>💡 Mẹo nhớ:</strong> ${etymology.mnemonic}</div>`);
          if (etymology.etymology) lzItems.push(`<div class="dict-etymology-item"><strong>📜 Chiết tự:</strong> ${etymology.etymology}</div>`);
          if (etymology.components && etymology.components.length) lzItems.push(`<div class="dict-etymology-item"><strong>🧩 Thành phần:</strong> ${etymology.components.join(', ')}</div>`);
          if (etymology.lookalikes && etymology.lookalikes.length) {
            const lkStr = etymology.lookalikes.map(l => `${l.char} (${l.distinguish || l.gloss})`).join('; ');
            lzItems.push(`<div class="dict-etymology-item"><strong>⚠️ Dễ nhầm:</strong> ${lkStr}</div>`);
          }
          if (lzItems.length) {
            etymologyHtml = `<div class="dict-etymology-box">${lzItems.join('')}</div>`;
          }
        }

        card.innerHTML = `
          ${svgHero ? `<div class="dict-card-img">${svgHero}</div>` : ''}

          <div class="dict-card-head">
            <div class="dict-zh-wrap">
              <span class="dict-zh">${item.zh}</span>
              ${item.trad ? `<span class="dict-trad">[繁: ${item.trad}]</span>` : ''}
            </div>
            <span class="dict-badge">${item.lvl}</span>
          </div>

          <div class="dict-meta-row">
            <span class="dict-py">
              ${item.py}
              <button class="dict-audio-btn" title="Phát âm" onclick="window.playDictAudio('${item.zh}')">🔊</button>
            </span>
            ${item.hv ? `<span class="dict-hv">[${item.hv}]</span>` : ''}
            ${item.pos ? `<span class="dict-pos">${item.pos}</span>` : ''}
            ${item.rad ? `<span class="dict-rad">Bộ: ${item.rad}</span>` : ''}
          </div>

          <div class="dict-vi">
            ${currentLang === 'en'
              ? `<div><strong style="color:var(--vermilion); font-size:0.82rem; text-transform:uppercase;">English:</strong> ${item.en || item.vi}</div>
                 ${item.vi && item.vi !== item.en ? `<div style="font-size:0.82rem; color:var(--ink-secondary); margin-top:4px; border-top:1px dashed var(--border-paper); padding-top:4px;"><strong>Tiếng Việt:</strong> ${item.vi}</div>` : ''}`
              : `<div>${item.vi || item.en}</div>
                 ${item.en ? `<div style="font-size:0.82rem; color:var(--ink-secondary); margin-top:4px; border-top:1px dashed var(--border-paper); padding-top:4px;"><strong>English:</strong> ${item.en}</div>` : ''}`
            }
          </div>

          ${etymologyHtml}

          <div class="dict-action-row">
            <button class="dict-mini-btn btn-act-write">✍️ Tập viết nét</button>
            <button class="dict-mini-btn btn-act-trace">📝 Tập tô ô Mễ</button>
            <button class="dict-mini-btn btn-act-copy">📋 Sao chép</button>
          </div>
        `;
        // Clean event listeners without quote breaking
        const btnWrite = card.querySelector('.btn-act-write');
        if (btnWrite) btnWrite.onclick = () => window.practiceWritingDict(item.zh);
        const btnTrace = card.querySelector('.btn-act-trace');
        if (btnTrace) btnTrace.onclick = () => window.practiceTracingDict(item.zh, item.py, item.vi || item.en || '');
        const btnCopy = card.querySelector('.btn-act-copy');
        if (btnCopy) btnCopy.onclick = () => window.copyDictWord(item.zh, item.py, item.vi || item.en || '');

        container.appendChild(card);
      });
    }

    resolveCardImages();

    // Render pagination
    const paginEl = document.getElementById('dict-pagination');
    if (paginEl) {
      paginEl.innerHTML = `
        <button class="dict-page-btn" id="btn-dict-prev" ${dictCurrentPage <= 1 ? 'disabled' : ''}>❮ Trang trước</button>
        <span class="dict-page-info">Trang ${dictCurrentPage} / ${totalPages}</span>
        <button class="dict-page-btn" id="btn-dict-next" ${dictCurrentPage >= totalPages ? 'disabled' : ''}>Trang sau ❯</button>
      `;

      const btnPrev = document.getElementById('btn-dict-prev');
      const btnNext = document.getElementById('btn-dict-next');
      if (btnPrev) btnPrev.onclick = () => {
        if (dictCurrentPage > 1) {
          dictCurrentPage--;
          renderDictionaryTab();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
      if (btnNext) btnNext.onclick = () => {
        if (dictCurrentPage < totalPages) {
          dictCurrentPage++;
          renderDictionaryTab();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };
    }
  }

  function setupDictionaryListeners() {
    if (dictListenersAttached) return;
    dictListenersAttached = true;

    const input = document.getElementById('dict-search-input');
    const clearBtn = document.getElementById('dict-clear-btn');
    const searchBtn = document.getElementById('dict-search-btn');

    let debounceTimer = null;
    if (input) {
      input.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          dictQuery = e.target.value;
          dictCurrentPage = 1;
          renderDictionaryTab();
        }, 200);
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          clearTimeout(debounceTimer);
          dictQuery = input.value;
          dictCurrentPage = 1;
          renderDictionaryTab();
        }
      });
    }

    if (clearBtn && input) {
      clearBtn.onclick = () => {
        input.value = '';
        dictQuery = '';
        dictCurrentPage = 1;
        renderDictionaryTab();
        input.focus();
      };
    }

    if (searchBtn && input) {
      searchBtn.onclick = () => {
        dictQuery = input.value;
        dictCurrentPage = 1;
        renderDictionaryTab();
      };
    }

    // Level filter chips
    // Dropdown phân cấp HSK
    const lvlSelect = document.getElementById('dict-level-select');
    if (lvlSelect) {
      lvlSelect.addEventListener('change', (e) => {
        dictCurrentLevel = e.target.value;
        dictCurrentPage = 1;

        if (dictCurrentLevel === 'full' && !fullCvdictCache && !isFullCvdictLoading) {
          isFullCvdictLoading = true;
          const infoEl = document.getElementById('dict-count-info');
          if (infoEl) infoEl.innerHTML = '<em>Đang tải cơ sở dữ liệu mở rộng 122.000 từ CC-CEDICT...</em>';
          fetch('./cvdict_full.json')
            .then(res => res.json())
            .then(data => {
              fullCvdictCache = data;
              isFullCvdictLoading = false;
              renderDictionaryTab();
            })
            .catch(err => {
              console.warn('Cannot load cvdict_full.json:', err);
              isFullCvdictLoading = false;
              renderDictionaryTab();
            });
        } else {
          renderDictionaryTab();
        }
      });
    }

    // Dropdown chủ đề từ vựng thực tế
    const topicSelect = document.getElementById('dict-topic-select');
    if (topicSelect) {
      topicSelect.addEventListener('change', (e) => {
        dictCurrentTopic = e.target.value;
        dictCurrentPage = 1;
        renderDictionaryTab();
      });
    }
  }

  window.playDictAudio = function(text) {
    speakTTS(text);
  };

  window.practiceWritingDict = function(word) {
    const ch = word.match(/[\u4e00-\u9fa5]/) ? word.match(/[\u4e00-\u9fa5]/)[0] : word.charAt(0);
    // Switch to Tab 1
    const tabBtn = document.querySelector('[data-tab="tab-writing"]');
    if (tabBtn) tabBtn.click();

    // Check if character is in handwriting list
    const list = getHandwritingList(currentLevel);
    const idx = list.findIndex(item => item.char === ch);
    if (idx !== -1) {
      currentCharIndex = idx;
      renderWritingTab();
    } else {
      // Find dictionary item
      const dItem = (window.HSK_DICTIONARY || []).find(d => d.zh === ch || d.zh.includes(ch)) || {};
      const customItem = {
        char: ch,
        pinyin: dItem.py || '',
        hanviet: dItem.hv || '',
        meaning: dItem.vi || 'Từ tra cứu từ điển',
        compounds: [],
        audio: ''
      };

      // Load dynamically into HanziWriter
      const targetEl = document.getElementById('hanzi-target');
      if (targetEl) targetEl.innerHTML = '';

      const style = getComputedStyle(document.documentElement);
      const strokeColor = style.getPropertyValue('--hanzi-stroke').trim() || '#2d2621';
      const outlineColor = style.getPropertyValue('--hanzi-outline').trim() || '#d6c8b4';
      const drawingColor = style.getPropertyValue('--hanzi-drawing').trim() || '#b93829';

      const writerSize = getResponsiveWriterSize();
      hanziWriter = HanziWriter.create('hanzi-target', ch, {
        width: writerSize,
        height: writerSize,
        padding: 20,
        showOutline: true,
        strokeAnimationSpeed: 1.2,
        delayBetweenStrokes: 150,
        strokeColor: strokeColor,
        outlineColor: outlineColor,
        drawingColor: drawingColor,
        charDataLoader: function(char, onComplete) {
          if (window.HSK_STROKES && window.HSK_STROKES[char]) {
            onComplete(window.HSK_STROKES[char]);
          } else {
            fetch(`https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${char}.json`)
              .then(res => res.json())
              .then(data => onComplete(data))
              .catch(() => {
                if (window.HSK_STROKES && window.HSK_STROKES['巴']) {
                  onComplete(window.HSK_STROKES['巴']);
                }
              });
          }
        }
      });

      // Update meta text
      const pyEl = document.getElementById('char-pinyin');
      const hvEl = document.getElementById('char-hanviet');
      const mnEl = document.getElementById('char-meaning');
      if (pyEl) pyEl.textContent = customItem.pinyin;
      if (hvEl) hvEl.textContent = customItem.hanviet;
      if (mnEl) mnEl.textContent = customItem.meaning;
    }
  };

  window.practiceTracingDict = function(zh, py, vi) {
    // Switch to Tab 2
    const tabBtn = document.querySelector('[data-tab="tab-tracing"]');
    if (tabBtn) tabBtn.click();

    // Render tracing cells in Tab 2
    const container = document.getElementById('mige-grid-container');
    if (!container) return;
    container.innerHTML = '';

    const chars = zh.split('');
    chars.forEach(ch => {
      const d = (window.HSK_DICTIONARY || []).find(item => item.zh === ch) || {};
      const cell = document.createElement('div');
      cell.className = 'trace-cell';
      cell.innerHTML = `
        <div class="trace-py">${d.py || py || ''}</div>
        <div class="trace-box">
          <span class="trace-shadow-char">${ch}</span>
        </div>
        <div class="trace-hv">${d.hv || ''}</div>
      `;
      container.appendChild(cell);
    });

    const meanEl = document.getElementById('tracing-meaning-text');
    if (meanEl) {
      meanEl.innerHTML = `
        <div class="tracing-full-zh">${zh}</div>
        <div class="tracing-full-py">${py}</div>
        <div class="tracing-full-vi">➔ Dịch nghĩa: ${vi}</div>
      `;
    }

    setTimeout(() => {
      if (typeof resizeTracingCanvas === 'function') resizeTracingCanvas();
    }, 50);
  };

  window.copyDictWord = function(zh, py, vi) {
    const text = `${zh} [${py}] : ${vi}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert(`Đã sao chép vào bộ nhớ tạm:\n${text}`);
      });
    }
  };
})();