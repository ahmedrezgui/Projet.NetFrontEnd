
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" />
          <Route path='/profile' element={<Profile />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
