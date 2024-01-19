
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './component/sidebar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Sidebar}></Route>
        <Route path="/login"></Route>
      </Routes>
    </Router>
  );
}

export default App;
