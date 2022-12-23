import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom' //EC: Link from React Route

//EC: create a basic route ta access the API
import { endpoint, getAllClinics } from "../../shared/services";

const ShowClinics = () => {
  const [clinics, setClinics] = useState([])

  useEffect(() => {
    getAllClinics().then((response) => {
      setClinics(response);
    })
  }, [])



  const deleteClinic = async (id) => {
    //EC: Delete 
    await axios.delete(`${endpoint}/clinics/${id}`)
    getAllClinics()
  }

  return (
    <div className='app container' >
      <div className='d-grid gap-2'>

      <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/homeClinic">Menú de Clínicas</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/createClinic">Registrar Clínica</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </nav>
            <br />
        
        <table className='table table-striped bg-dark'>
          <thead className='bg-dark text-white'>
            <tr>
              <th>Nombre de la Clinica</th>
              <th>Direccion de la Clinica</th>
              <th>Telefono de la Clinica</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clinics.map((clinics) => (
              <tr key={clinics.id}>
                <td className='text-white'  > {clinics.cliName} </td>
                <td className='text-white'  > {clinics.cliAddress} </td>
                <td className='text-white'  > {clinics.cliPhoneNumber} </td>
                <td className='text-white' >
                  <Link to={`/editClinic/${clinics.id}`} className='btn btn-warning mx-3'>Editar</Link>
                  <button onClick={() => deleteClinic(clinics.id)} className='btn btn-danger'>Borrar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowClinics