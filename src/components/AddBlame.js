import React from "react";
import { useState, useEffect } from "react";
import BlameForm from "./BlameForm";
import MedailleForm from "./MedailleForm";
import { Container } from 'react-bootstrap';
import '../Style/addEvents.css';
import SelectMember from "./SelectMember";

const AddBlame = () => {
    const [activeForm, setActiveForm] = useState('medaille');
     
    const [selectedMembers, setSelectedMembers] = useState("");
    const [members, setMembers] = useState([]);
    const [allMembers, setAllMembers] = useState([]);

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
    }, []);

    const handleSelectChange = (memberId) => {
      // Check if the clicked memberId is already selected
      if (selectedMembers === memberId) {
        // If yes, deselect it
        setSelectedMembers(null);
      } else {
        // If no, set it as the selected member
        setSelectedMembers(memberId);
      }
    };
    



    return(


        <Container className='Big-container'>
            <div className='container'>
                <div className='left-panel-1'>
                    select Member
                </div>
                <div className='right-panel-1'>
                    <div className={`formtype ${activeForm === 'medaille' ? 'formtype-active' : ''}`}
                        onClick={() => setActiveForm('medaille')}>
                        Medaille
                    </div>
                    <div  className={`formtype ${activeForm === 'blame' ? 'formtype-active' : ''}`}
                        onClick={() => setActiveForm('blame')} >
                        Blame
                    </div>
                </div>
            </div>
            <div className='event-form '>
                <SelectMember members={members} 
                    selectedMembers={selectedMembers}
                    handleSelectChange={handleSelectChange}/>
                    
                {activeForm === 'medaille' && <MedailleForm  members={members} 
                    selectedMembers={selectedMembers}
                    handleSelectChange={handleSelectChange}/>}

                {activeForm === 'blame' && <BlameForm  members={members} 
                    selectedMembers={selectedMembers}
                    handleSelectChange={handleSelectChange}/>}
            </div>
      </Container>
        // <div>
        //     <div>
        //         <button  onClick={MedailleButton}>Medaille</button>
        //         <button  onClick={BlameButton}>Blame</button>
        //     </div>
            
        //     <div>
        //         {activeForm === 'medaille' && <MedailleForm />}
        //         {activeForm === 'blame' && <BlameForm />}
        //     </div>
        // </div>
    );
}
export default AddBlame;