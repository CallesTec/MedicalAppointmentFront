
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//EC: Import our componets
import ShowPatients from './components/ShowPatients';
import CreatePatient from './components/CreatePatient';
import EditPatient from './components/EditPatient';
// import ShowHours from './components/ShowHours';
// import CreateHour from './components/CreateHour';
// import EditHour from './components/EditHour';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowPatients/> } />
          <Route path='/create' element={ <CreatePatient/> } />
          <Route path='/edit/:id' element={ <EditPatient/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
