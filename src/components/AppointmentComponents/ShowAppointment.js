import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import {
  endpoint,
  getAllAppointments,
  getAllDoctors,
  getAllPatients,
  getAllClinics,
} from "../../shared/services";

const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const [doctor, setDoctor] = useState([]);

  const [patient, setPatient] = useState([]);

  const [clinics, setClinics] = useState([]);

  useEffect(() => {
    getAllAppointments().then((response) => {
      setAppointments(response);
    });

    getAllDoctors().then((response) => {
      setDoctor(response);
    });

    getAllPatients().then((response) => {
      setPatient(response);
    });

    getAllClinics().then((response) => {
      setClinics(response);
    });


  }, []);


  const deleteAppointment = async (id) => {
    await axios.delete(`${endpoint}/appointments/${id}`);
    getAllAppointments();
    
  };

  return (
    <div  className='app container  text-center' >
      <div className="d-grid gap-2">
      <p className="lead text-center">
        <h1>Medical Appointment System</h1>
        </p>

        <nav class=" navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand text-white" href="/homeAppointment">Menú de Citas Médicas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
        <li class="nav-item">
        <a class="nav-link active text-white" aria-current="page" href="/createAppointment">Agendar una Cita Médica</a>
        </li>
        </ul>
        </div>
        </div>
        </nav>

        <table className="table table-striped">
          <thead className="bg-dark text-white">
            <tr>
              <th>Clinica ID</th>

              <th>Paciente</th>

              <th>Doctor</th>

              <th>Fecha de cita</th>

              <th>Motivo</th>

              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>
                  {clinics.map((clinics) => {
                    if (clinics.id === appointment.clinic_id) {
                      return clinics.cliName;
                    }
                  })}
                </td>

                <td>
                  {patient.map((patient) => {
                    if (patient.id === appointment.patient_id) {
                      return patient.patFirstName;
                    }
                  })}
                </td>

                <td>
                  {doctor.map((doctor) => {
                    if (doctor.id === appointment.doctor_id) {
                      return doctor.drFirstName;
                    }
                  })}
                </td>

                <td>{appointment.apDate}</td>

                <td>{appointment.apReason}</td>

                <td>
                  <Link
                    to={`/editAppointment/${appointment.id}`}
                    className="btn btn-warning"
                  >
                    Editar
                  </Link>

                  <button
                    onClick={() => deleteAppointment(appointment.id)}
                    className="btn btn-danger"
                  >
                    Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAppointments;
