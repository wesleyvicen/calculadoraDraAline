import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import home from "./pages/Calculadora";
import maintenance from "./pages/maintenance";
import protocolo from "./pages/Protocolo";
import asmaticos from "./pages/Protocolo/protocolos/asmaticos";
import pacientesInsuficiencia from "./pages/Protocolo/protocolos/pacientes-insuficiencia";
import porcentagens from "./pages/Porcentagens";
import './App.css';

import Calculadora from './pages/Calculadora';

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
        <LocationAwareApp />
      </div>
    </BrowserRouter>
  );
}

function LocationAwareApp() {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/calculadora" component={Calculadora} />
        <Route path="/maintenance" component={maintenance} />
        <Route path="/protocolos" component={protocolo} />
        <Route path="/asmaticos" component={asmaticos} />
        <Route path="/pacientesInsuficiencia" component={pacientesInsuficiencia} />
        <Route path="/porcentagens" component={porcentagens} />
      </Switch>
    </div>
  );
}

export default Routes;
