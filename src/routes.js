import React, { useEffect } from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route} from 'react-router-dom';

import Calculadora from "./pages/Calculadora";
import maintenance from "./pages/maintenance";
import Protocolo from "./pages/Protocolo";
import asmaticos from "./pages/Protocolo/protocolos/asmaticos";
import pacientesInsuficiencia from "./pages/Protocolo/protocolos/pacientes-insuficiencia";
import porcentagens from "./pages/Porcentagens";
import Pedidos from "./pages/Pedidos";
import PWAFeatures from './components/PWAFeatures';
import PWAInstallButton from './components/PWAInstallButton';
import MobileNavbar from './components/MobileNavbar';
import './App.css';

function Routes() {
  function getBackgroundClass(location) {
    return 'calculadora';
  }

  useEffect(() => {
    const body = document.querySelector('body');
    const className = getBackgroundClass(window.location);
    if (className) {
      body.classList.add(className);
    }
    return () => {
      if (className) {
        body.classList.remove(className);
      }
    };
  }, []);

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <div className="app" style={{ paddingBottom: 70 }}>
        <PWAInstallButton />
        <PWAFeatures />
        <LocationAwareApp />
        <MobileNavbar />
      </div>
    </BrowserRouter>
  );
}

function LocationAwareApp() {
  return (
    <div className="content">
      <RouterRoutes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/maintenance" element={React.createElement(maintenance)} />
        <Route path="/protocolos" element={<Protocolo />} />
        <Route path="/asmaticos" element={React.createElement(asmaticos)} />
        <Route path="/pacientesInsuficiencia" element={React.createElement(pacientesInsuficiencia)} />
        <Route path="/porcentagens" element={React.createElement(porcentagens)} />
        <Route path="/pedidos" element={<Pedidos />} />
      </RouterRoutes>
    </div>
  );
}

export default Routes;
