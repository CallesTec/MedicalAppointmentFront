
import React, {useEffect, useState} from 'react'
import axios from 'axios' //EC:

import {Link} from 'react-router-dom' //EC: Link from React Route

//FM: create a basic route ta access the API
const endpoint = 'http://localhost:8000/api'

const ShowDiagnostics = () => { 
   
    const [ diagnostics, setDiagnostics ] = useState( [] )

    useEffect ( ()=> {
        getAllDiagnostics()
    }, [])
    
    const getAllDiagnostics = async () => {
        //FM: Get all diagnostics
        const response = await axios.get(`${endpoint}/diagnostics`)
        setDiagnostics(response.data)
        
    }

    const deleteDiagnostic = async (id) => {
        await axios.delete(`${endpoint}/diagnostics/${id}`)
        getAllDiagnostics()
    }

    return (
    <div>
        <div className='d-grid gap-2'>
            <Link to='/create' className='btn btn-success btn-lg mt-2 mb-2 text-white'>Nuevo</Link>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Paciente ID</th>
                        <th>Doctor ID</th>
                        <th>Fecha del Diagnostico</th>
                        <th>Diagnostico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { diagnostics.map( (diagnostic) => (
                        <tr key={diagnostic.id}>
                            <td> {diagnostic.patient_id} </td>
                            <td> {diagnostic.doctor_id} </td>
                            <td> {diagnostic.diaDate} </td>
                            <td> {diagnostic.diaDiagnostic} </td>
                            <td>
                                <Link to={`/edit/${diagnostic.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={ () => deleteDiagnostic(diagnostic.id) } className='btn btn-danger'>Borrar</button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ShowDiagnostics