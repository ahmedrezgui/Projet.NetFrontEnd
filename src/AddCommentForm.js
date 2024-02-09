import React, { useState } from "react";
import "./AddCommentForm.css"
import axios from "axios";
function AddCommentForm()
{   let token=localStorage.getItem('JwtToken');
    const [errorMessage,setErrorMessage]=useState("")
    const [successMessage,setSuccessMessage]=useState("")
    const successStyle=
        {
            color:'green', 
            fontSize:'15px',
            fontFamily:'Inter',
            fontWeight:'500',
        }
    const errorStyle=
        {
            color:'red', 
            fontSize:'15px',
            fontFamily:'Inter',
            fontWeight:'500',
        }
        const submitForm = async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            const formData = Object.fromEntries(data);
            if (formData.contenu=="")
            {
              setSuccessMessage("");
              setErrorMessage('Please insert your comment');
            }
            else
            {
              try {
                const response = await axios.post("https://localhost:7181/AnonymBoxComment/create", { Contenu: formData.contenu },{
                  headers:{
                      'Authorization':'bearer '+token,
                  }
              });
            
                if (response.status === 200) {
                  setSuccessMessage("Comment added with success !");
                  setErrorMessage("");
                }
              } catch (error) {
                  setSuccessMessage("");
                if (error.response && error.response.status === 400) {
                  setErrorMessage('Please insert your comment');
                } 
                else if (error.response && error.response.status === 401)
                {
                  setErrorMessage('Please log in to add a comment');
                }
                else {
                  setErrorMessage('An error occurred when adding your comment. Please check your connection');
                }
              }
            }
          }; 
    return(
        <form onSubmit={submitForm} className="anas-commentform">
            <textarea className="anas-commentforminput" name="contenu" placeholder="Feel Free."></textarea>
            <div style={errorStyle}>{errorMessage}</div>
            <button className="anas-commentformbutton" type="submit">Send</button>
            <div id="anas-commentformsubmitmessage" style={successStyle}>{successMessage}</div>
        </form>
    )
}
export default AddCommentForm