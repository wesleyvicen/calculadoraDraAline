import React from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';

import home from "./pages/Calculadora";
import maintenance from "./pages/maintenance";
import protocolo from "./pages/Protocolo";
import asmaticos from "./pages/Protocolo/protocolos/asmaticos";
import pacientesInsuficiencia from "./pages/Protocolo/protocolos/pacientes-insuficiencia";
import taxas from "./pages/Taxas";
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

  return (
    <BrowserRouter>
      <LocationAwareApp getBackgroundClass={getBackgroundClass} />
    </BrowserRouter>
  );
}

function LocationAwareApp({ getBackgroundClass }) {
  const location = useLocation();

  return (
    <div className="app">
      <div className={`background ${getBackgroundClass(location)}`} />
      <div className="content">
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/calculadora" component={Calculadora} />
          <Route path="/maintenance" component={maintenance} />
          <Route path="/protocolos" component={protocolo} />
          <Route path="/asmaticos" component={asmaticos} />
          <Route path="/pacientesInsuficiencia" component={pacientesInsuficiencia} />
          <Route path="/porcentagens" component={taxas} />
        </Switch>
      </div>
    </div>
  );
}

export default Routes;
