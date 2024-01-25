import React, { useState  } from 'react';
import '../Style/addEvents.css';
import {  Form } from 'react-bootstrap';

  

const MembersSelect = (props) => {  
  
    const [selectedMembers, setSelectedMembers] = useState([]);
 

  
  // Transform members array into options for react-select
  const selectOptions = props.members.map((member) => ({
    value: member.id,
    label: (
      <div>
        {member.name}
      </div>
    ),
  }));

   return(


      <div className='left-panel-2'>
        {/* Multiple Select */}
        <Form.Group controlId="multipleSelect" className="full-width-select">
        <Form.Control as="div" className="full-width-div">
  {props.members.map((member) => (
    <div key={member.id} className="checkbox-label" onClick={() => props.handleSelectChange(member.id)}> 
    <Form.Check
      key={member.id}
      type="checkbox"
      label={member.name}
      checked={props.selectedMembers.includes(member.id)}
      onChange={() => props.handleSelectChange(member.id)}
    />
    </div>
  ))}
  </Form.Control>
</Form.Group>
        

        </div>
        
    );
  }
export default MembersSelect;