import React, { useState } from "react";
import '../Style/addEvents.css';
import {Form, Button } from 'react-bootstrap';

const SelectMember = () =>{

    return(
                <div className='left-panel-2'>
                    {/* Multiple Select */}
                    <Form.Group controlId="multipleSelect" className="full-width-select" >
                        <Form.Control as="select" multiple className="full-width-select" >
                            <option className='option'>Option 1</option>
                            <option className='option'>Option 2</option>
                            <option className='option'>Option 3</option>
                            <option className='option'>Option 1</option>
                            <option className='option'>Option 2</option>
                            <option className='option'>Option 3</option>  
                            <option className='option'>Option 1</option>
                            <option className='option'>Option 2</option>
                            <option className='option'>Option 3</option> 
                            <option className='option'>Option 1</option>
                            <option className='option'>Option 2</option>
                            <option className='option'>Option 3</option>  
                            <option className='option'>Option 1</option>
                            <option className='option'>Option 2</option>
                            <option className='option'>Option 3</option>
                        </Form.Control>
                    </Form.Group>
                </div>
    )
}
export default SelectMember;