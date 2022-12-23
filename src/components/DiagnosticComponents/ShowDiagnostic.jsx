import React, {useEffect, useState} from 'react'
import axios from 'axios' //EC:

import {Link} from 'react-router-dom' //EC: Link from React Route

import {endpoint,getAllDiagnostics, getAllDoctors, getAllPatients} from '../../shared/services' //EC: Import endpoint from services


const ShowDiagnostics = () => { 
   
    const [ diagnostics, setDiagnostics ] = useState( [] )
    const [doctor, setDoctor] = useState([]);
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        getAllDiagnostics().then((response) => {
          setDiagnostics(response);
        })
        getAllDoctors().then((response) => {
            setDoctor(response);
          });
        getAllPatients().then((response) => {
        setPatient(response);
        });
      }, [])
    
    const deleteDiagnostic = async (id) => {
        await axios.delete(`${endpoint}/diagnostics/${id}`)
        getAllDiagnostics()
    }

    return (
    <div className='app container' >
         <p className="lead text-center">
        <h1>Medical diagnostic System</h1>
        </p>
        <div className='d-grid gap-2'>
        <nav class=" navbar navbar-expand-lg bg-dark">
                            <div class="container-fluid">
                            <a class="navbar-brand text-white" href="/homeDiagnostic">Menú de Diagnósticos</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/createDiagnostic">Registrarse</a>
                            </li>
                            </ul>
                            </div>
                            </div>
                            </nav>
            <br />
            <table className='table table-striped bg-dark'>
                <thead className='bg-dark text-white'>
                    <tr>
                    <th>Paciente</th>
                        <th>Doctor</th>
                        <th>Fecha del Diagnostico</th>
                        <th>Diagnostico</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { diagnostics.map( (diagnostic) => (
                        <tr key={diagnostic.id}>
                            <td className='text-white'  > {patient.map((patient) => {
                    if (patient.id === diagnostic.patient_id) {
                      return patient.patFirstName;
                    }
                  })} </td>
                            <td className='text-white'  > {doctor.map((doctor) => {
                    if (doctor.id === diagnostic.doctor_id) {
                      return doctor.drFirstName;
                    }
                  })}</td>
                            <td className='text-white'  > {diagnostic.diaDate} </td>
                            <td className='text-white'  > {diagnostic.diaDiagnostic} </td>
                            <td className='text-white'  >
                                <Link to={`/editDiagnostic/${diagnostic.id}`} className='btn btn-warning'>Editar</Link>
                                <button onClick={ () => deleteDiagnostic(diagnostic.id) } className='btn btn-danger mx-3'>Borrar</button> 
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