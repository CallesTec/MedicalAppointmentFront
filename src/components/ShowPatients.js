//EC:       , {useEffect, useState}
import React, { useEffect, useState } from 'react'
import axios from 'axios' //EC:

import { Link } from 'react-router-dom' //EC: Link from React Route
import { endpoint, getAllPatients } from '../shared/services'

const ShowPatients = () => {
  //Hook: var       varfunction     start in: []  (EC)
  const [patients, setPatients] = useState([])

  //Hook: effect, do something after rendering (EC)
  useEffect(() => {
    getAllPatients().then((response) => {
      setPatients(response);
    })
  }, [])//Stop infinite bucle



  const deletePatient = async (id) => {
    await axios.delete(`${endpoint}/patients/${id}`)
    getAllPatients()
  }

  return (
    <div className='app container'>
       <p className="lead text-center">
        <h1>Medical Appointment System</h1>
        </p>
      <div className='d-grid gap-2'>
        
      <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/homePatient">Menú de Pacientes</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/create">Registrarse</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </nav>
            
                            <br />

                        <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                            <div class="card-body bg-dark">
                                <h5 class="card-title text-white text-center">Reserva cita médica</h5>
                                <p class="card-text text-white">Toma en cuenta que este nuevo servicio de cita en línea contempla, por el momento, solo reserva de cupo en el Banco de Sangre del Hospital Médico Quirúrgico (San Salvador).</p>
                                
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                            <div class="card-body bg-dark">
                                <h5 class="card-title text-white text-center"> En el proceso de su reserva deberá ingresar los siguientes datos: </h5>
                                <p class="card-text text-white">Nombre completo del paciente, Correo electrónico, Número de teléfono de contacto del paciente, Direccion del paciente, Número de DUI del paciente y la Edad del paciente</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <br />


        <table className='table table-striped bg-dark text-white '>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Telefono</th>
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className='text-white'> {patient.patFirstName} </td>
                <td className='text-white' > {patient.patLastName} </td>
                <td className='text-white'  > {patient.patPhoneNumber} </td>
                <td className='text-white' > {patient.patEmail} </td>
                <td className='text-white' >
                  <Link to={`/edit/${patient.id}`} className='btn btn-warning mx-2'>Editar</Link>
                  <button onClick={() => deletePatient(patient.id)} className='btn btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowPatients