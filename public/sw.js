const CACHE_VERSION = "v3";
const STATIC_CACHE = `static-${CACHE_VERSION}`;
const IMAGE_CACHE = `images-${CACHE_VERSION}`;
const FONT_CACHE = `fonts-${CACHE_VERSION}`;

// Core app shell to pre-cache on install
const PRECACHE_URLS = ["/", "/about", "/technology", "/team", "/contact"];

// Max entries for image cache (LRU eviction)
const IMAGE_CACHE_MAX = 120;

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) =>
      cache.addAll(PRECACHE_URLS).catch(() => { })
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Delete old caches
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter(
              (k) =>
                k !== STATIC_CACHE &&
                k !== IMAGE_CACHE &&
                k !== FONT_CACHE
            )
            .map((k) => caches.delete(k))
        )
      ),
    ])
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin GET requests
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  const path = url.pathname;

  // Fonts — cache-first, long TTL
  if (/\.(woff2?|otf|ttf)(\?.*)?$/.test(path)) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  // Static media (images, videos) — cache-first
  if (/\.(webp|png|jpe?g|gif|svg|avif|mp4|webm|ico)(\?.*)?$/.test(path)) {
    event.respondWith(cacheFirstWithLimit(request, IMAGE_CACHE, IMAGE_CACHE_MAX));
    return;
  }

  // Next.js static chunks — network-first to avoid stale client bundles causing hydration mismatches
  if (path.startsWith("/_next/static/")) {
    event.respondWith(networkFirst(request, STATIC_CACHE));
    return;
  }

  // HTML pages — network-first with cache fallback
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(networkFirst(request, STATIC_CACHE));
    return;
  }
});

// ─── Strategies ─────────────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

async function cacheFirstWithLimit(request, cacheName, maxEntries) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
    // Evict oldest entries beyond the limit
    const keys = await cache.keys();
    if (keys.length > maxEntries) {
      await Promise.all(keys.slice(0, keys.length - maxEntries).map((k) => cache.delete(k)));
    }
  }
  return response;
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    return cached ?? new Response("Offline", { status: 503 });
  }
}

