import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const attendingConfirmationURL = 'https://localhost:7181/api/meetings/scan';

function Confirm({meetingId}){
    const navigate = useNavigate();
    const token = localStorage.getItem('JwtToken'); 
    const [isConfirmationSuccesful, setConfirmationStatus] = useState();
    useEffect(() => {
        
        console.log(token, meetingId)
        axios.post(attendingConfirmationURL,{
            meetingId
        },{
            headers: {
                'Authorization': "Bearer "+ token,
            },
            
        })
        .then(response => {
            console.log(response)
            if(response && response.status === 200){
                console.log('Meeting confirmed successfully');
                setConfirmationStatus(true)
                setTimeout(() => {
                    navigate('/profile');
                }, 3000);
            }else{
                
            }
        })
        .catch((error)=> {
            console.error('Error confirming meeting attendance:', error);
            setConfirmationStatus(false)
        });
    },[])
    if(isConfirmationSuccesful){
        return(
            <p>Confirmation Successful! You are being redirected...</p> 
        )
    }
    else if (isConfirmationSuccesful === false){
        return(
            <p>Confirmation Failed! Try again...</p>
        )
    }

    return(
        <p>Request is being processed!</p>
    )

}
export default Confirm;