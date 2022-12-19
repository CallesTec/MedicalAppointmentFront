//EC:       , {useEffect, useState}
import React, {useEffect, useState} from 'react'
import axios from 'axios' //EC:

import {Link} from 'react-router-dom' //EC: Link from React Route

//EC: create a basic route ta access the API
const endpoint = 'http://localhost:8000/api'

const ShowPatients = () => { 
    //Hook: var       varfunction     start in: []  (EC)
    const [ patients, setPatients ] = useState( [] )

    //Hook: effect, do something after rendering (EC)
    useEffect ( ()=> {
        getAllPatients()
    }, [])//Stop infinite bucle
    
    const getAllPatients = async () => {
        //EC: Get all patient
        const response = await axios.get(`${endpoint}/patients`)
        setPatients(response.data)
        //console.log(response.data) //EC: Only for view response.data in browser terminal
    }

    const deletePatient = async (id) => {
        await axios.delete(`${endpoint}/patients/${id}`)
        getAllPatients()
    }

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { patients.map( (patient) => (
                        <tr key={patient.id}>
                            <td> {patient.patFirstName} </td>
                            <td> {patient.patLastName} </td>
                            <td> {patient.patPhoneNumber} </td>
                            <td> {patient.patEmail} </td>
                            <td>
                                <Link to={`/edit/${patient.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={ () => deletePatient(patient.id) } className='btn btn-danger'>Borrar</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ShowPatients