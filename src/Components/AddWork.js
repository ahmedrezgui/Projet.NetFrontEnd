import React ,{useState , useEffect} from 'react';
import '../Style/addEvents.css';
import { Container } from 'react-bootstrap';
import AddEvents from './addEvents';
import AddTasks from './addTasks';
import AddMeetings from './addMeetings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

  

const AddWork = () => {
    const [state, setState] = useState('Task');
    const [members, setMembers] = useState([]);


   
  useEffect(() => {
    const data2 = [
      {
        "id": "59c8616b-e192-4298-be85-0353339874a6",
        "name": "Jhon Paul La crème"
      },
      {
        "id": "eeee3152-5ebe-4b5e-af1f-2ff62103ea79",
        "name": "Gustave Grenouille"
      },
      {
        "id": "c1328496-7b7d-46e3-8bb5-38725136bf52",
        "name": "Marc Club"
      },
      {
        "id": "313f1375-587b-43ff-becb-50efa45ddc42",
        "name": "Papasdodoupolus "
      },
      {
        "id": "59c8616b-e192-4298-be85-0353339874a6",
        "name": "Jhon Paul La crème"
      },
      {
        "id": "eeee3152-5ebe-4b5e-af1f-2ff62103ea79",
        "name": "Gustave Grenouille"
      },
      {
        "id": "c1328496-7b7d-46e3-8bb5-38725136bf52",
        "name": "Marc Club"
      },
      {
        "id": "313f1375-587b-43ff-becb-50efa45ddc42",
        "name": "Papasdodoupolus "
      },
      {
        "id": "59c8616b-e192-4298-be85-0353339874a6",
        "name": "Jhon Paul La crème"
      },
      {
        "id": "eeee3152-5ebe-4b5e-af1f-2ff62103ea79",
        "name": "Gustave Grenouille"
      },
      {
        "id": "c1328496-7b7d-46e3-8bb5-38725136bf52",
        "name": "Marc Club"
      },
      {
        "id": "313f1375-587b-43ff-becb-50efa45ddc42",
        "name": "Papasdodoupolus "
      },
      {
        "id": "59c8616b-e192-4298-be85-0353339874a6",
        "name": "Jhon Paul La crème"
      },
      {
        "id": "eeee3152-5ebe-4b5e-af1f-2ff62103ea79",
        "name": "Gustave Grenouille"
      },
      {
        "id": "c1328496-7b7d-46e3-8bb5-38725136bf52",
        "name": "Marc Club"
      },
      {
        "id": "313f1375-587b-43ff-becb-50efa45ddc42",
        "name": "Papasdodoupolus "
      }
    ];

    setMembers(data2);
  }, []);
return (<>



          <div style={{width: "90%",height:"90vh",borderRadius:"3vh"}}>

            <Container className='Big-container' style={{
              width: "100vh",
              marginLeft: "5vh",
              borderRadius: "3vh",
              backgroundColor: "rgb(235, 235, 235)"
            }}>
              <form className="search-form">
                <div className="input-wrapper">
                  <input type="text" placeholder="Search..."/>
                  <div className="icon-placeholder">
                    <FontAwesomeIcon icon={faSearch}/>
                  </div>
                </div>
              </form>
              <div className='conteneur'>

                <div className='left-panel-1'>
                  Select Member
                </div>
                <div className='right-panel-1'>
                  <div className='formtype' style={{backgroundColor: state === "Task" ? '#F7C159' : ' #CCCAC7'}}
                       onClick={(e) => {
                         e.preventDefault();
                         setState('Task');
                       }}>
                    Task
                  </div>
                  <div className='formtype' style={{backgroundColor: state === "Meeting" ? '#F7C159' : ' #CCCAC7'}}
                       onClick={(e) => {
                         e.preventDefault();
                         setState('Meeting');
                       }}>
                    Meeting
                  </div>
                  <div className='formtype' style={{backgroundColor: state === "Event" ? '#F7C159' : ' #CCCAC7'}}
                       onClick={(e) => {
                         e.preventDefault();
                         setState('Event');
                       }}>
                    Event
                  </div>
                </div>
              </div>
              {state === 'Event' ? (
                  <AddEvents members={members}/>
              ) : state === 'Meeting' ? (
                  <AddMeetings members={members}/>
              ) : (
                  <AddTasks members={members}/>
              )}

            </Container>
          </div>



    </>
)
}
export default AddWork;