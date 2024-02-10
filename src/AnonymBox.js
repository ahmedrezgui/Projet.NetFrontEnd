import React, { useState } from "react";
import "./AnonymBox.css"
import AnonymBoxCommentHeaderButton from "./AnonymBoxCommentHeaderButton";
import ViewBoxSection from "./ViewBoxSection";
import AddCommentSection from "./AddCommentSection";

function AnonymBox()
{   async function setAdminStatus (){
    //Insert Admin logic
        let token = localStorage.getItem('JwtToken');
        const adminResponse = await fetch('https://localhost:7181/Auth/isadmin', {
            headers: {
                'Authorization': 'bearer ' + token,
            }
        });
        return adminResponse.ok
    }
    
    const [isAdmin,setIsAdmin]=useState(setAdminStatus())
    const [isViewBox,setIsViewBox]=useState(isAdmin)
    const [main,setMain]=useState(isViewBox ? <ViewBoxSection/>:<AddCommentSection/>)

    const viewBoxButtonStyle=
        {
            backgroundColor: isViewBox ? '#F7C159': '#EBEBEB', 
            display : isViewBox ? 'block' : 'none'
        }
    const addCommentButtonStyle=
        {
            backgroundColor: isViewBox ? '#EBEBEB': '#F7C159', 
            display : isViewBox ? 'none' : 'block'
        }

    return(
        <div className="anas-anonymbox">
            <div className="anas-anonymboxheader">
                <div style={addCommentButtonStyle} className="anas-anonymboxheaderbuttoncontainer">
                    <AnonymBoxCommentHeaderButton title={"Submit A Message"}/>
                </div>
                <div style={viewBoxButtonStyle} className="anas-anonymboxheaderbuttoncontainer">
                    <AnonymBoxCommentHeaderButton title={"View Box"}/>
                </div>
            </div>
            <div className="anas-anonymboxmain">
                {main}
            </div>
        </div>
    )
}
export default AnonymBox