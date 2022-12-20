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
    <div>
      <div className='d-grid gap-2'>
        <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
        <table className='table table-striped'>
          <thead className='bg-primary text-white'>
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
                <td> {doctors.drLastName} </td>
                <td> {doctors.drFirstName} </td>
                <td> {doctors.drSpeciality} </td>
                <td> {doctors.drPhoneNumber} </td>
                <td>
                  <Link to={`/edit/${doctors.id}`} className='btn btn-warning'>Editar</Link>
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