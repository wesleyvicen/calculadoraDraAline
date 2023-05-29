import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import home from "./pages/Calculadora";
import maintenance from "./pages/maintenance"
import protocolo from "./pages/Protocolo"
import asmaticos from "./pages/Protocolo/protocolos/asmaticos"
import pacientesInsuficiencia from "./pages/Protocolo/protocolos/pacientes-insuficiencia"
import taxas from "./pages/Taxas"

import Calculadora from './pages/Calculadora';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={home}/>
        <Route path={'/calculadora'} component={Calculadora}/>
        <Route path={'/maintenance'} component={maintenance}/>
        <Route path={'/protocolos'} component={protocolo}/>
        <Route path={'/asmaticos'} component={asmaticos}/>
        <Route path={'/pacientesInsuficiencia'} component={pacientesInsuficiencia}/>
        <Route path={'/porcentagens'} component={taxas}/>

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
