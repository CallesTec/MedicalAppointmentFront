import React, {useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access an hour in the API
const endpoint = 'http://localhost:8000/api/clidrhours'

const CreateHour = () => {
    //EC: Initialize vriables
    const [clinic_id, setClinic_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0)
    const [startHour, setStartHour] = useState('00:00')
    const [endHour, setEndHour] = useState('23:00')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
          clinic_id: clinic_id,
          doctor_id: doctor_id,
          startHour: startHour,
          endHour: endHour
        })
        navigate('/') //EC: Return root component
    }

  return (
    <div>
      <h3>Nuevo Horario</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Clinica</label>
          <input
            value={clinic_id}
            onChange={ (e) => setClinic_id(e.target.value)}
            type='number'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Doctor</label>
          <input
            value={doctor_id}
            onChange={ (e) => setDoctor_id(e.target.value)}
            type='number'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Hora de entrada</label>
          <input
            value={startHour}
            onChange={ (e) => setStartHour(e.target.value)}
            type='time'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Hora de salida</label>
          <input
            value={endHour}
            onChange={ (e) => setEndHour(e.target.value)}
            type='time'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateHour