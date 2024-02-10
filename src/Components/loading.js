import Spinner from "react-bootstrap/Spinner";
import React from "react";


const Loading = () => {
    return(
        <div  className="flex flex-row items-center justify-center h-screen w-screen " style={{background: "#EBEBEB"}} >

            <Spinner animation="grow" variant="warning" style={{width:"1.5vw",height:"1.5vw",marginRight:"0.5vw"}}/>
            <Spinner animation="grow" variant="warning" style={{width:"2vw",height:"2vw",marginRight:"0.5vw"}}/>
            <Spinner animation="grow" variant="warning"style={{width:"2.5vw",height:"2.5vw"}}/>
        </div>
    )
}

export default Loading;