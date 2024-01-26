import React from 'react';
import './AnonymBoxCommentRef.css';
function AnonymBoxCommentRef({reference,comment}) {
    return (
            <div className='refcontainer'>
                Message {reference}
            </div>
    );
  }
  
  export default AnonymBoxCommentRef;
  