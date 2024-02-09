import {checkAdmin} from "../Helper/utils";
import React, {useEffect, useState} from "react";
import Loading from "./loading";



const AdminRouteGuard=()=>{

    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            await checkAdmin(setIsAdmin);
        };

        fetchData(); // Call the async function immediately

    }, []);
    if(isAdmin){
        return (<></>)
    }
    else {
        return (<>
            <Loading></Loading>
        </>)
    }
}

export default AdminRouteGuard