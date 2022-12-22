import React, { useEffect, useState } from 'react'
import axios from 'axios' //EC:

import { Link } from 'react-router-dom' //EC: Link from React Route

import { endpoint, getAllDoctors  } from '../../shared/services' //EC: Import endpoint from services

const ShowDoctors = () => {
  
  const [doctors, setDoctors] = useState([])

 
  useEffect(() => {
    getAllDoctors().then((response) => {
      setDoctors(response);
    });

  }, [])

  const deleteDoctors = async (id) => {
    await axios.delete(`${endpoint}/doctors/${id}`)
    getAllDoctors()
  }

  return (
    <div className='app container'  >
       <p className="lead text-center">
        <h1>Medical Appointment System</h1>
        </p>
      <div className='d-grid gap-2'>
      <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/homeDoctors">Menú de Doctores</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/createDoctor">Registrar nuevo Doctor</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </nav>
        <br />
        <table className='bg-dark table table-striped'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Apellido</th>
              <th>Nombre</th>
              <th>Especialidad</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctors) => (
              <tr key={doctors.id}>
                <td className='text-white'  > {doctors.drLastName} </td>
                <td className='text-white'  > {doctors.drFirstName} </td>
                <td className='text-white'  > {doctors.drSpeciality} </td>
                <td className='text-white'  > {doctors.drPhoneNumber} </td>
                <td className='text-white'  >
                  <Link to={`/editDoctor/${doctors.id}`} className='btn btn-warning mx-3'>Editar</Link>
                  <button onClick={() => deleteDoctors(doctors.id)} className='btn btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowDoctors