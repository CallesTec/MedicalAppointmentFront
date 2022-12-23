import React, {Component} from 'react'
import logo from "./img/logo.png";


class HomePatient extends Component { 
    render(){
        return(
            <div className="app container">
                <div className="jumbotron">
                    <p className="lead text-center">
                        <h1>Medical Appointment System</h1>
                            
                            <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/show">Pacientes Registrados</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/create">Registrarse</a>
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
                            <h4> Usuarios del Sistema de Citas Médicas </h4>
                                <img src={logo} height="205px" alt="logo patient"/>
                            </p>
                            </div>
                            </p>
                            <br />
                            <div class="row">
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">¿No tiene una cuenta? Cree una.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Registro de Usuario</h5>
                                <p class="card-text text-white text-center">Al hacer clic en Registrarte, aceptas las Condiciones. </p>
                                <a href="/create" class="btn btn-secondary d-grid gap-2 col-6 mx-auto ">Registrarte</a>
                            </div>
                            </div>
                            </div>
                            <div class="col-sm-6">
                            <div class="card bg-dark">
                            <h4 class="card-header text-white text-center">Verificar Pacientes Registrados.</h4>
                            <div class="card-body">
                                <h5 class="card-title text-white text-center">Ir a Tabla de Registros</h5>
                                <p class="card-text text-white text-center">Verifica tus datos ingresados al sistema.</p>
                                <a href="/show" class="btn btn-secondary d-grid gap-2 col-6 mx-auto ">Ir a datos de Usuarios</a>
                            </div>
                            </div>
                            </div>
                            </div>

                </div>
            </div>
        );
    }

}

export default HomePatient