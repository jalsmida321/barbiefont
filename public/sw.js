const CACHE_NAME = 'barbie-font-generator-v1';
const urlsToCache = [
  '/',
  '/generator.html',
  '/public/styles/main.css',
  '/public/favicon/favicon.ico',
  '/public/favicon/favicon-192x192.png',
  '/public/favicon/favicon-512x512.png',
  '/src/main.jsx',
  '/src/App.jsx',
  '/src/components/FontGenerator.jsx',
  '/src/components/FontControls.jsx',
  '/src/components/FontList.jsx',
  '/src/components/FontPreview.jsx',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Update service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});