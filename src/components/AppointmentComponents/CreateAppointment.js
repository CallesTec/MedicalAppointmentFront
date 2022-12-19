import React, {useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api/appointments'

const CreateAppointments = () => {
//EC: Initialize vriables
const [clinic_id, setClinic_id] = useState('')
const [patient_id, setPatient_id] = useState('')
const [doctor_id, setDoctor_id] = useState('')
const [apDate, setApDate] = useState('')
const [apReason, setApReason] = useState('')



const navigate = useNavigate()

const store = async (e) => {
    e.preventDefault()
    await axios.post(endpoint, {
        clinic_id: clinic_id,
        patient_id: patient_id,
        doctor_id: doctor_id,
        apDate: apDate,
        apReason: apReason
    })
    navigate('/')
}

return (
<div>
  <h3>Nueva Cita</h3>
  <form onSubmit={store}> 
    <div className='mb-3'>
      <label className='form-label'>Clinica</label>
      <input
        value={clinic_id}
        onChange={ (e) => setClinic_id(e.target.value)}
        type="text"
        className='form-control'
      />
    </div>
    <div className='mb-3'>
      <label className='form-label'>Paciente</label>
      <input
        value={patient_id}
        onChange={ (e) => setPatient_id(e.target.value)}
        type="text"
        className='form-control'
      />
    </div>
    <div className='mb-3'>
      <label className='form-label'>Doctor</label>
      <input
        value={doctor_id}
        onChange={ (e) => setDoctor_id(e.target.value)}
        type="text"
        className='form-control'
      />
    </div>
    <div className='mb-3'>
      <label className='form-label'>Fecha de cita</label>
      <input
        value={apDate}
        onChange={ (e) => setApDate(e.target.value)}
        type="datetime-local"
        className='form-control'
      />
    </div>


    {/* create a datetime field */}
    <div className='mb-3'>
        <label className='form-label'>Motivo</label>
        <input
        value={apReason}
        onChange={ (e) => setApReason(e.target.value)}
        type="text"
        className='form-control'
        />
    </div>
    

    <button type='submit' className='btn btn-primary'>Guardar</button>
  </form>
</div>
)
}


export default CreateAppointments