import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Inicio from './Componentes/Inicio';
import Login from './Componentes/Login';
import RegistrarTerreno from './Componentes/RegistrarTerreno';

function App() {
  return (
    <Router>
      <Route path="/inicio" component={Inicio} />
      <Route path="/registrar-terreno" exact component={RegistrarTerreno} />
      <Route path="/" exact component={Login} />
    </Router>
  )
}

export default App;

