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
    <div>
      <div className='d-grid gap-2'>
        <Link to='/createHour' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
        <table className='table table-striped'>
          <thead className='bg-primary text-white'>
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
                <td> {clinics.map((clinics) => {
                  if (clinics.id === hour.clinic_id) {
                    return clinics.cliName;
                  }
                })} </td>
                <td> {doctor.map((doctor) => {
                  if (doctor.id === hour.doctor_id) {
                    return doctor.drFirstName;
                  }
                })} </td>
                <td> {hour.startHour} </td>
                <td> {hour.endHour} </td>
                <td>
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