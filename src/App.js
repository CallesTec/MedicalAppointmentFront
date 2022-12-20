
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//EC: Import own componets
import ShowPatients from './components/ShowPatients';
import CreatePatient from './components/CreatePatient';
import EditPatient from './components/EditPatient';

import ShowClinics from './components/ClinicComponents/ShowClinics';
import CreateClinic from './components/ClinicComponents/CreateClinic';
import EditClinic from './components/ClinicComponents/EditClinic';

import ShowDoctors from './components/DoctorComponents/ShowDoctors'
import CreateDoctor from './components/DoctorComponents/CreateDoctor';
import EditDoctor from './components/DoctorComponents/EditDoctor';

import ShowAppointment from './components/AppointmentComponents/ShowAppointment'
import CreateAppointment from './components/AppointmentComponents/CreateAppointment';
import EditAppointment from './components/AppointmentComponents/EditAppointment';


import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={ <ShowPatients/> } />
          <Route path='/create' element={ <CreatePatient/>}/>
          <Route path='/edit/:id' element={ <EditPatient/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
