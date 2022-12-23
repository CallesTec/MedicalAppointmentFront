import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api"

const EditDiagnostic = () =>{

    const [patient_id, setPatient_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0)
    const [date, setDate] = useState('')
    const [diagnostic, setDiagnostic] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    //EC: For selects Clinics, Patients and Doctors
    const [ patients, setPatients ] = useState( [] )
    const [ doctors, setDoctors ] = useState( [] )

    const update = async (e) =>{
       e.preventDefault()
       await axios.put(`${endpoint}/diagnostics/${id}`, {
        patient_id : patient_id,
        doctor_id: doctor_id,
        diaDate : date,
        diaDiagnostic : diagnostic
       })
       navigate('/showDiagnostic')
    }

    useEffect( () => {
        const getDiagnosticById = async () => {
            const response = await axios.get(`${endpoint}/diagnostics/${id}`)
            console.log(response.data)
            setPatient_id(response.data.patient_id)
            setDoctor_id(response.data.doctor_id)
            setDate(response.data.diaDate)
            setDiagnostic(response.data.diaDiagnostic)
        }
        getDiagnosticById()
        getAllPatients()
        getAllDoctors()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    const getAllPatients = async () => {
        const pResponse = await axios.get(`${endpoint}/patients`)
        setPatients(pResponse.data)
    }
    
    const getAllDoctors = async () => {
        const dResponse = await axios.get(`${endpoint}/doctors`)
        setDoctors(dResponse.data)
    }

    return (
        <div className=" app container bg-dark text-white text-center " >
        <h3>Editar diagnostico</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label>Paciente</label>
                <select className='form-select' onChange={ (e) => setPatient_id(e.target.value)} value={patient_id}>
                    {patients.map( (patient) => (
                    <option key={patient.id} value={patient.id}>{patient.patFirstName} {patient.patLastName}</option>
                    ))}
                </select>
            </div>
            <div className='mb-3'>
                <label>Doctor</label>
                <select className='form-select' onChange={ (e) => setDoctor_id(e.target.value)} value={doctor_id}>
                    {doctors.map( (doctor) => (
                    <option key={doctor.id} value={doctor.id}>{doctor.drFirstName} {doctor.drLastName}</option>
                    ))}
                </select>
            </div>
            <div className='mb-3'>
            <label className='form-label'>Hora de entrada</label>
            <input
                value={date}
                onChange={ (e) => setDate(e.target.value)}
                type='date'
                className='form-control'
            />
            </div>
            <div className='mb-3'>
            <label className='form-label'>Hora de salida</label>
            <input
                value={diagnostic}
                onChange={ (e) => setDiagnostic(e.target.value)}
                type='text'
                className='form-control'
            />
            </div>
            <button type='submit' className='btn btn-secondary mb-3'>Guardar</button>
        </form>
    </div>
    )
}


export default EditDiagnostic