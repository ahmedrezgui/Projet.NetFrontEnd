import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskContainer from './TaskContainer';
import AnonymBoxCommentRefContainer from './AnonymBoxCommentRefContainer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login"/>
        <Route path='/task' element={<TaskContainer/>}  />
        <Route path='/comments' element={<AnonymBoxCommentRefContainer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
