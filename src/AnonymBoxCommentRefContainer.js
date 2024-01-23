import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './AnonymBoxCommentRefContainer.css';
import AnonymBoxCommentRef from './AnonymBoxCommentRef';
function AnonymBoxCommentRefContainer() {
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

    return (
            <div className='commentlistcontainer'>
                <div className='commentlist'>
                    {data.map((item,index)=>(<div key={index +1}><AnonymBoxCommentRef reference={data.length - index} comment={item.Contenu}></AnonymBoxCommentRef></div>))} 
                </div>     
            </div>
    );
  }
  
  export default AnonymBoxCommentRefContainer;