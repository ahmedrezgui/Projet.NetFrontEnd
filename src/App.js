import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskContainer from './TaskContainer';
import ViewBoxSection from './ViewBoxSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login"/>
        <Route path='/task' element={<TaskContainer/>}  />
        <Route path='/comments' element={<ViewBoxSection/>}/>
      </Routes>
    </Router>
  );
}

export default App;
