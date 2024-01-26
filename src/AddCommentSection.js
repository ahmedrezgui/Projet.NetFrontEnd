import React from "react";
import "./AddCommentSection.css"
import AddCommentForm from "./AddCommentForm.js";


function AddCommentSection()
{ 
    return(
        <div className="anas-addcommentformcontainer">
            <div className="anas-addcommentformtitle">
            Anonymous Feedback and Suggestions
            </div>
            <div className="anas-addcommentformsmalltitle">Please, Feel free to express yourself and let us know your concerns!</div>
            <AddCommentForm></AddCommentForm>
        </div>
    )
}
export default AddCommentSection