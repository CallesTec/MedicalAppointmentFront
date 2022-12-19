import React, {useEffect, useState} from 'react'
import axios from 'axios' //EC:

import {Link} from 'react-router-dom' //EC: Link from React Route

//EC: create a basic route ta access the API
const endpoint = 'http://localhost:8000/api'

const ShowDoctors = () => { 
    //Hook: var       varfunction     start in: []  (EC)
    const [ doctors, setDoctors ] = useState( [] )

    //Hook: effect, do something after renderizing (EC)
    useEffect ( ()=> {
        getAllDoctors()
    }, [])//Stop infinite bucle
    
    const getAllDoctors = async () => {
        
        const response = await axios.get(`${endpoint}/doctors`)
        setDoctors(response.data)
        console.log(response)
    }

    const deleteDoctors = async (id) => {
        
        await axios.delete(`${endpoint}/doctors/${id}`)
        getAllDoctors()
    }

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Apellido</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    { doctors.map( (doctors) => (
                        <tr key={doctors.id}>
                            <td> {doctors.drLastName} </td>
                            <td> {doctors.drFirstName} </td>
                            <td> {doctors.drSpeciality} </td>
                            <td> {doctors.drPhoneNumber} </td>
                            <td> 
                                <Link to={`/edit/${doctors.id}`} className='btn btn-warning'>Editar</Link>
                                <button onCLick={ ()=>deleteDoctors(doctors.id) } className='btn btn-danger'>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ShowDoctors