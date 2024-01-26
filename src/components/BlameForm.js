import React, { useState } from 'react';
import '../Style/addEvents.css';
import {Form, Button } from 'react-bootstrap';



const BlameForm = () => {  
  
    // State for the form fields
    const [reason, setReason] = useState('');
    const [isBlameChecked, setIsBlameChecked] = useState(true);
    const [isAvertissementChecked, setIsAvertissementChecked] = useState(false);
    // Select 
    const [selectedUserId, setSelectedUserId] = useState(null);
  
    //checkboxes
    const handleBlameChange = () => {
      setIsBlameChecked(true);
      setIsAvertissementChecked(false);
    };
  
    const handleAvertissementChange = () => {
      setIsBlameChecked(false);
      setIsAvertissementChecked(true);
    };


    // Handler for form submission
    const handleBlameSubmit = async (event) => {
      event.preventDefault(); 
  
      const blame = {
        //select
          UserId: selectedUserId,
        //
          Object:reason,
          Name: isBlameChecked ? "Blame" : "Advertisement" ,
          Date: new Date().toISOString(),
      }
      try {
      const response = await fetch('/api/Profile', {
        method: 'POST',
        body: JSON.stringify(blame),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const json = await response.json()
  
      if (response.ok) {
          const result = await response.json();
          alert('Blame added successfully');
          setReason('');
          setSelectedUserId(null);

        } else {
          console.error('Failed to add blame:', response);
        }
      } catch (error) {
        console.error('There was an error!', error);
      }
      
    };


    return (
          <div className='right-panel-2'>
            <Form  onSubmit={handleBlameSubmit}>
              {/* Text Input */}
              <Form.Group controlId="name">
                <Form.Label>Insert Reason</Form.Label>
                <Form.Control 
                    type="text" className='input'
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    required 
                />
              </Form.Group>

            
              {/* Text Input */}
              <div className="mb-3">
                  <Form.Check // prettier-ignore
                    type='checkbox'
                    id={'default-checkbox'}
                    label={'Blame'}
                    checked={isBlameChecked}
                    onChange={handleBlameChange}
                />
              </div>  

              <div className="mb-3">
                <Form.Check // prettier-ignore
                  type='checkbox'
                  id={'default-checkbox'}
                  label={'Avertissement'}
                  checked={isAvertissementChecked}
                  onChange={handleAvertissementChange}
                />
              </div>       

              {/* Submit Button */}
              <div className='centered-button-container '>
              <Button variant="primary" type="submit" className='button' >
                Confirm
              </Button>
              </div>
            </Form>
          </div>
    );
  }
export default BlameForm;