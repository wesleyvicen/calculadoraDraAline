import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from './styles/global';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <Routes/>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);

// Registrar o service worker para funcionalidade offline
serviceWorker.register();

