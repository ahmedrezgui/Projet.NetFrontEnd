import React from "react";
import { useState } from "react";
import BlameForm from "./BlameForm";
import MedailleForm from "./MedailleForm";
import { Container, Form, Button } from 'react-bootstrap';
import '../Style/addEvents.css';
import SelectMember from "./SelectMember";

const AddBlame = () => {
    const [activeForm, setActiveForm] = useState('medaille');
    
    

      
     
    return(


        <Container className='Big-container'>
            <div className='container'>
                <div className='left-panel-1'>
                    select Member
                </div>
                <div className='right-panel-1'>
                    <div className={`formtype ${activeForm === 'medaille' ? 'formtype-active' : ''}`}
                        onClick={() => setActiveForm('medaille')}>
                        Medaille
                    </div>
                    <div  className={`formtype ${activeForm === 'blame' ? 'formtype-active' : ''}`}
                        onClick={() => setActiveForm('blame')} >
                        Blame
                    </div>
                </div>
            </div>
            <div className='event-form '>
                <SelectMember/>
                {activeForm === 'medaille' && <MedailleForm />}
                {activeForm === 'blame' && <BlameForm />}
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