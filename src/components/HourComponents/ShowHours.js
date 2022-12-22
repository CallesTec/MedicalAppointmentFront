//EC:       , {useEffect, useState}
import React, { useEffect, useState } from 'react'
import axios from 'axios' //EC:

import { Link } from 'react-router-dom' //EC: Link from React Route

import {
  endpoint,
  getAllDoctors,
  getAllClinics,
  getAllHours
} from "../../shared/services";
//EC: create a basic route ta access the API

const ShowHours = () => {
  
  const [hours, setHours] = useState([])
  const [doctor, setDoctor] = useState([])
  const [clinics, setClinics] = useState([])


  useEffect(() => {
    getAllHours().then((response) => {
      setHours(response);
    });
    getAllClinics().then((response) => {
      setClinics(response);
    });
    getAllDoctors().then((response) => {
      setDoctor(response);
    });

  }, [])



  const deleteHour = async (id) => {
    await axios.delete(`${endpoint}/clidrhours/${id}`)
    getAllHours()
  }

  return (
    <div className='app container' >
       <p className="lead text-center">
        <h1>Medical Appointment System</h1>
        </p>
      <div className='d-grid gap-2'>
        
      <nav class=" navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand text-white" href="/homeHour">Menú de Horarios</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="/createHour">Registrarse</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>

        <br />
        <table className=' bg-dark table table-striped'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Clinica</th>
              <th>Doctor</th>
              <th>Hora Inicio</th>
              <th>Hora Salida</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hours.map((hour) => (
              <tr key={hour.id}>
                <td className='text-white'  > {clinics.map((clinics) => {
                  if (clinics.id === hour.clinic_id) {
                    return clinics.cliName;
                  }
                })} </td>
                <td className='text-white'  > {doctor.map((doctor) => {
                  if (doctor.id === hour.doctor_id) {
                    return doctor.drFirstName;
                  }
                })} </td>
                <td className='text-white' > {hour.startHour} </td>
                <td  className='text-white' > {hour.endHour} </td>
                <td className='text-white'  >
                  <Link to={`/editHour/${hour.id}`} className='btn btn-warning'>Editar</Link>
                  <button onClick={() => deleteHour(hour.id)} className='btn btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowHours