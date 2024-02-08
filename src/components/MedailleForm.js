import React, { useState } from "react";
import '../Style/addEvents.css';
import {Form, Button } from 'react-bootstrap';


const MedailleForm = (props) =>{
    
    // State for the form fields
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Select 
    const [selectedMembers, setSelectedMembers] = useState("");

    //handler for the submission
    const handleMedailleSubmit = async (event) => {
      event.preventDefault(); 
  
      const users = props.selectedMembers;
      let token=localStorage.getItem('JwtToken');

      const medaille = {
        //select
          userId: props.selectedMembers,
        //
          Name:name,
          Description:description,
          
      }
      try {
      const response = await fetch('https://localhost:7181/medals', {
        method: 'POST',
        body: JSON.stringify(medaille),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token,
        }
      })
  
      if (response.ok) {
          alert('Medal added successfully');
          setName('');
          setDescription('');
          setSelectedMembers([]);

        } else {
          console.error('Failed to add medal:', response);
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
      
    };
    

    return(
          <div className='right-panel-2'>
            <Form onSubmit={handleMedailleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Insert Name</Form.Label>
                    <Form.Control 
                        type="text" className='input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </Form.Group>

                <Form.Group controlId="name">
                    <Form.Label>Insert description</Form.Label>
                    <Form.Control 
                        type="text" className='input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required 
                    />
                </Form.Group>
                        

                {/* Submit Button */}
                <div className='centered-button-container '>
                <Button variant="primary" type="submit" className='button' >
                    Confirm
                </Button>
                </div>
            </Form>
          </div>
    )



}
export default MedailleForm;
