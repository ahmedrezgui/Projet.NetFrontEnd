import React, { useState  } from 'react';
import '../Style/addEvents.css';
import {  Form } from 'react-bootstrap';

  

const MembersSelect = (props) => {  
  
    const [selectedMembers, setSelectedMembers] = useState([]);
    const selectStyle=(props.selectStyle)?{height:props.selectStyle}:{};


  
   return(


      <div className='left-panel-2' style={selectStyle} >
        {/* Multiple Select */}
        <Form.Group controlId="multipleSelect" className="full-width-select">
        <Form.Control as="div" className="full-width-div">
  {props.members.map((member) => (
    <div key={member.id} className="checkbox-label" onClick={() => props.handleSelectChange(member.id)}> 
    <Form.Check
      key={member.id}
      type="checkbox"
      label={member.lastName+" "+member.firstName}
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