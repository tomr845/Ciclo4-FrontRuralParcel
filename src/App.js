import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  render(){
    return <div>
      <div class="colorNavbar">
        <nav class="navbar navbar-expand-lg container navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand configTitulo" href="/">RuralParcel</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link configTituloRegistrarTerreno" href="/">Registrar un terreno</a>
                </li>
              </ul>
              <form class="col-lg-6">
                <button class="btn btn-outline-success configBotonBuscar" type="submit">Buscar</button>
                <input class="form-control configBuscar" type="search" placeholder="Buscar nuevos terrenos"/>
              </form>
            </div>
          </div>
        </nav>
      </div>



      <div class="container">
        <div class="row configCards">
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 1
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p class="card-text">Dueño 1</p>
                <p class="card-text">Hectareas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 2
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p class="card-text">Dueño 2</p>
                <p class="card-text">Hectareas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 3
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p class="card-text">Dueño 3</p>
                <p class="card-text">Hectareas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row configCards">
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 4 
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5> 
                <p class="card-text">Dueño 4</p>
                <p class="card-text">Hectareas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 5
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p class="card-text">Dueño 5</p>
                <p class="card-text">Hectareas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <img src="https://images.pexels.com/photos/4406619/pexels-photo-4406619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Terreno 6
                  <svg data-bs-toggle="modal" data-bs-target="#modalDelete" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-trash-fill configBotonDelete" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                  </svg>
                  <svg data-bs-toggle="modal" data-bs-target="#modalEdit" type="button" href="/"  xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-pencil-square configBotonEdit" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
                </h5>
                <p class="card-text">Dueño 6</p>
                <p class="card-text">Hectáreas</p>
                <p class="card-text">Ubicación</p>
                <p class="card-text">Descripción</p>
                <p class="card-text">Sistema de riego</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="modal fade" id="modalEdit" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Actualizar datos</h5>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Actualizar</button>
              <button type="button" class="btn btn-danger">Cancelar</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalDelete" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <h5 class="tituloModalEliminar" id="exampleModalLabel">Eliminar terreno</h5>
            <div class="text-center configTextEliminar">
              ¿Desea ELIMINAR este terreno?
            </div>
            <div class="text-center border-light">
              <div class="card-body">
                <button type="button" class="btn btn-danger configBotonConfirmar" data-bs-dismiss="modal">Confirmar</button>
                <button type="button" class="btn btn-primary configBotonCancelar">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default App;
