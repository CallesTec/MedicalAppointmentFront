import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/doctors'

const EditPatient = () => {
    //EC: Initialize vriables
    const [drLastName, setdrLastName] = useState('')
    const [drFirstName, setdrFirstName] = useState('')
    const [drSpeciality, setdrSpeciality] = useState('')
    const [drPhoneNumber, setdrPhoneNumber] = useState('')
    
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            drLastName: drLastName,
            drFirstName: drFirstName,
            drSpeciality: drSpeciality,
            drPhoneNumber: drPhoneNumber
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getDoctorById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setdrLastName(response.data.setdrLastName)
            setdrFirstName(response.data.setdrFirstName)
            setdrSpeciality(response.data.setdrSpeciality)
            setdrPhoneNumber(response.data.setdrPhoneNumber)
        }
        getDoctorById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Doctor</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Last Name</label>
                <input 
                    value={drLastName}
                    onChange={ (e)=> setdrLastName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>First Name</label>
                <input 
                    value={drFirstName}
                    onChange={ (e)=> setdrFirstName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Speciality</label>
                <input 
                    value={drSpeciality}
                    onChange={ (e)=> setdrSpeciality(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Phone Number</label>
                <input 
                    value={drPhoneNumber}
                    onChange={ (e)=> setdrPhoneNumber(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditPatient