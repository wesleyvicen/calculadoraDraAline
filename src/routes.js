import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Calculadora from "./pages/Calculadora";
import maintenance from "./pages/maintenance";
import Protocolo from "./pages/Protocolo";
import asmaticos from "./pages/Protocolo/protocolos/asmaticos";
import pacientesInsuficiencia from "./pages/Protocolo/protocolos/pacientes-insuficiencia";
import porcentagens from "./pages/Porcentagens";
import PWAFeatures from './components/PWAFeatures';
import PWAInstallButton from './components/PWAInstallButton';
import './App.css';

function Routes() {
  function getBackgroundClass(location) {
    switch (location.pathname) {
      case '/':
        return 'calculadora';
      case '/maintenance':
        return 'maintenance';
      case '/porcentagens':
        return 'porcentagens';
      default:
        return '';
    }
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.add(getBackgroundClass(window.location));
    return () => {
      body.classList.remove(getBackgroundClass(window.location));
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <PWAInstallButton />
        <PWAFeatures />
        <LocationAwareApp />
      </div>
    </BrowserRouter>
  );
}

function LocationAwareApp() {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Calculadora} />
        <Route path="/calculadora" component={Calculadora} />
        <Route path="/maintenance" component={maintenance} />
        <Route path="/protocolos" component={Protocolo} />
        <Route path="/asmaticos" component={asmaticos} />
        <Route path="/pacientesInsuficiencia" component={pacientesInsuficiencia} />
        <Route path="/porcentagens" component={porcentagens} />
      </Switch>
    </div>
  );
}

export default Routes;
