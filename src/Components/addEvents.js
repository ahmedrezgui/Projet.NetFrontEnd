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

  function formatToDotNetDateTime(day, hourIn) {
    // Assuming day is in the format 'YYYY-MM-DD' and hourIn is in the format 'HH:mm'
    const formattedDateTime = `${day}T${hourIn}:00`;
  
    // Create a JavaScript Date object from the formatted string
    const jsDate = new Date(formattedDateTime);
  
    // Get the ISO string representation, which is compatible with .NET DateTime
    const dotNetDateTime = jsDate.toISOString();
  
    return dotNetDateTime;
  }
  
  const handleSubmit = async (e) => {
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

    if(!location.trim()){
      errors.location="Location is required"
    }
    else{
      errors.location=null;
    }

    console.log("Errors:", errors);
    // Add more validation as needed

    if (Object.values(errors).every(value => value === null)){
      let token=localStorage.getItem('JwtToken');
      let id= "3fa85f64-5717-4562-b3fc-2c963f66afa6";
      const eventData = {
        id,
        name,
        day: formatToDotNetDateTime(day, hourIn),
        location,
        description
            };
      console.log(eventData);
    
      try {
        const response = await fetch('https://localhost:7181/api/Events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token,
          },
          body: JSON.stringify(eventData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Event data posted successfully!');
        // Handle any additional actions upon successful submission
      } catch (error) {
        console.error('Error posting event data:', error);
      }

      // If no errors, submit the form or perform the desired action
      console.log(selectedMembers);
      console.log('Form submitted successfully!');
      setSelectedMembers([]);
      setDescripion('');
      setName('');
      setLocation('');
      setDay('jj/mm/aaaa');
      setHourIn('--:--');
      setFormErrors({});
    } else {
      // Update state with validation errors
      setFormErrors(errors);
      console.log(formErrors);
    }
    //

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

      
        <div className='sub-container'>
                  {/* Day Input */}

        <Form.Group controlId="day" className='left-panel-sub'>
          <Form.Label className='hour-label'>Insert Event Day</Form.Label>
          <Form.Control type="date" placeholder="Select a day" className='input' value={day}
            onChange={(e) => setDay(e.target.value)}/>
              <div className='error' > {formErrors.day && <div className="error">{formErrors.day}</div>}
              </div>
        </Form.Group>
        {/* Time Input */}
        <Form.Group className='left-panel-sub' controlId="hourIn">
          <Form.Label className='hour-label'>Insert Event Hour in</Form.Label>
          <Form.Control type="time" placeholder="Select a time" className='input' value={hourIn}
            onChange={(e) => setHourIn(e.target.value)} />
                   <div className='error' >   {formErrors.hourIn && <div className="error">{formErrors.hourIn}</div>}
            </div>
        </Form.Group>

        {/* <Form.Group className='right-panel-sub' controlId="hourOut">
          <Form.Label className='hour-label'>Insert Event Hour Out</Form.Label>
          <Form.Control type="time" placeholder="Select a time" className='input' value={hourOut}
            onChange={(e) => setHourOut(e.target.value)} />
                  <div className='error' >    {formErrors.hourOut && <div className="error">{formErrors.hourOut}</div>}
                </div>
        </Form.Group> */}

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