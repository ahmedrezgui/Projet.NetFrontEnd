
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './component/sidebar';

function App() {
  const isAdmin = false; // Set your isAdmin logic here

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<Sidebar isAdmin={isAdmin} />}
        />        <Route path="/login"> </Route>
      </Routes>
    </Router>
  );
}

export default App;
