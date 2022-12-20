import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'https://localhost:8000/api/diagnostics/'

const EditDiagnostic = () =>{

    const [patient_id, setPatient_id] = useState('')
    const [doctor_id, setDoctor_id] = useState('')
    const [date, setDate] = useState('')
    const [diagnostic, setDiagnostic] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()


    const update = async (e) =>{
       e.preventDefault()
       await axios.put(`${endpoint}${id}`, {
        patient_id : patient_id,
        doctor_id: doctor_id,
        diaDate : date,
        diaDiagnostic : diagnostic
       })
       navigate('/')
    }

    useEffect(() => {
        const getDiagnosticById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setPatient_id(response.data.patient_id)
            setDoctor_id(response.data.doctor_id)
            setDate(response.data.date)
            setDiagnostic(response.data.diagnostic)
        }
        getDiagnosticById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    return (
        <div>
        <h3>Editar diagnostico</h3>
        <form onSubmit={update}>
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
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )
}


export default EditDiagnostic