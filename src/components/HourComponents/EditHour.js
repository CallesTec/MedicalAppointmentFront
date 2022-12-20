import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';

//EC: create a specific route to access an hour in the API
const endpoint = 'http://localhost:8000/api/clidrhours/'

const EditHour = () => {
    //EC: Initialize vriables
    const [clinic_id, setClinic_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0)
    const [startHour, setStartHour] = useState('00:00')
    const [endHour, setEndHour] = useState('23:00')
    const navigate = useNavigate()
    const {id} = useParams() //EC: The ID of hour you need update

    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${endpoint}${id}`, {
        clinic_id: clinic_id,
        doctor_id: doctor_id,
        startHour: startHour,
        endHour: endHour
      })
      navigate('/') //EC: Return root component
    }

    useEffect( () =>{
      const getHourById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            //console.log(response.data) //EC: Only for view response.data in browser terminal
            setClinic_id(response.data.clinic_id)
            setDoctor_id(response.data.doctor_id) 
            setStartHour(response.data.startHour)
            setEndHour(response.data.endHour)
        }
        getHourById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      <h3>Editar Horario</h3>
      <form onSubmit={update}>
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
        <button type='submit' className='btn btn-primary'>Actualizar</button>
      </form>
    </div>
  )
}

export default EditHour