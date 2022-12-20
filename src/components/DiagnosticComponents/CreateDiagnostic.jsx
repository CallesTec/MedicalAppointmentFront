import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/diagnostics'

const CreateDiagnostic = () => {

    const [patient_id, setPatient_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [date, setDate] = useState('')
    const [diagnostic, setDiagnostic] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
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
                <input
                    value={patient_id}
                    onChange = { (e) => setPatient_id(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label>Doctor</label>
                <input
                    value={doctor_id}
                    onChange = { (e) => setDoctor_id(e.target.value)}
                    type='text'
                    className='form-control'
                />
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