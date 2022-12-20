//EC:       , {useEffect, useState}
import React, {useEffect, useState} from 'react'
import axios from 'axios' //EC:

import {Link} from 'react-router-dom' //EC: Link from React Route

//EC: create a basic route ta access the API
const endpoint = 'http://localhost:8000/api'

const ShowHours = () => { 
    //Hook: var       varfunction     start in: []  (EC)
    const [ hours, setHours ] = useState( [] )

    //Hook: effect, do something after rendering (EC)
    useEffect ( ()=> {
        getAllHours()
    }, [])//Stop infinite bucle
    
    const getAllHours = async () => {
        //EC: Get all patient
        const response = await axios.get(`${endpoint}/clidrhours`)
        setHours(response.data)
        //console.log(response.data) //EC: Only for view response.data in browser terminal
    }

    const deleteHour = async (id) => {
        await axios.delete(`${endpoint}/clidrhour/${id}`)
        getAllHours()
    }

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Clinica</th>
                        <th>Doctor</th>
                        <th>Hora Inicio</th>
                        <th>Hora Salida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { hours.map( (hour) => (
                        <tr key={hour.id}>
                            <td> {hour.clinic_id} </td>
                            <td> {hour.doctor_id} </td>
                            <td> {hour.startHour} </td>
                            <td> {hour.endHour} </td>
                            <td>
                                <Link to={`/edit/${hour.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={ () => deleteHour(hour.id) } className='btn btn-danger'>Borrar</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ShowHours