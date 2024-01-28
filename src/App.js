import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';
import TaskContainer from './TaskContainer';
import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';
import Login from './Components/Login';
import Sidebar from './component/sidebar';
import AnonymBox from './AnonymBox';

function App() {
  const isAdmin = false; // Set your isAdmin logic here
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/events" Component={CheckEvents}></Route>
        <Route path="/Addevents" Component={AddWork}></Route>
        <Route path='/task' element={<TaskContainer/>}  />
        <Route path='/anonymbox' element={<AnonymBox/>}/>
        <Route path='/profile' element={<Profile />} />
        <Route path="/" element={<Sidebar isAdmin={isAdmin} />}/>
      </Routes>
    </Router>
  );
}

export default App;
