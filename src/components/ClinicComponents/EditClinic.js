import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/clinics'

const EditClinic = () => {
    //EC: Initialize vriables
    const [cliName, setcliName] = useState('')
    const [cliAddress, setcliAddress] = useState('')
    const [cliPhoneNumber, setcliPhoneNumber] = useState('')
    
    
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            cliName: cliName,
            cliAddress: cliAddress,
            cliPhoneNumber: cliPhoneNumber
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getClinicById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setcliName(response.data.setcliName)
            setcliAddress(response.data.setcliAddress)
            setcliPhoneNumber(response.data.setcliPhoneNumber)
        }
        getClinicById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Edit Clinic</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Clinic Name</label>
                <input 
                    value={cliName}
                    onChange={ (e)=> setcliName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Clinic Address</label>
                <input 
                    value={cliAddress}
                    onChange={ (e)=> setcliAddress(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Clinic Phone Number</label>
                <input 
                    value={cliPhoneNumber}
                    onChange={ (e)=> setcliPhoneNumber(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Update</button>
        </form>
    </div>
    )
}

export default EditClinic