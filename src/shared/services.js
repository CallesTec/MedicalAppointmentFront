import axios from "axios";
const endpoint = "http://localhost:8000/api";

export const getAllAppointments = async () => {
  const response = await axios.get(`${endpoint}/appointments`);
  return response.data;
};

export const createAppointment = async (appointment) => {
  const response = await axios.post(`${endpoint}/appointments`, appointment);
  return response.data;
};

export const updateAppointment = async (appointment) => {
  const response = await axios.put(
    `${endpoint}/appointments/${appointment.id}`,
    appointment
  );
  return response.data;
};

export const deleteAppointment = async (id) => {
  await axios.delete(`${endpoint}/appointments/${id}`);
};

export const getAllPatients = async () => {
  const response = await axios.get(`${endpoint}/patients`);
  return response.data;
};

export const createPatient = async (patient) => {
  const response = await axios.post(`${endpoint}/patients`, patient);
  return response.data;
};

export const updatePatient = async (patient) => {
  const response = await axios.put(
    `${endpoint}/patients/${patient.id}`,
    patient
  );
  return response.data;
};

export const deletePatient = async (id) => {
  await axios.delete(`${endpoint}/patients/${id}`);
};

export const getAllDoctors = async () => {
  const response = await axios.get(`${endpoint}/doctors`);
  return response.data;
};

export const createDoctor = async (doctor) => {
  const response = await axios.post(`${endpoint}/doctors`, doctor);
  return response.data;
};

export const updateDoctor = async (doctor) => {
  const response = await axios.put(`${endpoint}/doctors/${doctor.id}`, doctor);
  return response.data;
};

export const deleteDoctor = async (id) => {
  await axios.delete(`${endpoint}/doctors/${id}`);
};

export const getAllClinics = async () => {
  const response = await axios.get(`${endpoint}/clinics`);
  return response.data;
};

export const createClinic = async (clinic) => {
  const response = await axios.post(`${endpoint}/clinics`, clinic);
  return response.data;
};

export const updateClinic = async (clinic) => {
  const response = await axios.put(`${endpoint}/clinics/${clinic.id}`, clinic);
  return response.data;
};

export const deleteClinic = async (id) => {
  await axios.delete(`${endpoint}/clinics/${id}`);
};
