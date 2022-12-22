import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api'

const CreateAppointments = () => {
//EC: Initialize vriables
const [clinic_id, setClinic_id] = useState('')
const [patient_id, setPatient_id] = useState('')
const [doctor_id, setDoctor_id] = useState('')
const [apDate, setApDate] = useState('')
const [apReason, setApReason] = useState('')
const navigate = useNavigate()

//EC: For selects Clinics, Patients and Doctors
const [ clinics, setClinics ] = useState( [] )
const [ patients, setPatients ] = useState( [] )
const [ doctors, setDoctors ] = useState( [] )

useEffect ( ()=> {
  getAllClinics()
  getAllPatients()
  getAllDoctors()
}, [])//Stop infinite bucle

const getAllClinics = async () => {
  const cResponse = await axios.get(`${endpoint}/clinics`)
  setClinics(cResponse.data)
}

const getAllPatients = async () => {
  const pResponse = await axios.get(`${endpoint}/patients`)
  setPatients(pResponse.data)
}

const getAllDoctors = async () => {
  const dResponse = await axios.get(`${endpoint}/doctors`)
  setDoctors(dResponse.data)
}

const store = async (e) => {
    e.preventDefault()
    await axios.post(`${endpoint}/appointments`, {
        clinic_id: clinic_id,
        patient_id: patient_id,
        doctor_id: doctor_id,
        apDate: apDate,
        apReason: apReason
    })
    navigate('/showAppointment')
}

return (
<div className='app container bg-dark text-white text-center' >
  <h3>Nueva Cita</h3>
  <form onSubmit={store}> 
    <div className='mb-3'>
      <label className='form-label'>Clinica</label>
      <select className='form-select' onChange={ (e) => setClinic_id(e.target.value)} >
        <option selected>Clic aqu&iacute; para seleccionar una cl&iacute;nica</option>
          {clinics.map( (clinic) => (
            <option key={clinic.id} value={clinic.id}>{clinic.cliName}</option>
          ))}
      </select>
    </div>
    <div className='mb-3'>
      <label className='form-label'>Paciente</label>
      <select className='form-select' onChange={ (e) => setPatient_id(e.target.value)} >
        <option selected>Clic aqu&iacute; para seleccionar un paciente</option>
        {patients.map( (patient) => (
          <option key={patient.id} value={patient.id}>{patient.patFirstName} {patient.patLastName}</option>
        ))}
      </select>
    </div>
    <div className='mb-3'>
      <label className='form-label'>Doctor</label>
      <select className='form-select' onChange={ (e) => setDoctor_id(e.target.value)} >
        <option selected>Clic aqu&iacute; para seleccionar un doctor</option>
        {doctors.map( (doctor) => (
          <option key={doctor.id} value={doctor.id}>{doctor.drFirstName} {doctor.drLastName}</option>
        ))}
      </select>
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
    <div className='mb-3'>
      <label className='form-label'>Motivo</label>
      <input
        value={apReason}
        onChange={ (e) => setApReason(e.target.value)}
        type="text"
        className='form-control'
      />
    </div>
    <button type='submit' className='btn btn-secondary mb-3 mx-3'>Guardar</button>
    <a href="/homeAppointment" className='btn btn-secondary  mb-3'>Regresar</a>
  </form>
</div>
)
}


export default CreateAppointments