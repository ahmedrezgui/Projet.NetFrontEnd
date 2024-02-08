import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';
import TaskContainer from './TaskContainer';
import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';
import Login from './Components/Login';
import Meeting from './Components/meeting';
import Sidebar from './component/sidebar';
import AnonymBox from './AnonymBox';
import  ViewBoxSection from './ViewBoxSection';
import AdminFunctionalities from "./Components/AdminFunctionalities";
import Scan from './Components/scan';
import Confirm from './Components/confirm';

function App() {
  const isAdmin = true; // Set your isAdmin logic here
  return (
    <Router>
       <div className=" principal" style={{background: "#EBEBEB",height:"150vh"}}> 
          <div className=" my-10 rounded-3xl mr-10 w-1/5" style={{height:"90vh"}}>  
              <Sidebar isAdmin={isAdmin} />  
          </div > 
          <div className='secondComp'>
            <Routes>
              <Route path='/login' element={<Login></Login>}> </Route>
              <Route path="/events" Component={CheckEvents}></Route>
              <Route path="/functionalities" Component={AdminFunctionalities}></Route>
              <Route path='/task' element={<TaskContainer/>}  />
              <Route path='/meeting' element={<Meeting />} />
              <Route path='/anonymbox' element={<AnonymBox/>}/>
              <Route path='/profile' element={<Profile />} />
              <Route path="/scan/:meetingId" element={<Scan/>} />
              <Route path='/comments' element={<ViewBoxSection/>}/>
            </Routes>
            </div>
       </div> 
    </Router>
  );
}

export default App;
