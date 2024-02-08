import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';
import TaskContainer from './TaskContainer';

import CheckEvents from './components/checkEvents';
import AddWork from './components/AddWork';
import Login from './components/Login';
import Meeting from './components/meeting';

import Sidebar from './component/sidebar';
import AnonymBox from './AnonymBox';
import  ViewBoxSection from './ViewBoxSection';
import AdminFunctionalities from "./components/AdminFunctionalities";
import Scan from './components/scan';
import Confirm from './components/confirm';
import AddBlame from './components/AddBlame';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const isAdmin = false; // Set your isAdmin logic here
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/events" Component={CheckEvents}></Route>
        <Route path="/functionalities" Component={AdminFunctionalities}></Route>
        <Route path='/task' element={<TaskContainer/>}  />

        <Route path='/meeting' element={<Meeting />} />
        <Route path='/anonymbox' element={<AnonymBox/>}/>
        <Route path='/profile' element={<Profile />} />
        <Route path="/" element={<Sidebar isAdmin={isAdmin} />}/>
        <Route path="/scan/:meetingId" element={<Scan/>} />


        <Route path='/comments' element={<ViewBoxSection/>}/>
        <Route path='/blames' element={<AddBlame/>}/>




        <Route path="/login">
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
