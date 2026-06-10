const CACHE_NAME = "ansh-player-v1";

const urlsToCache = [
    "/",
    "index.html",
    "style.css",
    "script.js",
    "cover.jpg",
    "logo.png",
    "song1.mp3",
    "song2.mp3",
    "song3.mp3"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});