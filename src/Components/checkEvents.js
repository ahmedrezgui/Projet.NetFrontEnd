import React, { useState, useEffect } from 'react'; 
import  '../Style/checkEvents.css';
const CheckEvents = () => {
  // State to store the fetched events
  const [events, setEvents] = useState([]);
  const [panel,setPanel] = useState(null);
  const [heightStyle,setHeightStyle]=useState(70)
    const [heightItem,setHeightItem]=useState(20)

  useEffect(() => {
    // Function to fetch data
    const fetchEvents = async () => {
      try {
        let token=localStorage.getItem('JwtToken');

        // Fetch data from the API
        const response = await fetch('https://localhost:7181/api/Events',{
          headers:{
          'Authorization':'bearer '+token,
          }
        });
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const data = await response.json();
        console.log(data);

        // Update the state with the fetched events
        setEvents(data);


        data.forEach((e) => {
          setHeightStyle((prevHeightStyle) => prevHeightStyle + 10);
          console.log(data)
         
        });
        console.log("----------------------------------------"+heightStyle)

      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    // Call the fetchEvents function
    fetchEvents();
  }, []); // Empty dependency array ensures the effect runs only once (on mount)
  

 const handleCLick =(id)=>{
  setPanel(panel === id ? null : id);

     }



  const parseDateTime = (dateTimeString) => {
    // Parse the date string
    const parsedDate = new Date(dateTimeString);

    // Extract date and time components
    const date = parsedDate.toLocaleDateString(); // Adjust the format as needed
    const time = parsedDate.toLocaleTimeString(); // Adjust the format as needed

     return (
      <div>
        <div>{date}</div>
        <div>{time}</div>
      </div>
    );
    
  };
  const currentDate = new Intl.DateTimeFormat("en-us",{
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
const formattedDate = currentDate.formatToParts()
const day = formattedDate[0].value
const month = formattedDate[2].value
const date = formattedDate[4].value
  return ( <>
  
    <div style={{backgroundColor:"white",width:"3/4",marginLeft:"40px",height:heightStyle+"vh" ,borderRadius:"4vh"}}>
    <div className="time">
                <h1 className="daydate">
                    <span>{day}, {date}</span>
                </h1>
                <h2 className="month">
                    <span>{month}</span>
                </h2>
            </div>
    <div className='full-container'>
      <div className='title'> Upcoming events</div>
      <div className='list-container'>
        {events.map(event => (
          <div className='Item' key={event.id} >
            {/* Render event details as needed */}
           <div className='ProprietiesItem'> {
           parseDateTime(event.date)
           } </div> 
           <div className='ProprietiesItem'>
            <div className={panel === event.id ? 'eventName selected' : 'eventName'}> {event.name} </div>
            <div className={panel === event.id ? 'eventDesc selected' : 'eventDesc'}> {event.description} </div>
          </div>
          <div className='buttonContainer'>
          <button onClick={() => handleCLick(event.id)}>{panel === event.id ? 'Less Info' : 'More Info'}</button>

            </div>

          </div>
        
        ))}
      </div>
      </div>
      </div>
      </>

  );
};

export default CheckEvents;
