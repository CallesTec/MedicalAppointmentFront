import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";
const ShowAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAllAppointments();
  }, []);

  const getAllAppointments = async () => {
    const response = await axios.get(`${endpoint}/appointments`);
    setAppointments(response.data);
  };

  const deleteAppointment = async (id) => {
    await axios.delete(`${endpoint}/appointments/${id}`);
    getAllAppointments();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create-appointment"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>

        <table className="table table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>Clinica ID</th>
              <th>Paciente ID</th>
              <th>Doctor ID</th>
              <th>Fecha de cita</th>
              <th>Motivo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.clinic_id}</td>
                <td>{appointment.patient_id}</td>
                <td>{appointment.doctor_id}</td>
                <td>{appointment.apDate}</td>
                <td>{appointment.apReason}</td>
                <td>
                  <Link to={`/edit/${appointment.id}`} className="btn btn-warning">
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
