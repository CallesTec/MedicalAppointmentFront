import React, {useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access doctors in the API
const endpoint = 'http://localhost:8000/api/patients'

const CreateClinic = () => {
    //EC: Initialize vriables
    const [cliName, setcliName] = useState('')
    const [cliAddress, setcliAddress] = useState('')
    const [cliPhoneNumber, setcliPhoneNumber] = useState('')
   

    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            cliName: cliName,
            cliAddress: cliAddress,
            cliPhoneNumber: cliPhoneNumber
            
        })
        navigate('/')
    }

  return (
    <div>
      <h3>Nueva Clínica</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Clinic Name</label>
          <input
            value={cliName}
            onChange={ (e) => setcliName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Clinic Address</label>
          <input
            value={cliAddress}
            onChange={ (e) => setcliAddress(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Clinic Phone Number</label>
          <input
            value={cliPhoneNumber}
            onChange={ (e) => setcliPhoneNumber(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateClinic