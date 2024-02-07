import React, { useState } from 'react';
import '../Style/addEvents.css';
import { Form, Button } from 'react-bootstrap';
import MembersSelect from './membersSelect';

  

const AddTasks = (props) => {  
  
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [description, setDescripion] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('jj/mm/aaaa');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Perform validation
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (day==="jj/mm/aaaa") {
      errors.day = 'Day is required';
    }
    
    if (!description.trim()) {
        errors.description = 'Details are required';
      }
    


    // Add more validation as needed

    if (Object.keys(errors).length === 0) {
      const users = selectedMembers.map((value, index) => (value));

      let token=localStorage.getItem('JwtToken');
      const taskData = {
        name,
        deadLine: `${day}T23:59:59:00Z`,
        description,
        users
            };
      console.log(taskData);
    
      try {
        const response = await fetch('https://localhost:7181/Task/Create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token,
          },
          body: JSON.stringify(taskData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        console.log('Event data posted successfully!');
        // Handle any additional actions upon successful submission
      } catch (error) {
        console.error('Error posting event data:', error);
      }
      setSelectedMembers([]);
      setDescripion('');
      setName('');
      setDay('jj/mm/aaaa');
      setFormErrors({});
    } else {
      // Update state with validation errors
      setFormErrors(errors);
    }
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
          <Form.Label>Insert Task Name</Form.Label>
          <Form.Control type="text"  placeholder="Enter some text" className='input'  value={name}
            onChange={(e) => setName(e.target.value)}/>
              <div className='error' >{formErrors.name && <div className="error">{formErrors.name}</div>}
              </div> 

        </Form.Group>

              {/* Text Input */}
              <Form.Group  controlId="description">
          <Form.Label >Insert Task Details </Form.Label>
          <Form.Control type="text" placeholder="Enter some text" className='input' value={description}
            onChange={(e) => setDescripion(e.target.value)}/>
        <div className='error' >{formErrors.description && <div className="error">{formErrors.description}</div>}
              </div>
        </Form.Group>

        {/* Day Input */}
        <Form.Group controlId="day" className='day-container'>
          <Form.Label>Insert Task Deadline</Form.Label>
          <Form.Control type="date" placeholder="Select a day" className='input' value={day}
            onChange={(e) => setDay(e.target.value)}/>
              <div className='error' > {formErrors.day && <div className="error">{formErrors.day}</div>}
              </div>
        </Form.Group>
        


       

        {/* Submit Button */}
        <div className='centered-button-container '>
        <Button variant="primary" type="submit" className='buttonform' >
          Confirm
        </Button>
        </div>
        </div>
      </Form>
    
   
    );
  }
export default AddTasks;