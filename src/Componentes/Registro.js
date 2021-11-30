import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import appConfig from '../appConfig'

export class Registro extends Component {

    constructor(props){
        //Superclase del constructor
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        //Definicion del estado del componente
        this.state = {
            txtCedula: '',
            txtNombre: '',
            txtCorreo: '',
            txtContrasena: '',
            txtTelefono: '',
        }

    }


    async handleClick(){
        let response = await axios.post(appConfig.urlBase + 'registrar-usuario', this.state);

        if(response.data == 200) {
            alert('registro satisfactorio');
            window.location.href = "/login";
        } else {
            alert(response.data);
        }
    }


    async handleChange(e){
        if(e.target.name == 'txtCedula') {
            await this.setState({
                txtCedula: e.target.value,
            })

        } else if (e.target.name == 'txtNombre'){
            await this.setState({
                txtNombre: e.target.value,
            })

        } else if (e.target.name == 'txtCorreo'){
            await this.setState({
                txtCorreo: e.target.value,
            })

        } else if (e.target.name == 'txtContrasena'){
            await this.setState({
                txtContrasena: e.target.value,
            })

        } else if (e.target.name == 'txtTelefono'){
            await this.setState({
                txtTelefono: e.target.value,
            })
        }

        //ver lo que esta recibiendo los inputs
        //console.log(this.state)

    }


    render() {
        return (
            <div>
                <div className="card configLogin">
                    <div className="configTituloLogin">
                        <h1 className="card-header configTextLogin">RuralParcel</h1>
                    </div>
                    <div className="card-body centerCamposRegistro">
                        <form>
                            <div class="modal-header row col-lg border-light">
                                <div class="form row col-lg-12">
                                    <div class="form-group col-lg-6">
                                        <label class="form-label">Cédula</label>
                                        <input type="text" class="form-control inputConfigRegistro" id="cedula" name="txtCedula" aria-describedby="emailHelp" placeholder="Ingrese su cédula" onChange={this.handleChange}/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control inputConfigRegistro" id="nombreCompleto" name="txtNombre" placeholder="Ingrese su nombre completo" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div class="form row col-lg-12">
                                    <div class="form-group col-lg-6">
                                        <label class="form-label labelConfigRegistro">Correo Electrónico</label>
                                        <input type="email" class="form-control inputConfigRegistro" id="email" aria-describedby="emailHelp" name="txtCorreo" placeholder="Ingrese su correo electrónico" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label class="form-label labelConfigRegistro">Contraseña</label>
                                        <input type="password" class="form-control inputConfigRegistro" id="password" name="txtContrasena" placeholder="Ingrese su contraseña" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div class="form row col-lg-12">
                                    <div class="form-group col-lg-6">
                                        <label class="form-label labelConfigRegistro">Número telefónico</label>
                                        <input type="text" class="form-control inputConfigRegistro" id="numeroTelefonico" name="txtTelefono" placeholder="Ingrese su número de teléfono" onChange={this.handleChange}/>
                                    </div>
                                </div>
                                <div className="centerAling">
                                    <Link  class="btn-primary btn configBotonRegistro" onClick={this.handleClick}>Crear cuenta</Link>
                                    <Link  class="btn-outline-danger btn configBotonRegistro" to="/">Cancelar</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registro
