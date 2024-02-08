import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Confirm from './confirm';
import Login from './Login';

function Scan(){
    console.log("here")
    const [authenticated, setAuthenticated] = useState();
    let { meetingId } = useParams();

    useEffect(() => {
        // Perform authentication check based on the id parameter
        const isAuthenticated = localStorage.getItem('JwtToken');
        console.log(isAuthenticated)
        console.log(meetingId)
        if(isAuthenticated){
            setAuthenticated('authenticated')
        } else {
            setAuthenticated('none')
        }
        
      }, [meetingId]);
        if(authenticated == 'authenticated') {
            return(
                <Confirm meetingId={meetingId}/>
            )
        }
        else if (authenticated == 'none'){
            return(
                <Login setAuthenticated={setAuthenticated} redirect={true}/>
            )
        }


}
export default Scan;