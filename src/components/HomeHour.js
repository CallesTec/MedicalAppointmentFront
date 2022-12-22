import React, {Component} from 'react'
import logo from "./img/logo.png";


class HomeHour extends Component { 
    render(){
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">
                        <h1>Medical Appointment System</h1>
                            
                            <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/showHour">Horarios de Atención Registrados</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/createHour">Registrar un nuevo horario de servicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/">Regresar</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </nav>
                            <br />
                            <div className='card bg-dark card-body '>
                            <p class="text-white" >
                            <h4> Horarios de Servicio en el Sistema de Citas Médicas </h4>
                                <img src={logo} height="205px" />
                            </p>
                            </div>
                            </p>
                            <br />
                            <div class="row">
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">¿No tiene un horario de servicio adecuado? Cree uno.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Registro de Horarios de Servicio</h5>
                                <p class="card-text text-white text-center">Al hacer clic en Registro de Horarios de Servicio, aceptas las Condiciones de la Clínica. </p>
                                <a href="/createHour" class="btn btn-secondary d-grid gap-2 col-6 mx-auto ">Registro</a>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">Verificar Horarios de Servicio Registrados.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Tabla de Horarios de Servicio Registrados</h5>
                                <p class="card-text text-white text-center">Ir a datos de Horarios dde Servicio almacenados en el sistema.</p>
                                <a href="/showHour" class="btn btn-secondary d-grid gap-2 col-6 mx-auto "> Verificar</a>
                            </div>
                            </div>
                            </div>

                            </div>

                </div>
            </div>
        );
    }

}

export default HomeHour