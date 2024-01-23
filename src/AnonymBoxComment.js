import React from 'react';
import './AnonymBoxComment.css';
function AnonymBoxComment({comment}) {
    return (
            <div className='commentcontainer'>
                <p className='comment'>
                    {comment}
                </p>
            </div>
       
    );
  }
  
  export default AnonymBoxComment;
  