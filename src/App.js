import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//EC: Import own components
import ShowPatients from './components/ShowPatients';
import CreatePatient from './components/CreatePatient';
import EditPatient from './components/EditPatient';
import ShowClinics from './components/ClinicComponents/ShowClinics';
import CreateClinic from './components/ClinicComponents/CreateClinic';
import EditClinic from './components/ClinicComponents/EditClinic';

import ShowDoctors from './components/DoctorComponents/ShowDoctors';
import CreateDoctor from './components/DoctorComponents/CreateDoctor';
import EditDoctor from './components/DoctorComponents/EditDoctor';

import ShowAppointment from './components/AppointmentComponents/ShowAppointment';
import CreateAppointment from './components/AppointmentComponents/CreateAppointment';
import EditAppointment from './components/AppointmentComponents/EditAppointment';
import ShowHours from './components/HourComponents/ShowHours';
import CreateHour from './components/HourComponents/CreateHour';
import EditHour from './components/HourComponents/EditHour';
import ShowDiagnostic from './components/DiagnosticComponents/ShowDiagnostic';
import CreateDiagnostic from './components/DiagnosticComponents/CreateDiagnostic';
import EditDiagnostic from './components/DiagnosticComponents/EditDiagnostic';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/show' element={<ShowPatients />} />
          <Route path='/create' element={<CreatePatient />} />
          <Route path='/edit/:id' element={<EditPatient />} />

          <Route path='/showClinics' element={<ShowClinics />} />
          <Route path='/createClinic' element={<CreateClinic />} />
          <Route path='/editClinic/:id' element={<EditClinic />} />

          <Route path='/showDoctors' element={<ShowDoctors />} />
          <Route path='/createDoctor' element={<CreateDoctor />} />
          <Route path='/editDoctor/:id' element={<EditDoctor />} />

          <Route path='/showAppointment' element={<ShowAppointment />} />
          <Route path='/createAppointment' element={<CreateAppointment />} />
          <Route path='/editAppointment/:id' element={<EditAppointment />} />

          <Route path='/showHour' element={<ShowHours />} />
          <Route path='/createHour' element={<CreateHour />} />
          <Route path='/editHour/:id' element={<EditHour />} />

          <Route path='/showDiagnostic' element={<ShowDiagnostic />} />
          <Route path='/createDiagnostic' element={<CreateDiagnostic />} />
          <Route path='/editDiagnostic/:id' element={<EditDiagnostic />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
