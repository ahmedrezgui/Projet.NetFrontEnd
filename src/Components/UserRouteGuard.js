import {checkLoggedIn} from "../Helper/utils";
import React, {useEffect, useState} from "react";
import Loading from "./loading";
import Sidebar from "../component/sidebar";



const AdminRouteGuard=(props)=>{

    const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            await checkLoggedIn(setIsUser);
        };

        fetchData(); // Call the async function immediately

    }, []);
    if(isUser){
        return (<><div className=" principal" id='greybg' style={{background: "#EBEBEB",height:"auto",minHeight:"100vh",paddingBottom:"6vh"}}>

            <div className=" my-10 rounded-3xl mr-10 w-1/5" style={{position:"fixed"}}>
                <Sidebar   />

            </div >
            <div className='secondComp'>
                {props.component}
            </div>
        </div>
        </>)
    }
    else {
        return (<>
            <Loading></Loading>
        </>)
    }
}

export default AdminRouteGuard