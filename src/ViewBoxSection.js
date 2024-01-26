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
            <div className='viewboxcontainer'>
                <div className='anonymboxcommentrefcontainersection'>
                    <div className='anonymboxcommentrefcontainerlabel'>Select the message :</div>
                    <div className='line'></div>
                    <AnonymBoxCommentRefContainer onChildClick={setActive}></AnonymBoxCommentRefContainer>
                </div>
                <div className='commentsection'>
                    <AnonymBoxComment ref={ref} comment="insert comment"></AnonymBoxComment>
                </div>
            </div> 
    );
  }
  
  export default ViewBoxSection;
