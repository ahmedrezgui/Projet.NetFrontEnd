import React ,{useState , useEffect} from 'react';
import '../Style/addEvents.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AddMember from "./AddMember";
import {  Button } from 'react-bootstrap';




const AddWork = () => {
    const [selectedMembers, setSelectedMembers] = useState([]);
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
                    if(response.status===401){
                      {/*window.location.href = '/login';*/}
                    }
                    throw new Error('Network response was not ok');
                }

                // Parse the JSON data
                const data = await response.json();



                setAllMembers(data);
                setMembers(data);

            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        // Call the fetchEvents function
        fetchMembers();
    }, []); // Empty dependency array ensures the effect runs only once (on mount)

    const handleDelete =async () => {


        try {
            let token=localStorage.getItem('JwtToken');
            // Fetch data from the API
            const response = await fetch('https://localhost:7181/Auth/deletemembers', {
                method: 'DELETE',
                headers: {
                    'Authorization': 'bearer ' + token,
                    'Content-Type': 'application/json', // Specify the appropriate Content-Type
                },
                body: JSON.stringify(selectedMembers), // Convert the body to a JSON string
            });
            // Check if the response is successful
            if (response.status!==204) {
                throw new Error('Network response was not ok');
            }else {
                let mmbr=[];
                allMembers.map((member)=>{if(!selectedMembers.includes(member.id)){
                    mmbr.push(member)
                }


                })
                setAllMembers(mmbr)
                setMembers(mmbr)
                setSelectedMembers([]);

            }

        } catch (error) {
            console.error('Error fetching events:', error);
        }

    }
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
                    height: "100vh",
                    marginLeft: "5vh",
                    borderRadius: "3vh",
                    backgroundColor: "rgb(235, 235, 235)"
                }}>
                    <form className="search-form">
                        <div className="input-wrapper">
                            <input type="text" placeholder="Search..." value={searchValue}
                                   onChange={handleInputChange}/>
                            <div className="icon-placeholder">
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>
                        </div>
                    </form>
                    <div className='conteneur'>

                        <div className='left-panel-1'>
                            Delete Members
                        </div>
                        <div className='left-panel-1' style={{marginLeft:"3vw",width:"51%"}}>
                          <span style={{marginLeft:"5vw"}}>Add A Member</span>
                        </div>

                    </div>
                    <AddMember members={members} selectedMembers={selectedMembers}
                               setSelectedMembers={setSelectedMembers}></AddMember>
                    <Button variant="primary" className='buttonform' style={{marginTop:"0", marginLeft:"5.3vw",backgroundColor:"#A61E37",border:"0px"}} onClick={(e) => {
                        e.preventDefault();
                        handleDelete()
                    }}>Delete
                    </Button>

                </Container>
            </div>


        </>
    )
}
export default AddWork;