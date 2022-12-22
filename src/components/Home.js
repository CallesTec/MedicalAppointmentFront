import React, { Component, useEffect, useState } from 'react'
import Cards from './Cards';

class Home extends Component {
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            <h1>Medical Appointment System</h1>
          </p>
        </div>
        <br />
        <div className='card card-body bg-dark container d-flex justify-content-center '>
                            <p class="bg-dark text-center  text-white text-secondary " >
                            En un sistema de salud donde las personas tienen que esperar meses para asistir a una cita médica con algunos especialistas, los médicos tienden a no contar con un automatismo que beneficie a su mejor desempeño, evitar aglomeraciones y convertir las dificultades en oportunidades.<br />
                            A esto añadámosle las citas médicas que no son atendidas, de inmediato se piensa en la necesidad de un sistema que gestione todos los escenarios anteriormente descritos. <br />
                            Las Citas médicas perdidas son un gran problema para la eficiencia del sistema de salud. Limitan el acceso a los servicios médicos de otros pacientes y perjudican la rentabilidad económica de los prestadores médicos y del sistema en general.
                            Registrar diagnóstico o llevar récord de pacientes de forma ordenada cronológicamente.

          </p>
         </div>
         <br />
         <Cards />
      </div>
    );
  }

}

export default Home