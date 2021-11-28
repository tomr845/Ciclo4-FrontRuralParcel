import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class login extends Component {
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
                                <input type="email" class="form-control textLoginInput" id="email" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico"/>
                            </div>
                            <div class="mb-3">
                                <label class="form-label textLoginLabel">Contraseña</label>
                                <input type="password" class="form-control textLoginInput" id="password" placeholder="Ingrese su contraseña"/>
                            </div>
                            <div className="centerAling">
                                <Link type="button" class="btn btn-primary configBotonIngresar" to="inicio">Iniciar Sesión</Link>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default login

