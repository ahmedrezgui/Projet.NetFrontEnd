import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';
import TaskContainer from './TaskContainer';
import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';
import Login from './Components/Login';
import ViewBoxSection from './ViewBoxSection';
import Sidebar from './component/sidebar';


function App() {
  const isAdmin = false; // Set your isAdmin logic here
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/events" Component={CheckEvents}></Route>
        <Route path="/Addevents" Component={AddWork}></Route>
        <Route path='/task' element={<TaskContainer/>}  />

        <Route path='/comments' element={<ViewBoxSection/>}/>

        <Route path='/profile' element={<Profile />} />
        <Route
          path="/"
          element={<Sidebar isAdmin={isAdmin} />}/>



      </Routes>
    </Router>

  );
}

export default App;
