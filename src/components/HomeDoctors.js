import React, {Component} from 'react'
import logo from "./img/logo.png";


class HomeDoctors extends Component { 
    render(){
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">
                        <h1>Medical Appointment System</h1>
                            
                            <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/showDoctors">Doctores Registrados</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/createDoctor">Registrar un nuevo Doctor</a>
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
                            <h4> Doctores Registrados en el Sistema de Citas Médicas </h4>
                                <img src={logo} height="205px" />
                            </p>
                            </div>
                            </p>
                            <br />
                            <div class="row">
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">¿No tiene una cuenta? Cree una.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Registro de Doctores</h5>
                                <p class="card-text text-white text-center">Al hacer clic en Registrarte, aceptas las Condiciones de la Clínica. </p>
                                <a href="/createDoctor" class="btn btn-secondary d-grid gap-2 col-6 mx-auto ">Registrarte</a>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">Verificar Doctores Registrados.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Tabla de Registros</h5>
                                <p class="card-text text-white text-center">Ir a datos de Doctores almacenados en el sistema.</p>
                                <a href="/showDoctors" class="btn btn-secondary d-grid gap-2 col-6 mx-auto "> Verificar</a>
                            </div>
                            </div>
                            </div>

                            </div>

                </div>
            </div>
        );
    }

}

export default HomeDoctors