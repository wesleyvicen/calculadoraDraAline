import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from './styles/global';
import Routes from './routes'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyle />
  </React.StrictMode>
);

