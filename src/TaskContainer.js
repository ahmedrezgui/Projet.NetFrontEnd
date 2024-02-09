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
    const currentDate = new Intl.DateTimeFormat("en-us",{
        weekday: "long",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
    const formattedDate = currentDate.formatToParts()
const nowday = formattedDate[0].value
const nowmonth = formattedDate[2].value
const nowdate = formattedDate[4].value
    return (
        <div style={{backgroundColor:"white",width:"3/4",marginLeft:"40px" ,borderRadius:"4vh"}}>
        <div className="time">
                    <h1 className="daydate">
                        <span>{nowday}, {nowdate}</span>
                    </h1>
                    <h2 className="month">
                        <span>{nowmonth}</span>
                    </h2>
            </div>
            <div className='title'> Your Tasks </div>
        <div className='anas-taskcardcontainer'>
          {data.map(item=>(<TaskCard title={item.name} deadline={new Date(item.deadLine).toLocaleString(undefined,options)}></TaskCard>))} 
        </div>    
     </div>

        
       
    );    
  }
  
  export default TaskContainer;