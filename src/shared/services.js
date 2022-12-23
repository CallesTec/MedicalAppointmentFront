// This file contains the get functions that will be used to fetch data from the backend API endpoints and return the data to the components that will use it. The functions are exported and imported in the components that need them. 

import axios from "axios";
export const endpoint = "http://localhost:8000/api";

export const getAllAppointments = async () => {
  const response = await axios.get(`${endpoint}/appointments`);
  return response.data;
};

export const getAllPatients = async () => {
  const response = await axios.get(`${endpoint}/patients`);
  return response.data;
};


export const getAllDoctors = async () => {
  const response = await axios.get(`${endpoint}/doctors`);
  return response.data;
};


export const getAllClinics = async () => {
  const response = await axios.get(`${endpoint}/clinics`);
  return response.data;
};

export const getAllHours = async () => {
  const response = await axios.get(`${endpoint}/cli_dr_hours`)
  return response.data;
}

export const getAllDiagnostics = async () => {
  const response = await axios.get(`${endpoint}/diagnostics`)
  return response.data;
  
}
