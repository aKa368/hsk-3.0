const CACHE_NAME = 'hsk3-cache-v4';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './practice_essays_data.js',
  './app.js',
  './data.js',
  './dict_data.js',
  './visual_vocab_data.js',
  './curriculum_data.js',
  './strokes.js',
  './manifest.json',
  './js/hanzi-writer.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
