import React, {useState} from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//EC: create a specific route to access patients in the API
const endpoint = 'http://localhost:8000/api/patients'

const CreatePatient = () => {
    //EC: Initialize vriables
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const [insurance, setInsurance] = useState(0)
    const [personalID, setPersonalID] = useState('')
    const [country, setCountry] = useState('')
    const [email, setEmail] = useState('')
    const [birthDay, setBirthDay] = useState('2022-06-15')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {
            patLastName: lastName,
            patFirstName: firstName,
            patPhoneNumber: phoneNumber,
            patAddress: address,
            patInsurance: insurance,
            patPersonalID: personalID,
            patCountry: country,
            patEmail: email,
            patBirthDay: birthDay
        })
        navigate('/show') //EC: Return root component
    }

  return (
    <div>
      <h3>Nuevo Paciente</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Apellidos</label>
          <input
            value={lastName}
            onChange={ (e) => setLastName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Nombres</label>
          <input
            value={firstName}
            onChange={ (e) => setFirstName(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Telefono</label>
          <input
            value={phoneNumber}
            onChange={ (e) => setPhoneNumber(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Direccion</label>
          <input
            value={address}
            onChange={ (e) => setAddress(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>¿Tiene seguro?</label>
          <input
            value={insurance}
            onChange={ (e) => setInsurance(e.target.value)}
            type="number"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Documento de identificacion</label>
          <input
            value={personalID}
            onChange={ (e) => setPersonalID(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Pais</label>
          <input
            value={country}
            onChange={ (e) => setCountry(e.target.value)}
            type="text"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            type="email"
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Fecha de nacimiento</label>
          <input
            value={birthDay}
            onChange={ (e) => setBirthDay(e.target.value)}
            type="date"
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>Guardar</button>
      </form>
    </div>
  )
}

export default CreatePatient