import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import appConfig from '../appConfig'

export class login extends Component {

    constructor(props){
        //Superclase del constructor
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        //Definicion del estado del componente
        this.state = {
            txtCorreo: '',
            txtContrasena: ''
        }

    }

    async handleClick(){
        let response = await axios.post(appConfig.urlBase + 'credenciales', this.state);
        if(response.data.length != 1) {
            window.location.href = "/inicio";
        } else {
            alert('Correo y/o contraseña incorrecta');
        }
    }

    async handleChange(e){
        if(e.target.name == 'txtCorreo') {
            await this.setState({
                txtCorreo: e.target.value,
            })
        } else {
            await this.setState({
                txtContrasena: e.target.value,
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
                    <div className="card-body configCamposLogin">
                        <form>
                            <div class="mb-3">
                                <label class="form-label textLoginLabel">Correo Electrónico</label>
                                <input type="email" class="form-control textLoginInput" id="email" name="txtCorreo" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico" onChange={this.handleChange}/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label textLoginLabel">Contraseña</label>
                                <input type="password" class="form-control textLoginInput" id="password" name="txtContrasena" placeholder="Ingrese su contraseña" onChange={this.handleChange}/>
                            </div>
                            <div className="centerAling">
                                <Link type="button" onClick={this.handleClick} class="btn btn-primary configBotonIngresar" value="iniciar-sesion">Iniciar Sesión</Link>
                                <Link  class="btn-outline-success btn configRegistro" to="registrar-usuario">Registrarme</Link>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default login

