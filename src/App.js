import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Login from './Componentes/Login';
import RegistrarTerreno from './Componentes/RegistrarTerreno';
import Registro from './Componentes/Registro';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/inicio" component={Inicio} />
      <Route path="/registrar-usuario" exact component={Registro} />
      <Route path="/registrar-terreno" exact component={RegistrarTerreno} />
    </Router>
  )
}

export default App;

