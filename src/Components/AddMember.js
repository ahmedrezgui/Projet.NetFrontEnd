import React, { useState } from 'react';
import '../Style/addEvents.css';
import { Form, Button } from 'react-bootstrap';
import MembersSelect from './membersSelect';
import { useEffect } from 'react';
import {redirect} from "react-router-dom";




const AddTasks = (props) => {

   const selectedMembers=props.selectedMembers;
   const setSelectedMembers=props.setSelectedMembers;
  const [generalError, setGeneralError] = useState('');
  const [generalSuccess, setGeneralSuccess] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // assuming default is false
    const [formErrors, setFormErrors] = useState({
        lastName: '',
        firstName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: '',
        // Add other fields here for validation errors
    });

    useEffect(() => {
        let timeoutId;
        if (generalSuccess !== '') {
            timeoutId = setTimeout(() => {
                setGeneralSuccess('');
            }, 4000); // 30 seconds
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [generalSuccess]);

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
        setGeneralError('')
        setGeneralSuccess('')
        let nbrerror=0;
        const errors = {
            lastName: '',
            firstName: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: '',

        };

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
            nbrerror++;
        }
        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
            nbrerror++;
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
            nbrerror++;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            nbrerror++;
        }
        if (!password.trim()) {
            errors.password = 'Password is required';
            nbrerror++;
        }else if(password.length<6){
            errors.password = 'Password must be at least 6 characters long';
            nbrerror++;
        }
        if (!phoneNumber.trim()) {
            errors.phoneNumber = 'Phone number is required';
            nbrerror++;
        }else if (!/^\d{8}$/.test(phoneNumber)) {
            errors.phoneNumber = 'Phone number is invalid';
            nbrerror++;
        }
        if (!address.trim()) {
            errors.address = 'Address is required';
            nbrerror++;
        }else if (!/^[a-zA-Z0-9\s,.'-]{3,}$/.test(address)) {
            errors.address = 'Address is invalid';
            nbrerror++;
        }



        if (nbrerror === 0) {
            const userData = {
               "LastName": lastName,
                "FirstName": firstName,
                "Email": email,
                "PasswordHash": password,
                "PhoneNumber": phoneNumber,
                "Adress": address,
                "IsAdmin": isAdmin
            };



            let token=localStorage.getItem('JwtToken');


            try {
                const response = await fetch('https://localhost:7181/Auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'bearer ' + token,
                    },
                    body: JSON.stringify(userData),
                });


                if (!response.ok) {
                   if(response.status===409) {

                       errors.email = 'Email already exists';



                       throw new Error('Email already exists');
                   }else if(response.status===401){
                       window.location.href = '/login';
                   }
                   else {

                       throw new Error('Network response was not ok');
                   }
                }else {
                    setGeneralSuccess('User added successfully')
                    setLastName('');
                    setFirstName('');
                    setEmail('');
                    setPassword('');
                    setPhoneNumber('');
                    setAddress('');
                    setIsAdmin(false);
                }


                // Handle any additional actions upon successful submission
            } catch (error) {
                if (error.name === 'AbortError') {
                     setGeneralError('Request aborted')
                    console.error('Request aborted:', error);
                } else if (error.message === 'Failed to fetch') {
                   setGeneralError('Network error: Failed to fetch')
                    console.error('Network error: Failed to fetch');
                } else {
                    if(errors.email!=='Email already exists'){
                        setGeneralError('Error posting event data:')
                        console.error('Error posting event data:', error);
                    }

                }
            }


        }

        setFormErrors(errors);

    };

    return(
        <Form className='event-form ' onSubmit={handleSubmit}>



                <MembersSelect members={props.members}
                               selectedMembers={selectedMembers}
                               handleSelectChange={handleSelectChange}
                               selectStyle={"70vh"}
                               formErrors={formErrors}
                />



            <div className='right-panel-2' style={{height:"70vh"}}>
                <Form.Group controlId="lastname">
                    {generalError!=='' ? <div style={{color:"red"}}>{generalError}</div>: ""}
                    {generalSuccess!=='' ? <div style={{color:"green"}}>{generalSuccess}</div>: ""}
                    <Form.Label style={{ marginTop: generalError !== ''||generalSuccess !=='' ? "1vh" : null }}>{formErrors.lastName !== '' ? <div style={{color:"red"}}>{formErrors.lastName}</div>: "Insert Last Name"}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Last Name"
                        className='input'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="firstname">
                    <Form.Label>{formErrors.firstName !=='' ?
                            <div style={{color:"red"}}>{formErrors.firstName}</div>
                        : "Insert First Name"}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your First Name"
                        className='input'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>{formErrors.email !== '' ?
                        <div style={{color:"red"}}>{formErrors.email}</div>:  "Email"}</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Your Email"
                        className='input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>{formErrors.password !== "" ?
                        <div style={{color:"red"}}>{formErrors.password}</div> : "Password"}</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Your Password"
                        className='input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>{formErrors.phoneNumber !== "" ?
                        <div style={{color:"red"}}>{formErrors.phoneNumber}</div> : "Phone Number"}</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Your Phone Number"
                        className='input'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>{formErrors.address !== "" ?
                        <div className="error">{formErrors.address}</div> : "Address"}</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your Address"
                        className='input'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                </Form.Group>

                <Form.Group controlId="isAdmin" className="d-flex align-items-center" >
                    <div className="col-auto"  >
                        <Form.Check
                            style={{ transform: 'scale(1.2)' ,marginTop:"2vh"}}
                            type="checkbox"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                        />
                    </div>
                    <div className="col-auto">
                        <Form.Label  style={{ transform: 'scale(1.1)' ,marginTop:"1.5vh",marginLeft:"1vw"}} className="mb-0">Is Admin</Form.Label>
                    </div>
                </Form.Group>


                <Button variant="primary" type="submit" className='buttonform' style={{marginTop:"5.5vh",backgroundColor:"#1D995E",border:"0px"}}>
                    Add
                </Button>


            </div>

        </Form>


    );
}
export default AddTasks;