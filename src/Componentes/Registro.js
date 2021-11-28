import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Registro extends Component {
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
                                        <label class="form-label">Nombre Completo</label>
                                        <input type="text" class="form-control inputConfigRegistro" id="nombreCompleto" placeholder="Ingrese su nombre completo"/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label class="form-label">Número telefónico</label>
                                        <input type="text" class="form-control inputConfigRegistro" id="nombreCompleto" placeholder="Ingrese su número de teléfono"/>
                                    </div>
                                </div>
                                <div class="form row col-lg-12">
                                    <div class="form-group col-lg-6">
                                        <label class="form-label labelConfigRegistro">Correo Electrónico</label>
                                        <input type="email" class="form-control inputConfigRegistro" id="email" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico"/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label class="form-label labelConfigRegistro">Contraseña</label>
                                        <input type="password" class="form-control inputConfigRegistro" id="password" placeholder="Ingrese su contraseña"/>
                                    </div>
                                </div>
                                <div className="centerAling">
                                    <Link  class="btn-primary btn configBotonRegistro" to="registrar-usuario">Crear cuenta</Link>
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
