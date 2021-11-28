import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class registrarTerreno extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark">
          <nav className="navbar navbar-expand-lg container navbar-dark bg-dark">
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
                  <button className="btn btn-success configBotonBuscar" type="submit">Buscar</button>
                  <input className="form-control configBuscar" type="search" placeholder="Buscar nuevos terrenos"/>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="container espacioRegistrarTerreno">
          <form>
            <div className="mb-3">
              <label className="form-label configText">Cantidad de Hectáreas</label>
              <input type="text" className="form-control border" id="cantidadHectareas" aria-describedby="emailHelp" placeholder="Digite la cantidad de hectáreas"/>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Ubicación del terreno</label>
              <select className="form-select border" aria-label="Default select example">
                <option value="null" hidden selected>Seleccione la ubicación del terreno</option>
                <option value="1">Neiva</option>
                <option value="2">Bogotá</option>
                <option value="3">Antioquia</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Nombre del dueño de la tierra</label>
              <input type="text" className="form-control border" id="duenioTierra" placeholder="Digite el nombre del dueño de la tierra"/>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Sistema de riego</label>
              <select className="form-select border" aria-label="Default select example">
                <option value="null" hidden selected>Seleccione el sistema de riego</option>
                <option value="1">Goteo</option>
                <option value="2">Bombeo</option>
                <option value="3">Gravedad</option>
                <option value="4">Asperción</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Especificaciones del terreno</label>
              <textarea className="form-control border" rows="3" placeholder="Digite las especificaciones del terreno" id="especificacionTerreno"></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label configText">Seleccione las imagenes de sus terreno</label>
              <input class="form-control border" type="file" id="formFile" placeholder="Seleccione las imagenes"/>
            </div>
            <div className="mb-3">
              <label className="form-label configText">¿Desea arrendar o vender?</label>
              <select className="form-select border" aria-label="Default select example">
                <option value="null" hidden selected>Seleccione alguna opción</option>
                <option value="1">Arrendar</option>
                <option value="2">Venta</option>
              </select>
            </div>
            <div className="centerAling">
              <Link type="button" className="btn btn-primary botonCofigCrear" to="inicio">Crear</Link>
            </div>
          </form>
          // -------------------------------------------------------
          // El LINK ES PARA DIRECCIONAR
          // LO QUE HACE EL "to" es para navegar
          // -------------------------------------------------------
        </div>
      </div>
    )
  }
}



export default registrarTerreno