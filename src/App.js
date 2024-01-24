
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login"> </Route>
        <Route path="/events" Component={CheckEvents}></Route>
        <Route path="/Addevents" Component={AddWork}></Route>

      </Routes>
    </Router>
  );
}

export default App;
