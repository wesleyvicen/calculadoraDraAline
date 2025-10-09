// Workbox configuration for advanced PWA features
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';

// Cleanup old caches
cleanupOutdatedCaches();

// Precache static assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache Google Fonts
registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
              url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts',
  })
);

// Cache Font Awesome
registerRoute(
  ({ url }) => url.origin === 'https://use.fontawesome.com',
  new CacheFirst({
    cacheName: 'font-awesome',
  })
);

// Cache API calls (se houver)
registerRoute(
  ({ url }) => url.pathname.startsWith('/api/'),
  new NetworkFirst({
    cacheName: 'api-cache',
    networkTimeoutSeconds: 3,
  })
);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
  })
);