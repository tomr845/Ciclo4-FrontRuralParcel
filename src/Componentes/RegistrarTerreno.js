import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import appConfig from '../appConfig'

export class registrarTerreno extends Component {

  constructor(props){
    //Superclase del constructor
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    //Definicion del estado del componente
    this.state = {
        txtCantidadHectareas: '',
        cmbUbicacion: '',
        txtNombrePropietario: '',
        cmbSistemaRiego: '',
        txtDescripcion: '',
        cmbTipoServicio: ''

    }

  }

  async handleClick(){

    let response = await axios.post(appConfig.urlBase + 'registrar-parcela', this.state);

    if(response.data == 'OK') {
        alert('Terreno registrado satisfactoriamente!');
        window.location.href = "/inicio";
    } else {
        alert('Ah ocurrido un error, intentelo nuevamente');
        window.location.href = "/registrar-terreno";
    }

  }


  async handleChange(e){

    if(e.target.name == 'txtCantidadHectareas') {
      await this.setState({
          txtCantidadHectareas: e.target.value,
      })

    } else if(e.target.name == 'cmbUbicacion') {
      await this.setState({
          cmbUbicacion: e.target.value,
      })

    } else if(e.target.name == 'txtNombrePropietario') {
      await this.setState({
          txtNombrePropietario: e.target.value,
      })

    } else if(e.target.name == 'cmbSistemaRiego') {
      await this.setState({
          cmbSistemaRiego: e.target.value,
      })

    } else if(e.target.name == 'txtDescripcion') {
      await this.setState({
          txtDescripcion: e.target.value,
      })
      
    } else if(e.target.name == 'cmbTipoServicio') {
      await this.setState({
          cmbTipoServicio: e.target.value,
      })
      
    }

    //ver lo que esta recibiendo los inputs
    //console.log(this.state)

  }


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
                <Link className="btn btn-danger configBotonBuscar" type="submit" to="/">Cerrar Sesión</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="container espacioRegistrarTerreno">
          <form>
            <div className="mb-3">
              <label for="cantidadHectareas" className="form-label configText">Cantidad de Hectáreas</label>
              <input type="text" className="form-control border" id="cantidadHectareas" name="txtCantidadHectareas" aria-describedby="emailHelp" placeholder="Digite la cantidad de hectáreas" onChange={this.handleChange} / >
            </div>
            <div className="mb-3">
              <label className="form-label configText">Ubicación del terreno</label>
              <select className="form-select border" name="cmbUbicacion" aria-label="Default select example" onChange={this.handleChange}>
                <option value="null" hidden selected>Seleccione la ubicación del terreno</option>
                <option value="Garzón">Garzon</option>
                <option value="Campoalegre">Campoalegre</option>
                <option value="La Plata">La Plata</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Nombre del dueño de la tierra</label>
              <input type="text" className="form-control border" id="duenioTierra" name="txtNombrePropietario" placeholder="Digite el nombre del dueño de la tierra" onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Sistema de riego</label>
              <select className="form-select border" name="cmbSistemaRiego" aria-label="Default select example" onChange={this.handleChange}>
                <option value="null" hidden selected>Seleccione el sistema de riego</option>
                <option value="Goteo">Goteo</option>
                <option value="Bombeo">Bombeo</option>
                <option value="Gravedad">Gravedad</option>
                <option value="Asperción">Asperción</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label configText">Especificaciones del terreno</label>
              <textarea className="form-control border" rows="3" placeholder="Digite las especificaciones del terreno" id="especificacionTerreno" name="txtDescripcion" onChange={this.handleChange}></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label configText">Seleccione las imagenes de sus terreno</label>
              <input class="form-control border" type="file" id="formFile" placeholder="Seleccione las imagenes"/>
            </div>
            <div className="mb-3">
              <label className="form-label configText">¿Desea arrendar o vender?</label>
              <select className="form-select border" name="cmbTipoServicio" aria-label="Default select example" onChange={this.handleChange}>
                <option value="null" hidden selected>Seleccione alguna opción</option>
                <option value="Arrendar">Arrendar</option>
                <option value="Vender">Vender</option>
              </select>
            </div>
            <div className="centerAling">
              <Link type="button" className="btn btn-primary botonCofigCrear" onClick={this.handleClick}>Crear</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}



export default registrarTerreno