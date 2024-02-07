import React, { useState, useEffect }  from 'react';
import TaskCard from './TaskCard';
import './TaskContainer.css'
import axios from 'axios';

function TaskContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7181/UserTask', {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
            <div className='anas-taskcardcontainer'>
                {data.map(item=>(<TaskCard title={item.Name} deadline={item.DeadLine}></TaskCard>))}    
            </div>
       
    );
  }
  
  export default TaskContainer;