import React, { useState, useEffect, createRef } from 'react';
import axios from 'axios';
import './AnonymBoxCommentRefContainer.css';
import './ScrollBar.css';
import AnonymBoxCommentRef from './AnonymBoxCommentRef';

const AnonymBoxCommentRefContainer = ({ onChildClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7181/AnonymBoxComment/index', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const buttonRefs = data.map(() => createRef());

  const handleClick = (index) => () => {
    const commentlist = document.querySelectorAll(".refcontainer");
    for (let i = 0; i < commentlist.length; i++) {
      commentlist[i].classList.remove("active");
    }
    buttonRefs[index].current.querySelector(".refcontainer").classList.add("active")
    onChildClick(data[index].contenu);
  };

  return (
    <div className='commentlistcontainer'>
      <div className='commentlist'>
        {data.map((item, index) => (
          <div ref={buttonRefs[index]} onClick={handleClick(index)} key={index + 1}>
            <AnonymBoxCommentRef reference={data.length - index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnonymBoxCommentRefContainer;
