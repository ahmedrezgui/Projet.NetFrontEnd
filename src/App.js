import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from './profile';
import TaskContainer from './TaskContainer';

import CheckEvents from './Components/checkEvents';
import AddWork from './Components/AddWork';
import Login from './Components/Login';
import Meeting from './Components/meeting';
import Sidebar from './component/sidebar';
import AnonymBox from './AnonymBox';
import  ViewBoxSection from './ViewBoxSection';
import AdminFunctionalities from "./Components/AdminFunctionalities";
import Scan from './Components/scan';
import Confirm from './Components/confirm';
import AddBlame from './Components/AddBlame';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import AdminRouteGuard from "./Components/AdminRouteGuard";
import UserRouteGuard from "./Components/UserRouteGuard";
import checkEvents from "./Components/checkEvents";



function App() {

  

  return (
      <>
          <Router >
              <Routes>
                  <Route path='/login' element={<Login></Login>}> </Route>
                  </Routes>

          </Router>

          <Router>


                      <Routes>

                          <Route path="/events" element={<UserRouteGuard component={<CheckEvents></CheckEvents>     }></UserRouteGuard>}></Route>
                          <Route path="/functionalities" element={<AdminRouteGuard component={<AdminFunctionalities></AdminFunctionalities>}></AdminRouteGuard>}></Route>
                          <Route path='/task' element={<UserRouteGuard component={<TaskContainer/>     }></UserRouteGuard>}   />
                          <Route path='/meeting'  element={<UserRouteGuard component={<Meeting />    }></UserRouteGuard>} />
                          <Route path='/anonymbox' element={<UserRouteGuard component={<AnonymBox/>   }></UserRouteGuard>}/>
                          <Route path='/profile' element={<UserRouteGuard component={<Profile />  }></UserRouteGuard>} />
                          <Route path="/scan/:meetingId" element={<UserRouteGuard component={<Scan/>  }></UserRouteGuard>} />
                          <Route path='/comments' element={<UserRouteGuard component={<ViewBoxSection/> }></UserRouteGuard>} />
                          <Route path='/blames' element={<UserRouteGuard component={<AddBlame/>   }></UserRouteGuard>} />
                      </Routes>


          </Router>

      </>
  );
}

export default App;
