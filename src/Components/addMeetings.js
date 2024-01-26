import React, { useState , useEffect } from 'react';
import '../Style/addEvents.css';
import { Container, Form, Button } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import Select from 'react-select';
import MembersSelect from './membersSelect';


  

const AddMeetings = (props) => {  
  

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [description, setDescripion] = useState('');
  const [name, setName] = useState('');
  const [location,setLocation]= useState('');
  const [day, setDay] = useState('jj/mm/aaaa');
  const [hour, setHour] = useState('--:--');
  const [formErrors, setFormErrors] = useState({});
 
  const handleSelectChange = (memberId) => {
    // Check if the memberId is already in selectedMembers
    if (selectedMembers.includes(memberId)) {
      // If yes, remove it
      setSelectedMembers((prevSelected) =>
        prevSelected.filter((id) => id !== memberId)
      );
    } else {
      // If no, add it
      setSelectedMembers((prevSelected) => [...prevSelected, memberId]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform validation
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (day==="jj/mm/aaaa") {
      errors.day = 'Day is required';
    }

    if (hour==="--:--") {
      errors.hour = 'HourIn is required';
    }

    if(!location.trim()){
      errors.location="Location is required"
    }

    if(!selectedMembers.length===0)
    {
      errors.selectedMembers="At least one member is required"
    }

    // Add more validation as needed

    if (Object.keys(errors).length === 0) {
      setSelectedMembers([]);
      setDescripion('');
      setName('');
      setLocation('');
      setDay('jj/mm/aaaa');
      setHour('--:--');
      setFormErrors({});
    } else {
      // Update state with validation errors
      setFormErrors(errors);
    }
  };
  // Transform members array into options for react-select
  const selectOptions = props.members.map((member) => ({
    value: member.id,
    label: (
      <div>
        {member.name}
        <div className='icon'>
          <TiTick />
        </div>
      </div>
    ),
  }));

   return(

      <Form className='event-form ' onSubmit={handleSubmit}        >

<MembersSelect members={props.members} 
                    selectedMembers={selectedMembers}
                    handleSelectChange={handleSelectChange}
                    />       
                    <div className='error' >{formErrors.selectedMembers && <div className="error">{formErrors.selectedMembers}</div>}
              </div>
                     <div className='right-panel-2'>
           {/* Text Input */}
        <Form.Group controlId="name">
          <Form.Label>Insert Meeting Info</Form.Label>
          <Form.Control type="text"  placeholder="Enter some text" className='input'  value={name}
            onChange={(e) => setName(e.target.value)}/>
              <div className='error' >{formErrors.name && <div className="error">{formErrors.name}</div>}
              </div> 

        </Form.Group>

   
        <div className='sub-container'>
        {/* Time Input */}
        <Form.Group className='left-panel-sub' controlId="hourIn">
          <Form.Label className='hour-label'>Insert Meeting Day</Form.Label>
          <Form.Control type="date" placeholder="Select a time" className='input' value={day}
            onChange={(e) => setDay(e.target.value)} />
                   <div className='error' >   {formErrors.day && <div className="error">{formErrors.day}</div>}
            </div>
        </Form.Group>

        <Form.Group className='right-panel-sub' controlId="hourOut">
          <Form.Label className='hour-label'>Insert Meeting Hour </Form.Label>
          <Form.Control type="time" placeholder="Select a time" className='input' value={hour}
            onChange={(e) => setHour(e.target.value)} />
                  <div className='error' >    {formErrors.hour && <div className="error">{formErrors.hour}</div>}
                </div>
        </Form.Group>

        </div>
        <div className='error' >  
        {formErrors.time && <div className="error">{formErrors.time}</div>}
        </div>
         {/* Text Input */}
         <Form.Group  controlId="location">
          <Form.Label >Insert Event Location </Form.Label>
          <Form.Control type="text" placeholder="Enter some text" className='input' value={location}
            onChange={(e) => setLocation(e.target.value)}/>
                   <div className='error' >    {formErrors.location && <div className="error">{formErrors.location}</div>}
                    </div>
        </Form.Group>
        
         {/* Text Input */}
         <Form.Group  controlId="description">
          <Form.Label >Insert Event Description </Form.Label>
          <Form.Control type="text" placeholder="Enter some text" className='input' value={description}
            onChange={(e) => setDescripion(e.target.value)}/>
        </Form.Group>

       

        {/* Submit Button */}
        <div className='centered-button-container '>
        <Button variant="primary" type="submit" className='button' >
          Confirm
        </Button>
        </div>
        </div>
      </Form>
    
   
    );
  }
export default AddMeetings;