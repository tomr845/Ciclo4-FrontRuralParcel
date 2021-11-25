import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class registrarTerreno extends Component {
  render() {
    return (
      <div>
        <div className="colorNavbar">
          <nav className="navbar navbar-expand-lg container navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand configTitulo" to="/inicio">RuralParcel</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link configTituloRegistrarTerreno" to="/registrar-terreno">Registrar un terreno</Link>
                  </li>
                </ul>
                <form className="col-lg-6">
                  <button className="btn btn-outline-success configBotonBuscar" type="submit">Buscar</button>
                  <input className="form-control configBuscar" type="search" placeholder="Buscar nuevos terrenos"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default registrarTerreno