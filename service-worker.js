// service-worker.js

// Cache name for storing resources
const cacheName = "my-pwa-cache-v1";

// List of resources to cache
const resourcesToCache = [
  "/",
  "/index.html",
  "./script.js",
  "/styles.css",
  "/icon.png"
];

// Install event: Caching resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(resourcesToCache))
  );
});

// Fetch event: Intercept network requests and serve from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
