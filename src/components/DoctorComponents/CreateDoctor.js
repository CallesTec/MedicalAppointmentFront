import React, {useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api/doctors'

const CreateDoctor = () => {
    //EC: Initialize vriables
    const [drLastName, setdrLastName] = useState('')
    const [drFirstName, setdrFirstName] = useState('')
    const [drSpeciality, setdrSpeciality] = useState('')
    const [drPhoneNumber, setdrPhoneNumber] = useState('')
   

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            drLastName: drLastName,
            drFirstName: drFirstName,
            drSpeciality: drSpeciality,
            drPhoneNumber: drPhoneNumber
            
        })
        navigate('/showDoctors')
    }

  return (
    
    <div  className='app container bg-dark text-white text-center' >
      <p className="lead text-center">
        <h1>Medical Appointment System</h1>
        </p>
        <br/>
      <h3>Nuevo Doctor</h3>

      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Last Name</label>
          <input
            value={drLastName}
            onChange={ (e) => setdrLastName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>First Name</label>
          <input
            value={drFirstName}
            onChange={ (e) => setdrFirstName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Speciality</label>
          <input
            value={drSpeciality}
            onChange={ (e) => setdrSpeciality(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Phone Number</label>
          <input
            value={drPhoneNumber}
            onChange={ (e) => setdrPhoneNumber(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-secondary mx-3 mb-3'>Guardar</button>
        <a href="/homeDoctors" className='btn btn-secondary  mb-3'>Regresar</a>
      </form>
    </div>
  )
}

export default CreateDoctor