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
    const [allMembers, setAllMembers] = useState([]);
    const [searchValue, setSearchValue] = useState('');



    useEffect(() => {

    const fetchMembers = async () => {
      try {
        let token=localStorage.getItem('JwtToken');
        // Fetch data from the API
        const response = await fetch('https://localhost:7181/Auth',{
          headers:{
          'Authorization':'bearer '+token,
          }
        });
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const data = await response.json();

        // Update the state with the fetched events
      
        setAllMembers(data);
        setMembers(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    // Call the fetchEvents function
    fetchMembers();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        setSearchValue(inputValue);
        if (!inputValue) {
            setMembers(allMembers);
            return;
        }
        inputValue=inputValue.toLowerCase();
        let mmbr=[];

        allMembers.map((member) => {
           let memberFirstName=member.firstName.toLowerCase();
           let memberLastName=member.lastName.toLowerCase();
           let memberFullName=memberFirstName+" "+memberLastName;
           let memberReverseFullName=memberLastName+" "+memberFirstName;
            if(memberFirstName.startsWith(inputValue) || memberLastName.startsWith(inputValue) || memberReverseFullName.startsWith(inputValue) || memberFullName.startsWith(inputValue)){
                mmbr.push(member);
            }
        })
       setMembers(mmbr);
    };

return (<>



          <div style={{width: "90%",height:"90vh",borderRadius:"3vh"}}>

            <Container className='Big-container' style={{
              width: "100vh",
              marginLeft: "5vh",
              borderRadius: "3vh",
              backgroundColor: "rgb(235, 235, 235)"
            }}>
              <form className="search-form" >
                <div className="input-wrapper">
                  <input type="text" placeholder="Search..." value={searchValue} onChange={handleInputChange}/>
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