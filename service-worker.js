// service-worker.js — NZM IPTV
const CACHE_NAME = 'nzm-iptv-shell-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/channels.js',
  '/logo.png',
  '/mwlogo.png',
  '/manifest.json'
];

// INSTALL — cache the app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .catch(err => console.error('SW install failed:', err))
  );
  self.skipWaiting();
});

// ACTIVATE — clear old versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// FETCH — cache-first for shell; network-first for dynamic or streams
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Skip caching live streams or dynamic video data
  if (
    url.pathname.endsWith('.m3u8') ||
    url.pathname.endsWith('.mpd') ||
    url.hostname.includes('youtube.com') ||
    url.hostname.includes('thetvapp') ||
    url.hostname.includes('udp') ||
    url.protocol === 'blob:'
  ) {
    return; // allow direct network
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          if (!res || res.status !== 200 || res.type === 'opaque') return res;
          const resClone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
          return res;
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
