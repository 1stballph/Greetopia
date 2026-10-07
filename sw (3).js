/* Greetopia service worker — network first, so an updated page always wins.
 * It only keeps a copy of the app's own files (same site) to ride out a few
 * seconds of bad signal, and it never touches the booth server (Apps Script),
 * Google Drive or GCash pages. Its presence also lets phones install the app. */
const CACHE = 'greetopia-v1';
const CORE = ['./', './index.html', './download.html', './manifest.json',
              './greetopia_icon_192.png', './greetopia_icon_512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // server, Drive, fonts: straight to the network
  e.respondWith(
    fetch(req).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
  );
});
