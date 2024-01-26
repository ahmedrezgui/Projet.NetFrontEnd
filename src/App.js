
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBlame from './components/AddBlame';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login">
        </Route>
        <Route path="/api/Manage/addBlame"
              element={<AddBlame/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
