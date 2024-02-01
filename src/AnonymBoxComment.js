import React, { useImperativeHandle,useState } from 'react';
import './AnonymBoxComment.css';

const AnonymBoxComment = React.forwardRef((props, ref) => {
  const [comment, setComment] = useState(props.comment);

  // This function will be called when the parent component invokes ref.current.changeComment()
  useImperativeHandle(ref, () => ({
    changeComment: (newComment) => {
      setComment(newComment);
    },
  }));

  return (
    <div className='anas-anonymboxcomment'>
      <div className='anas-comment'>{comment}</div>
    </div>
  );
});

export default AnonymBoxComment;
