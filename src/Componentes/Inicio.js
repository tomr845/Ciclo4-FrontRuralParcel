import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Inicio extends Component {
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



      <div className="container">
        <div className="row configCards">
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 1
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p className="card-text">Dueño 1</p>
                <p className="card-text">Hectareas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 2
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p className="card-text">Dueño 2</p>
                <p className="card-text">Hectareas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 3
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p className="card-text">Dueño 3</p>
                <p className="card-text">Hectareas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row configCards">
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 4 
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5> 
                <p className="card-text">Dueño 4</p>
                <p className="card-text">Hectareas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 5
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p className="card-text">Dueño 5</p>
                <p className="card-text">Hectareas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Terreno 6
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p className="card-text">Dueño 6</p>
                <p className="card-text">Hectáreas</p>
                <p className="card-text">Ubicación</p>
                <p className="card-text">Descripción</p>
                <p className="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="modalEdit" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Actualizar datos</h5>
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Actualizar</button>
              <button type="button" className="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalDelete" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <h5 className="tituloModalEliminar" id="exampleModalLabel">Eliminar terreno</h5>
            <div className="text-center configTextEliminar">
              ¿Desea ELIMINAR este terreno?
            </div>
            <div className="text-center border-light">
              <div className="card-body">
                <button type="button" className="btn btn-danger configBotonConfirmar" data-bs-dismiss="modal">Confirmar</button>
                <button type="button" className="btn btn-primary configBotonCancelar">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Inicio
