import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from './styles/global';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyle />
  </React.StrictMode>
);

// Registra o service worker e força atualização automática
serviceWorker.register({
  onUpdate: registration => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      registration.waiting.addEventListener('statechange', e => {
        if (e.target.state === 'activated') {
          window.location.reload();
        }
      });
    }
  }
});

