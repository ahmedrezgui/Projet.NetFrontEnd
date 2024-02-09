import React, { useState, useEffect }  from 'react';
import TaskCard from './TaskCard';
import './TaskContainer.css'
import axios from 'axios';

function TaskContainer() {
    const [data, setData] = useState([]);
    let token=localStorage.getItem('JwtToken');
    useEffect(() => {
        axios.get('https://localhost:7181/UserTask', {
            headers: {
                'Accept': 'application/json',
                'Authorization':'bearer '+token,
            }
        })
        .then(response => setData(response.data))
        .catch(error => console.error('Error fetching data: ', error));
    }, []);
    console.log(data);
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return (
            
            <div className='anas-taskcardcontainer'>
                {data.map(item=>(<TaskCard title={item.name} deadline={new Date(item.deadLine).toLocaleString(undefined,options)}></TaskCard>))}    
            </div>
       
    );
  }
  
  export default TaskContainer;