import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api'

const EditAppointments = () => {
    const [clinic_id, setClinic_id] = useState('')
    const [patient_id, setPatient_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [apDate, setApDate] = useState('')
    const [apReason, setApReason] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //EC: For selects Clinics, Patients and Doctors
    const [ clinics, setClinics ] = useState( [] )
    const [ patients, setPatients ] = useState( [] )
    const [ doctors, setDoctors ] = useState( [] )

    const update = async (e) => {
      e.preventDefault()
      await axios.put(`${endpoint}/appointments/${id}`, {
            clinic_id: clinic_id,
            patient_id: patient_id,
            doctor_id: doctor_id,
            apDate: apDate,
            apReason: apReason
        })
        navigate('/showAppointment')
    }

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
    
    useEffect( () =>{
        const getAppointmentById = async () => {
                const response = await axios.get(`${endpoint}/appointments/${id}`)
                setClinic_id(response.data.clinic_id)
                setPatient_id(response.data.patient_id) 
                setDoctor_id(response.data.doctor_id)
                setApDate(response.data.apDate)
                setApReason(response.data.apReason)
            }
            getAppointmentById()
            getAllClinics()
            getAllPatients()
            getAllDoctors()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

    return (        
        <div>
            <h3>Editar Cita</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Clinica</label>
                    <select className='form-control' onChange={ (e) => setClinic_id(e.target.value)} value={clinic_id}>
                        {clinics.map( (clinic) => (
                        <option key={clinic.id} value={clinic.id}>{clinic.cliName}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Paciente</label>
                    <select className='form-control' onChange={ (e) => setPatient_id(e.target.value)} value={patient_id}>
                        {patients.map( (patient) => (
                        <option key={patient.id} value={patient.id}>{patient.patFirstName} {patient.patLastName}</option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Doctor</label>
                    <select className='form-control' onChange={ (e) => setDoctor_id(e.target.value)} value={doctor_id}>
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
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>
        </div>
    )
    

}

export default EditAppointments