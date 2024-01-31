import React, { useState } from 'react';
import '../Style/addEvents.css';
import { Container, Form, Button } from 'react-bootstrap';
import { PiSelectionDuotone } from "react-icons/pi";
import MembersSelect from './membersSelect';


  

const AddEvents = (props) => {  
  
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [description, setDescripion] = useState('');
  const [name, setName] = useState('');
  const [location,setLocation]= useState('');
  const [day, setDay] = useState('jj/mm/aaaa');
  const [hourIn, setHourIn] = useState('--:--');
  const [hourOut, setHourOut] = useState('--:--');
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
    else {
      errors.name=null;
    }
    

    if (day==="jj/mm/aaaa") {
      errors.day = 'Day is required';
    }else{
      errors.day=null;
    }

    if (hourIn ==="--:--") {
      errors.hourIn = 'HourIn is required';
    }
    else{
      errors.hourIn=null;
    }

    if (hourOut==="--:--") {
      errors.hourOut = 'HourIn is required';
    }
    else{
      errors.hourOut=null;
    }

    if (hourOut<hourIn)
    {
      errors.time='The HourOut should be after the HourIn'
    }
    else{
      errors.time=null;
    }

    if(!location.trim()){
      errors.location="Location is required"
    }
    else{
      errors.location=null;
    }


    // Add more validation as needed

    if (Object.keys(errors).length === 0) {
      // If no errors, submit the form or perform the desired action
      console.log(selectedMembers);
      console.log('Form submitted successfully!');
      setSelectedMembers([]);
      setDescripion('');
      setName('');
      setLocation('');
      setDay('jj/mm/aaaa');
      setHourIn('--:--');
      setHourOut('--:--');
      setFormErrors({});
    } else {
      // Update state with validation errors
      setFormErrors(errors);
    }
    console.log(formErrors);

  };

   return(
      <Form className='event-form ' onSubmit={handleSubmit}>
        <MembersSelect members={props.members} 
                    selectedMembers={selectedMembers}
                    handleSelectChange={handleSelectChange}
                    />
        <div className='right-panel-2'>
           {/* Text Input */}
        <Form.Group controlId="name">
          <Form.Label>Insert Event Info</Form.Label>
          <Form.Control type="text"  placeholder="Enter some text" className='input'  value={name}
            onChange={(e) => setName(e.target.value)}/>
              <div className='error' >{formErrors.name && <div className="error">{formErrors.name}</div>}
              </div> 

        </Form.Group>

        {/* Day Input */}
        <Form.Group controlId="day" className='day-container'>
          <Form.Label>Insert Event Day</Form.Label>
          <Form.Control type="date" placeholder="Select a day" className='input' value={day}
            onChange={(e) => setDay(e.target.value)}/>
              <div className='error' > {formErrors.day && <div className="error">{formErrors.day}</div>}
              </div>
        </Form.Group>
        <div className='sub-container'>
        {/* Time Input */}
        <Form.Group className='left-panel-sub' controlId="hourIn">
          <Form.Label className='hour-label'>Insert Event Hour in</Form.Label>
          <Form.Control type="time" placeholder="Select a time" className='input' value={hourIn}
            onChange={(e) => setHourIn(e.target.value)} />
                   <div className='error' >   {formErrors.hourIn && <div className="error">{formErrors.hourIn}</div>}
            </div>
        </Form.Group>

        <Form.Group className='right-panel-sub' controlId="hourOut">
          <Form.Label className='hour-label'>Insert Event Hour Out</Form.Label>
          <Form.Control type="time" placeholder="Select a time" className='input' value={hourOut}
            onChange={(e) => setHourOut(e.target.value)} />
                  <div className='error' >    {formErrors.hourOut && <div className="error">{formErrors.hourOut}</div>}
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
        <Button variant="primary" type="submit" className='buttonform' style={{height:"4vh"}} >
          Confirm
        </Button>
        </div>
        </div>
      </Form>
    
   
    );
  }
export default AddEvents;