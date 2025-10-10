// Adiciona suporte a SKIP_WAITING para atualização automática do PWA
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
