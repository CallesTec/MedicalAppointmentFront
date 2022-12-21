import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api'

const EditHour = () => {
    //EC: Initialize vriables
    const [clinic_id, setClinic_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0)
    const [startHour, setStartHour] = useState('00:00')
    const [endHour, setEndHour] = useState('23:00')
    const navigate = useNavigate()
    const {id} = useParams() //EC: The ID of hour you need update

    //EC: For selects Clinics and Doctors
    const [ clinics, setClinics ] = useState( [] )
    const [ doctors, setDoctors ] = useState( [] )

    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${endpoint}/clidrhours/${id}`, {
        clinic_id: clinic_id,
        doctor_id: doctor_id,
        startHour: startHour,
        endHour: endHour
      })
      navigate('/showHour') //EC: Return root component
    }

    useEffect( () =>{
      const getHourById = async () => {
            const response = await axios.get(`${endpoint}/clidrhours/${id}`)
            //console.log(response.data) //EC: Only for view response.data in browser terminal
            setClinic_id(response.data.clinic_id)
            setDoctor_id(response.data.doctor_id) 
            setStartHour(response.data.startHour)
            setEndHour(response.data.endHour)
        }

        const getAllClinics = async () => {
          const cResponse = await axios.get(`${endpoint}/clinics`)
          setClinics(cResponse.data)
        }
    
        const getAllDoctors = async () => {
          const dResponse = await axios.get(`${endpoint}/doctors`)
          setDoctors(dResponse.data)
        }
        getHourById()
        getAllClinics()
        getAllDoctors()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      <h3>Editar Horario</h3>
      <form onSubmit={update}>
      <div className='mb-3'>
          <label className='form-label'>Clinica</label>
          <select value={clinic_id} className='form-control' onChange={ (e) => setClinic_id(e.target.value)} >
            {clinics.map( (clinic) => (
              <option key={clinic.id} value={clinic.id}>{clinic.cliName}</option>
            ))}
          </select>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Doctor</label>
          <select value={doctor_id} className='form-control' onChange={ (e) => setDoctor_id(e.target.value)} >
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
        <button type='submit' className='btn btn-primary'>Actualizar</button>
      </form>
    </div>
  )
}

export default EditHour