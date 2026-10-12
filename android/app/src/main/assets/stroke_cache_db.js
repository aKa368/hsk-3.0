/**
 * HSK 3.0 — IndexedDB Stroke Cache Engine (stroke_cache_db.js)
 * Tự động lưu trữ vĩnh viễn cấu trúc nét chữ Hán vào IndexedDB cục bộ của thiết bị.
 * Hoạt động 100% Offline: RAM (window.HSK_STROKES) -> IndexedDB -> Multi-CDN Network.
 */

(function () {
  'use strict';

  const DB_NAME = 'HSK_STROKE_CACHE_DB';
  const DB_VERSION = 1;
  const STORE_NAME = 'strokes';

  let dbInstance = null;
  let isDBReady = false;

  // Khởi tạo IndexedDB
  function initDB() {
    return new Promise((resolve) => {
      if (!('indexedDB' in window)) {
        console.warn('[StrokeCacheDB] Trình duyệt không hỗ trợ IndexedDB.');
        return resolve(null);
      }
      try {
        const req = indexedDB.open(DB_NAME, DB_VERSION);
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
          console.warn('[StrokeCacheDB] Không thể mở IndexedDB.');
          resolve(null);
        };
      } catch (err) {
        console.warn('[StrokeCacheDB] Lỗi khởi tạo:', err);
        resolve(null);
      }
    });
  }

  // Đọc dữ liệu nét từ IndexedDB
  function getStrokeFromDB(char) {
    return new Promise((resolve) => {
      if (!dbInstance) return resolve(null);
      try {
        const tx = dbInstance.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(char);
        req.onsuccess = () => {
          if (req.result && req.result.data) {
            resolve(req.result.data);
          } else {
            resolve(null);
          }
        };
        req.onerror = () => resolve(null);
      } catch (e) {
        resolve(null);
      }
    });
  }

  // Lưu dữ liệu nét vào IndexedDB
  function saveStrokeToDB(char, data) {
    if (!dbInstance || !data) return;
    try {
      const tx = dbInstance.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      store.put({ char: char, data: data, savedAt: Date.now() });
    } catch (e) {}
  }

  // Tải dữ liệu nét chữ Hán chuẩn 3 tầng (RAM -> IndexedDB -> Multi-CDN)
  async function loadHanziStrokeData(char, onComplete) {
    if (!char) return;

    // Tầng 1: Đọc từ bộ nhớ RAM có sẵn
    window.HSK_STROKES = window.HSK_STROKES || {};
    if (window.HSK_STROKES[char]) {
      return onComplete(window.HSK_STROKES[char]);
    }

    // Tầng 2: Đọc từ bộ đệm vĩnh viễn IndexedDB của thiết bị (100% Offline)
    if (!dbInstance) {
      await initDB();
    }
    const dbData = await getStrokeFromDB(char);
    if (dbData) {
      window.HSK_STROKES[char] = dbData;
      return onComplete(dbData);
    }

    // Tầng 3: Tải từ CDN (khi có mạng) và tự động lưu vào IndexedDB
    const u1 = 'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';
    const u2 = 'https://unpkg.com/hanzi-writer-data@2.0/' + encodeURIComponent(char) + '.json';

    fetch(u1)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) => {
        window.HSK_STROKES[char] = data;
        saveStrokeToDB(char, data);
        onComplete(data);
      })
      .catch(() => {
        fetch(u2)
          .then((r) => r.json())
          .then((data) => {
            window.HSK_STROKES[char] = data;
            saveStrokeToDB(char, data);
            onComplete(data);
          })
          .catch((err) => {
            console.warn('[StrokeCacheDB] Không thể tải dữ liệu nét cho chữ:', char, err);
          });
      });
  }

  // Khởi tạo ngay khi nạp file
  if (typeof window !== 'undefined') {
    window.StrokeCacheDB = {
      init: initDB,
      get: getStrokeFromDB,
      save: saveStrokeToDB,
      loadCharData: loadHanziStrokeData
    };
    window.loadHanziStrokeData = loadHanziStrokeData;
    initDB();
  }
})();
