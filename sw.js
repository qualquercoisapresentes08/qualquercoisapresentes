// QCP Service Worker - Network First (Sempre busca a versao mais recente da rede)
const CACHE_NAME = "qcp-v2";

self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  // Limpa todos os caches antigos imediatamente
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Nao intercepta chamadas de API
  if (e.request.url.includes("/api/")) {
    return;
  }

  // Network First: Sempre busca da rede primeiro; se estiver offline, usa o cache
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        if (response && response.status === 200 && response.type === "basic") {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, responseToCache));
        }
        return response;
      })
      .catch(() => caches.match(e.request).then((cached) => cached || caches.match("/index.html")))
  );
});
