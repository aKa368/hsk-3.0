const CACHE_NAME = 'hsk3-cache-v36';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './icon.png',
  './favicon.png',
  './practice_essays_data.js',
  './app.js',
  './srs_quiz_engine.js',
  './tcm_data.js',
  './data.js',
  './dict_data.js',
  './hsk_visual_media.js',
  './hsk_etymology_data.js',
  './visual_vocab_data.js',
  './curriculum_data.js',
  './strokes.js',
  './manifest.json',
  './version.json'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => console.warn('Precache warning:', err));
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  // Luôn lấy version.json và sw.js trực tiếp từ network để không bị kẹt cache
  if (url.includes('version.json') || url.includes('sw.js')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => new Response('Offline'));
    })
  );
});
