const CACHE_NAME = 'anesohom-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
  // '/icon.png'  <-- تأكد من وضع صورة أيقونة بنفس الاسم
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});