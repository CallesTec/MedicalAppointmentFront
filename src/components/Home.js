import React, { Component, useEffect, useState } from 'react'
import doctor1 from './img/1.jpg';

class Home extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            <h1>Medical Appointment System</h1>
          </p>
        </div>


        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/show">Patients</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/showDoctors">Doctors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/showAppointment">Appointments</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/showHour">Schedules</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" href="/showClinics">Clinics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/showDiagnostic">Diagnostic</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

        <br />
        <br />


        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={doctor1} height='500px' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src='' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <br />
        <p class="lh-1">
          En un sistema de salud donde las personas tienen que esperar meses para asistir a una cita médica con algunos especialistas, los médicos tienden a no contar con un automatismo que beneficie a su mejor desempeño, evitar aglomeraciones y convertir las dificultades en oportunidades.
          A esto añadámosle las citas médicas que no son atendidas, de inmediato se piensa en la necesidad de un sistema que gestione todos los escenarios anteriormente descritos.
          Las Citas médicas perdidas son un gran problema para la eficiencia del sistema de salud. Limitan el acceso a los servicios médicos de otros pacientes y perjudican la rentabilidad económica de los prestadores médicos y del sistema en general.
          Registrar diagnóstico o llevar récord de pacientes de forma ordenada cronológicamente.
        </p>


      </div>
    );
  }

}

export default Home