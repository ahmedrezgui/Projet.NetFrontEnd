import React from 'react';
import './AnonymBoxComment.css';
import './ScrollBar.css';

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
  