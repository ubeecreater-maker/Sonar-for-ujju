// 1. Install hote time sirf index.html ko save (cache) kar lo
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-data').then((cache) => {
      // Yahan humne sirf '/' aur '/index.html' rakha hai
      return cache.addAll(['/', '/index.html']);
    })
  );
});

// 2. Internet na hone par saved file dikhao
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
