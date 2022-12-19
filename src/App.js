//import logo from './logo.svg';
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
          <Route path='/' element={ <Home/>} />
          
          <Route path='/show' element={ <ShowPatients/>} />
          <Route path='/create' element={ <CreatePatient/>}/>
          <Route path='/edit/:id' element={ <EditPatient/>}/>

          <Route path='/showClinic' element={ <ShowClinics/>} />
          <Route path='/createClinic' element={ <CreateClinic/>}/>
          <Route path='/editClinic/:id' element={ <EditClinic/>}/>

          <Route path='/showDoctors' element={ <ShowDoctors/>} />
          <Route path='/createDoctor' element={ <CreateDoctor/>}/>
          <Route path='/editDoctor/:id' element={ <EditDoctor/>}/>

          <Route path='/showAppointment' element={ <ShowAppointment/>} />
          <Route path='/createAppointment' element={ <CreateAppointment/>}/>
          <Route path='/editAppointment/:id' element={ <EditAppointment/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
