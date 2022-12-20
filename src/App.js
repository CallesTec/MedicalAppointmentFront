import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//EC: Import own componets
import ShowPatients from './components/ShowPatients';
import CreatePatient from './components/CreatePatient';
import EditPatient from './components/EditPatient';
import ShowClinics from './components/ShowClinics';
import CreateClinic from './components/CreateClinic';
import EditClinic from './components/EditClinic';
import ShowDoctors from './components/ShowDoctors';
import CreateDoctor from './components/CreateDoctor';
import EditDoctor from './components/EditDoctor';
import ShowAppointment from './components/ShowAppointment';
import CreateAppointment from './components/CreateAppointment';
import EditAppointment from './components/EditAppointment';
import ShowHours from './components/HourComponents/ShowHours';
import CreateHour from './components/HourComponents/CreateHour';
import EditHour from './components/HourComponents/EditHour';
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

          <Route path='/showAppointment' element={ <ShowHours/>} />
          <Route path='/createAppointment' element={ <CreateHour/>}/>
          <Route path='/editAppointment/:id' element={ <EditHour/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
