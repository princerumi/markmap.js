const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  a + "/_app/immutable/entry/app.99dc799a.js",
  a + "/_app/immutable/assets/0.254b6b5d.css",
  a + "/_app/immutable/nodes/0.a5d309f6.js",
  a + "/_app/immutable/assets/1.b20769a5.css",
  a + "/_app/immutable/nodes/1.0318ee87.js",
  a + "/_app/immutable/nodes/2.2bf3c9d0.js",
  a + "/_app/immutable/nodes/3.250351a8.js",
  a + "/_app/immutable/assets/4.a8067485.css",
  a + "/_app/immutable/nodes/4.3681c6f9.js",
  a + "/_app/immutable/nodes/5.a8eb3243.js",
  a + "/_app/immutable/nodes/6.6603b59b.js",
  a + "/_app/immutable/nodes/7.b5f3b56f.js",
  a + "/_app/immutable/nodes/8.d301f809.js",
  a + "/_app/immutable/chunks/common.a934672f.js",
  a + "/_app/immutable/chunks/debounce.1ea61cef.js",
  a + "/_app/immutable/chunks/footer.4bf0f568.js",
  a + "/_app/immutable/chunks/ga.d84d4cc0.js",
  a + "/_app/immutable/chunks/index.6063bb9a.js",
  a + "/_app/immutable/chunks/index.6267134c.js",
  a + "/_app/immutable/chunks/index.79786d98.js",
  a + "/_app/immutable/chunks/loader.71521e64.js",
  a + "/_app/immutable/chunks/markmap.3ad9e58b.js",
  a + "/_app/immutable/chunks/navigation.101b7725.js",
  a + "/_app/immutable/chunks/preload-helper.cf010ec4.js",
  a + "/_app/immutable/chunks/scheduler.4813dac0.js",
  a + "/_app/immutable/chunks/singletons.9041e240.js",
  a + "/_app/immutable/chunks/stores.b83db0f4.js",
  a + "/_app/immutable/chunks/toast.ba9d61ec.js",
  a + "/_app/immutable/chunks/toolbar.7f134b84.js",
  a + "/_app/immutable/assets/toolbar.607b20a4.css",
  a + "/_app/immutable/entry/start.5da5eed3.js",
  a + "/_app/immutable/chunks/buttons.esm.48f94bc9.js",
  a + "/_app/immutable/chunks/index.6f209dc5.js",
  a + "/_app/immutable/chunks/faq.853276a1.js",
  a + "/_app/immutable/chunks/json-options.4f7ddb4e.js",
  a + "/_app/immutable/chunks/markmap.ef13e9c4.js",
  a + "/_app/immutable/chunks/packages--coc-markmap.10bd7856.js",
  a + "/_app/immutable/chunks/packages--markmap-cli.b2e4fcc9.js",
  a + "/_app/immutable/chunks/packages--markmap-lib.6b1a1d45.js",
  a + "/_app/immutable/chunks/packages--markmap-toolbar.31bde5d9.js",
  a + "/_app/immutable/chunks/packages--markmap-view.692c7aee.js",
  a + "/_app/immutable/assets/codemirror.8a3c1e84.css",
  a + "/_app/immutable/chunks/codemirror.59e4ee5a.js"
], l = [
  a + "/.nojekyll",
  a + "/.well-known/brave-rewards-verification.txt",
  a + "/favicon.png",
  a + "/logo-192.png",
  a + "/logo-512.png",
  a + "/manifest.json"
], n = "1690639105394", m = `cache${n}`, i = u.concat(l), o = new Set(i);
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(m).then((s) => s.addAll(i)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== m && await caches.delete(t);
      self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url);
  if (s.protocol.startsWith("http") && !(s.hostname === self.location.hostname && s.port !== self.location.port)) {
    if (s.host === self.location.host && o.has(s.pathname)) {
      e.respondWith(caches.match(e.request, { ignoreSearch: !0 }));
      return;
    }
    e.request.cache !== "only-if-cached" && [self.location.host, "cdn.jsdelivr.net"].includes(s.host) && e.respondWith(
      caches.open(`offline${n}`).then(async (t) => {
        try {
          const p = await fetch(e.request);
          return t.put(e.request, p.clone()), p;
        } catch (p) {
          const c = await t.match(e.request);
          if (c)
            return c;
          throw p;
        }
      })
    );
  }
});
