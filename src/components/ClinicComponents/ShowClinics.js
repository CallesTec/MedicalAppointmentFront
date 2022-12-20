import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom' //EC: Link from React Route

//EC: create a basic route ta access the API
import { endpoint, getAllClinics } from "../../shared/services";

const ShowClinics = () => {
  //Hook: var       varfunction     start in: []  (EC)
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
    <div>
      <div className='d-grid gap-2'>
        <Link to='/createClinic' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
        <table className='table table-striped'>
          <thead className='bg-primary text-white'>
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
                <td> {clinics.cliName} </td>
                <td> {clinics.cliAddress} </td>
                <td> {clinics.cliPhoneNumber} </td>
                <td>
                  <Link to={`/editClinic/${clinics.id}`} className='btn btn-warning'>Editar</Link>
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