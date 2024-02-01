import React, { useState } from "react";
import "./AnonymBox.css"
import AnonymBoxCommentHeaderButton from "./AnonymBoxCommentHeaderButton";
import ViewBoxSection from "./ViewBoxSection";
import AddCommentSection from "./AddCommentSection";

function AnonymBox()
{   
    const [main,setMain]=useState(<ViewBoxSection/>)
    const [isViewBox,setIsViewBox]=useState(true)
    
    const setMainToViewBox = ()=>{
        setMain(<ViewBoxSection/>);
        setIsViewBox(true)
    }
    const setMainToAddComment=()=>{
        setMain(<AddCommentSection/>)
        setIsViewBox(false)
    }
    const viewBoxButtonStyle=
        {
            backgroundColor: isViewBox ? '#F7C159': '#EBEBEB', 
        }
    const addCommentButtonStyle=
        {
            backgroundColor: isViewBox ? '#EBEBEB': '#F7C159', 
        }
    return(
        <div className="anas-anonymbox">
            <div className="anas-anonymboxheader">
                <div onClick={setMainToAddComment} style={addCommentButtonStyle} className="anas-anonymboxheaderbuttoncontainer">
                    <AnonymBoxCommentHeaderButton title={"Submit A Message"}/>
                </div>
                <div onClick={setMainToViewBox} style={viewBoxButtonStyle} className="anas-anonymboxheaderbuttoncontainer">
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