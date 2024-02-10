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
    // Form type styles
    const formTypeStyles = {
        backgroundColor: '#CCCAC7',
        marginLeft: '33%',
        marginRight: '-24%',
        cursor: 'pointer'
    };
    const inactiveFormStyles={
        backgroundColor:'rgb(204, 202, 199)'
    }
    const  formTypeActiveStyles={
        backgroundColor:'#F7C159'
    }

// Container styles
    const containerStyles = {
        display: 'flex',
        flexWrap: 'nowrap',
        backgroundColor: '#EBEBEB',
        height: '10%'
    };

// Right panel 1 styles
    const rightPanel1Styles = {
        width: '50%',
        padding: '5%',
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        paddingBottom: '0%',
        textAlign: 'center'
    };

// Left panel 1 styles
    const leftPanel1Styles = {
        width: '35%',
        marginRight: '15%',
        paddingBottom: '0'
    };

// Sub container styles
    const subContainerStyles = {
        display: 'flex',
        flexWrap: 'nowrap'
    };

// Left panel sub styles
    const leftPanelSubStyles = {
        backgroundColor: 'white',
        width: '50%',
        padding: '5%'
    };

// Left panel 2 styles
    const leftPanel2Styles = {
        backgroundColor: 'white',
        width: '50%',
        margin: '2%',
        marginTop: '0',
        padding: '5%',
        border: '1px solid #ced4da',
        borderRadius: '15px'
    };

// Right panel sub styles
    const rightPanelSubStyles = {
        backgroundColor: 'white',
        width: '50%',
        padding: '5%'
    };

// Right panel 2 styles
    const rightPanel2Styles = {
        textAlign: 'center',
        backgroundColor: 'white',
        width: '50%',
        margin: '2%',
        padding: '5%',
        border: '1px solid #ced4da',
        borderRadius: '15px',
        marginTop: '0'
    };

// Event form label styles
    const eventFormLabelStyles = {
        display: 'block'
    };

// Input styles
    const inputStyles = {
        backgroundColor: '#E5E5E5 !important'
    };

// Full width select styles
    const fullWidthSelectStyles = {
        height: '100%',
        backgroundColor: '#E5E5E5 !important'
    };

// Centered button container styles
    const centeredButtonContainerStyles = {
        marginTop: '10%'
    };

// Button styles
    const buttonStyles = {
        button: {
            '--bs-btn-bg': '#4D4D4D !important',
            borderRadius: '19px !important'
        },
        buttonHover: {
            backgroundColor: '#F7C159 !important',
            borderColor: '#F7C159 !important'
        }
    };

// Form check input styles
    const formCheckInputStyles = {
        formCheckInput: {
            backgroundColor: '#EBEBEB !important',
            borderColor: '#EBEBEB !important'
        },
        formCheckInputChecked: {
            backgroundColor: '#F7C159 !important',
            borderColor: '#F7C159 !important'
        }
    };

// Hour label styles
    const hourLabelStyles = {
        fontSize: 'small'
    };

// Day container styles
    const dayContainerStyles = {
        marginTop: '5%'
    };

// Option styles
    const optionStyles = {
        fontSize: '20px',
        textAlign: 'center',
        padding: '4%'
    };


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
        setSelectedMembers("");
      } else {
        // If no, set it as the selected member
        setSelectedMembers(memberId);
      }
    };




    return(


        <Container className='Big-container'  style = {{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div className='container' style={containerStyles}>
                <div className='left-panel-1' style={leftPanel1Styles}>
                    select Member
                </div>
                <div className='right-panel-1' style={rightPanel1Styles}>
                    <div className={`formtype ${activeForm === 'medaille' ? 'formtype-active' : ''}`}
                        style={activeForm === "medaille"?formTypeActiveStyles:inactiveFormStyles}
                         onClick={() => setActiveForm('medaille')}>
                        Medaille
                    </div>
                    <div  className={`formtype `}
                          style={activeForm === 'blame'? formTypeActiveStyles :inactiveFormStyles}
                        onClick={() => setActiveForm('blame')} >
                        Blame
                    </div>
                </div>
            </div>
            <div className='event-form ' style={{fonFamily: "Inter" ,
                display: "flex",
                flexWrap: "nowrap" ,
                backgroundColor: "#EBEBEB"}} >
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