
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login></Login>}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
