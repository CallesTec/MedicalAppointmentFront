import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api/appointments/'

const EditAppointments = () => {
    const [clinic_id, setClinic_id] = useState('')
    const [patient_id, setPatient_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [apDate, setApDate] = useState('')
    const [apReason, setReason] = useState('')

    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${endpoint}${id}`, {
            clinic_id: clinic_id,
            patient_id: patient_id,
            doctor_id: doctor_id,
            apDate: apDate,
            apReason: apReason
        })
        navigate('/')
    }

    useEffect( () =>{
        const getAppointmentById = async () => {
                const response = await axios.get(`${endpoint}${id}`)
                setClinic_id(response.data.clinic_id)
                setPatient_id(response.data.patient_id) 
                setDoctor_id(response.data.doctor_id)
                setApDate(response.data.apDate)
                setReason(response.data.apReason)
            }
            getAppointmentById()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (        
        <div>
            <h3>Editar Cita</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Clinica</label>
                    <input type='text' className='form-control' value={clinic_id} onChange={(e) => setClinic_id(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Paciente</label>
                    <input type='text' className='form-control' value={patient_id} onChange={(e) => setPatient_id(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Doctor</label>
                    <input type='text' className='form-control' value={doctor_id} onChange={(e) => setDoctor_id(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Fecha</label>
                    <input type='text' className='form-control' value={apDate} onChange={(e) => setApDate(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Motivo</label>
                    <input type='text' className='form-control' value={apReason} onChange={(e) => setReason(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
    

}

export default EditAppointments