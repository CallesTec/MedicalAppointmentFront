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
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/createAppointment"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>

        <table className="table table-striped">
          <thead className="bg-primary text-white">
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
                      return patient.patFirstName + " " + patient.patLastName;
                    }
                  })}
                </td>

                <td>
                  {doctor.map((doctor) => {
                    if (doctor.id === appointment.doctor_id) {
                      return doctor.drFirstName + " " + doctor.drLastName;
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
