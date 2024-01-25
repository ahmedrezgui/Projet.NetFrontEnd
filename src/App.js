import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskContainer from './TaskContainer';
import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';
import Login from './Components/Login';
import ViewBoxSection from './ViewBoxSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path="/events" Component={CheckEvents}></Route>
        <Route path="/Addevents" Component={AddWork}></Route>
        <Route path='/task' element={<TaskContainer/>}  />
        <Route path='/comments' element={<ViewBoxSection/>}/>

      </Routes>
    </Router>

  );
}

export default App;
