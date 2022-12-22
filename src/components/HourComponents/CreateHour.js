import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access an hour in the API
const endpoint = 'http://localhost:8000/api'

const CreateHour = () => {
    //EC: Initialize vriables
    const [clinic_id, setClinic_id] = useState(1)
    const [doctor_id, setDoctor_id] = useState(1)
    const [startHour, setStartHour] = useState('00:00')
    const [endHour, setEndHour] = useState('23:00')
    const navigate = useNavigate()

    //EC: For selects Clinics and Doctors
    const [ clinics, setClinics ] = useState( [] )
    const [ doctors, setDoctors ] = useState( [] )

    //Hook: effect, do something after rendering (EC)
    useEffect ( ()=> {
      getAllClinics()
      getAllDoctors()
    }, [])//Stop infinite bucle

    const getAllClinics = async () => {
      const cResponse = await axios.get(`${endpoint}/clinics`)
      setClinics(cResponse.data)
    }

    const getAllDoctors = async () => {
      const dResponse = await axios.get(`${endpoint}/doctors`)
      setDoctors(dResponse.data)
    }

    const store = async (e) => {
        e.preventDefault()
        await axios.post(`${endpoint}/clidrhours`, {
          clinic_id: clinic_id,
          doctor_id: doctor_id,
          startHour: startHour,
          endHour: endHour
        })
        navigate('/showHour') //EC: Return root component
    }

  return (
    <div  className="app container bg-dark text-white text-center">
      <h3>Nuevo Horario</h3>
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
          <label className='form-label'>Doctor</label>
          <select className='form-select' onChange={ (e) => setDoctor_id(e.target.value)} >
            <option selected>Clic aqu&iacute; para seleccionar un doctor</option>
            {doctors.map( (doctor) => (
              <option key={doctor.id} value={doctor.id}>{doctor.drFirstName} {doctor.drLastName}</option>
            ))}
          </select>
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
        <button type='submit' className='btn btn-secondary mb-3'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateHour