import React from 'react';
import './AnonymBoxCommentRef.css';
const AnonymBoxCommentRef=React.forwardRef(({reference})=> {  
    return (
            <div className='anas-refcontainer'>
                Message {reference}
            </div>
    );
  }
)
  export default AnonymBoxCommentRef;
  