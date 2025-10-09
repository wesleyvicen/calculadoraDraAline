// Custom Service Worker para PWA offline
const CACHE_NAME = 'calculadora-dra-aline-v1';
const STATIC_CACHE_NAME = 'calculadora-static-v1';
const DYNAMIC_CACHE_NAME = 'calculadora-dynamic-v1';

// Recursos para cache offline
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

// Instalar o Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Installing');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch(err => {
        console.log('Service Worker: Cache failed', err);
      })
  );
  
  // Ativar o novo service worker imediatamente
  self.skipWaiting();
});

// Ativar o Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Remover caches antigos
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Service Worker: Clearing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Controlar todas as abas abertas
  self.clients.claim();
});

// Interceptar requisições de rede
self.addEventListener('fetch', event => {
  // Estratégia Cache First para recursos estáticos
  if (event.request.url.includes('/static/') || 
      event.request.url.includes('.js') || 
      event.request.url.includes('.css') ||
      event.request.url.includes('.png') ||
      event.request.url.includes('.ico')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Retorna do cache se disponível
          if (response) {
            return response;
          }
          
          // Senão, busca da rede e adiciona ao cache
          return fetch(event.request)
            .then(response => {
              const responseClone = response.clone();
              caches.open(STATIC_CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseClone);
                });
              return response;
            });
        })
        .catch(() => {
          // Fallback para recursos offline
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        })
    );
  }
  // Estratégia Network First para páginas HTML
  else if (event.request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Salva a resposta no cache dinâmico
          const responseClone = response.clone();
          caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseClone);
            });
          return response;
        })
        .catch(() => {
          // Se offline, retorna do cache
          return caches.match(event.request)
            .then(response => {
              if (response) {
                return response;
              }
              // Fallback para página inicial
              return caches.match('/');
            });
        })
    );
  }
  // Para outras requisições, deixa o comportamento padrão
  else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  }
});

// Notification para updates do app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});