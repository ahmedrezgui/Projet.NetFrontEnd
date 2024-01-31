import React from 'react';
import './ViewBoxSection.css';
import AnonymBoxCommentRefContainer from './AnonymBoxCommentRefContainer';
import AnonymBoxComment from './AnonymBoxComment'
function ViewBoxSection() {
    const ref = React.createRef();
    const setActive=(newComment)=>
    {
        ref.current.changeComment(newComment);
    }

    return (
            <div className='anas-viewboxcontainer'>
                <div className='anas-anonymboxcommentrefcontainersection'>
                    <div className='anas-anonymboxcommentrefcontainerlabel'>Select the message :</div>
                    <div className='anas-line'></div>
                    <AnonymBoxCommentRefContainer onChildClick={setActive}></AnonymBoxCommentRefContainer>
                </div>
                <div className='anas-commentsection'>
                    <AnonymBoxComment ref={ref} comment="select comment"></AnonymBoxComment>
                </div>
            </div> 
    );
  }
  
  export default ViewBoxSection;
