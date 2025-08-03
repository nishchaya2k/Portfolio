// Triggered when the service worker is first installed
const CACHE_NAME = 'pwa-open'

self.addEventListener("install", (event) => {
    self.skipWaiting(); // Skip waiting phase and activate new SW immediately

    event.waitUntil( //tells the browser to wait until caching is done before finishing installation
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/index.html'
            ])
        })
    )
})


// Triggered once the service worker has been installed

self.addEventListener("activate", (event) => {
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

    self.clients.claim(); // Take control of open pages immediately
});

// This pre-caches important files so the app can work offline.
// needs to be correct ->  call api everytime + update cache, & consider cache only when api failed

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);  
        })
    )
})



/*
Summary of Service Worker Events:

0. register:
  - The first step is to register the service worker with the browser.
  - This is done using `navigator.serviceWorker.register()` from your main JS file (usually in index.js or directly in index.html).

1. install:
   - This is the first phase of the service worker lifecycle.
   - Opens a named cache ('pwa-open') and pre-caches important files like '/' and '/index.html'.
   - Uses skipWaiting() to skip the "waiting" state so the new SW can activate immediately.

2. activate:
   - Triggered after the service worker is installed.
   - The main job here is cache management:
     - It retrieves all existing cache names using caches.keys().
     - It loops through those names and deletes any cache not named 'pwa-open'.
     - This ensures that old, outdated versions of cached files don't take up space or cause version conflicts.
   - Uses clients.claim() to take immediate control of all open tabs under the service worker's scope.
     - Without this, the new service worker wouldn't take effect until the user refreshes the page.


3. fetch:
   - Listens for every network request made by the app (HTML, CSS, JS, images, APIs, etc.).
   - First checks if the request is already cached using caches.match().
     - If cached, it serves the response directly from cache (fast and offline-friendly).
 //    - If not cached, it fetches from the network and returns that instead.
//    - This strategy is called "Cache First, Network Fallback", and is great for performance and offline support.

Overall:
This service worker enables offline capabilities, efficient caching, and ensures your PWA always serves the latest version while keeping old versions clean.
*/


/*
How a PWA Runs Like a Native App Without Browser UI:

1. Manifest & Standalone Mode:
   - The 'manifest.json' file includes "display": "standalone".
   - This tells the device to launch the app without browser chrome (no address bar, no tabs).
   - The app opens like a native app window when launched from the home screen.

2. Service Worker Caching:
   - When the service worker installs, it caches important assets (HTML, JS, CSS, images).
   - These cached files are stored in the browser’s Cache Storage on the device.
   - Even if the device is offline, the service worker serves files from the cache.
   - This ensures the app loads quickly and works without an internet connection.

3. Local Data Storage:
   - PWAs can use browser storage APIs (IndexedDB, LocalStorage, Cache Storage).
   - This lets the app save user data, preferences, and content locally on the device.
   - The data persists across sessions and is accessible offline.

4. Rendering & Browser Engine:
   - Although the app looks like a standalone native app, it still runs inside the browser engine (e.g., Chrome’s Blink).
   - The browser engine renders the app UI but without showing the browser’s usual UI elements.
   - This gives the user a seamless, app-like experience.

Summary:
- Manifest enables launching without browser UI.
- Service worker caches assets and code locally.
- Storage APIs save dynamic data on the device.
- Browser engine powers the app behind the scenes.
- Together, these make the web app behave like a native app.

*/


// "display": "fullscreen"
// "display": "standalone"
// "display": "minimal-ui"
// "display": "browser"