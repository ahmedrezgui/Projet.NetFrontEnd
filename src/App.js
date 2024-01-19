
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './component/sidebar';

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Routes>
        <Route path="/" Component={Sidebar}></Route>
        <Route path="/login"></Route>
      </Routes>
    </Router>
=======
    <>
      <Router>
        <Routes>
          <Route path="/login">
          </Route>
        </Routes>
      </Router>
    </>

>>>>>>> 379ef95693295a33bf658d3bce515ea16a5d027a
  );
}

export default App;
