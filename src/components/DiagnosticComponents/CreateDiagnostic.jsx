import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = "http://localhost:8000/api"

const CreateDiagnostic = () => {

    const [patient_id, setPatient_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [date, setDate] = useState('')
    const [diagnostic, setDiagnostic] = useState('')
    const navigate = useNavigate()

    //EC: For selects Patients and Doctors
    const [ patients, setPatients ] = useState( [] )
    const [ doctors, setDoctors ] = useState( [] )

    useEffect ( ()=> {
        getAllPatients()
        getAllDoctors()
      }, [])//Stop infinite bucle
      
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
    await axios.post(`${endpoint}/diagnostics`, {
            patient_id : patient_id,
            doctor_id: doctor_id,
            diaDate : date,
            diaDiagnostic : diagnostic
         })
         navigate('/')
    }

  return (
    <div>
        <h3>Crear diagnostic</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label>Paciente</label>
                <select className='form-select' onChange={ (e) => setPatient_id(e.target.value)} >
                    <option selected>Clic aqu&iacute; para seleccionar un paciente</option>
                    {patients.map( (patient) => (
                    <option key={patient.id} value={patient.id}>{patient.patFirstName} {patient.patLastName}</option>
                    ))}
                </select>
            </div>
            <div className='mb-3'>
                <label>Doctor</label>
                <select className='form-select' onChange={ (e) => setDoctor_id(e.target.value)} >
                    <option selected>Clic aqu&iacute; para seleccionar un doctor</option>
                    {doctors.map( (doctor) => (
                    <option key={doctor.id} value={doctor.id}>{doctor.drFirstName} {doctor.drLastName}</option>
                    ))}
                </select>
            </div>
            <div className='mb-3'>
                <label>Fecha</label>
                <input
                    value={date}
                    onChange = { (e) => setDate(e.target.value)}
                    type='date'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label>Diagnostico</label>
                <input
                    value={diagnostic}
                    onChange = { (e) => setDiagnostic(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary' >Guardar</button>
        </form>
    </div>
  )
}

export default CreateDiagnostic