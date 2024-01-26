import React, { useState, useEffect } from 'react'; 
import  '../Style/checkEvents.css';
const CheckEvents = () => {
  // State to store the fetched events
  const [events, setEvents] = useState([]);
  const [panel,setPanel] = useState(null);

  // Effect to fetch data when the component mounts
  // useEffect(() => {
  //   // Function to fetch data
  //   const fetchEvents = async () => {
  //     try {
  //       // Fetch data from the API
  //       const response = await fetch('https://localhost:7181/api/Events');

  //       // Check if the response is successful
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       // Parse the JSON data
  //       const data = await response.json();
  //       console.log(data);
  //       // Update the state with the fetched events
  //       setEvents(data);
  //     } catch (error) {
  //       console.error('Error fetching events:', error);
  //     }
  //   };

  //   // Call the fetchEvents function
  //   fetchEvents();
  // }, []); // Empty dependency array ensures the effect runs only once (on mount)
  useEffect(() => {
    const data2 = [
      {
        "id": "59c8616b-e192-4298-be85-0353339874a6",
        "name": "azzzzzzzzz",
        "description": "klll",
        "date": "2033-12-05T20:26:29.193",
        "location": "aaaaaaaaaa"
      },
      {
        "id": "eeee3152-5ebe-4b5e-af1f-2ff62103ea79",
        "name": "Dolorum possimus numquam.",
        "description": "Rerum officiis dolor adipisci et. Non voluptatem assumenda sed debitis molestias voluptas recusandae accusamus cum. Magni consequatur sunt qui porro ut. Pariatur explicabo a eligendi quos eum iure perspiciatis asperiores tempora. Numquam voluptatem aperiam est eveniet dolorem aut et quam. Alias quis molestiae pariatur quisquam.",
        "date": "2023-11-28T06:29:56.1875483",
        "location": null
      },
      {
        "id": "c1328496-7b7d-46e3-8bb5-38725136bf52",
        "name": "Quisquam dicta id corrupti.",
        "description": "Ad voluptatem occaecati impedit sequi excepturi sapiente. Dignissimos magnam velit qui quia minima maiores molestias molestias. Accusantium unde quia est dolores cum unde voluptatum rem voluptatem. Quia et fuga eligendi repellendus sed. Veniam reiciendis eum debitis quia.",
        "date": "2023-11-28T02:50:45.7574874",
        "location": null
      },
      {
        "id": "313f1375-587b-43ff-becb-50efa45ddc42",
        "name": "Error nisi similique dolorem perferendis quos consequuntur quis ex.",
        "description": "Magni error quia ea autem aut. Vel eum nihil ipsam ut ipsa quis ab culpa. Dolor ut quisquam ut eius consequatur. Architecto earum quia et sunt enim.",
        "date": "2023-11-27T12:58:38.3765413",
        "location": null
      },
      {
        "id": "5d0fc4d3-cbfb-452c-97c2-543840d71e21",
        "name": "pp",
        "description": "Updated Description",
        "date": "2023-12-04T10:04:44.666",
        "location": "pppp"
      },
      {
        "id": "743e3121-9b3b-45d9-8f0b-55bba3218c15",
        "name": "Ut dolor quis enim minima blanditiis voluptatum.",
        "description": "Omnis quod ad nostrum illum. Expedita ea ad aspernatur porro. Suscipit in omnis omnis itaque corrupti at aperiam. Eos quisquam quo incidunt suscipit natus reiciendis.",
        "date": "2023-11-27T13:09:54.0991252",
        "location": null
      },
      {
        "id": "fce63b89-b8e7-454e-8172-5999567b4cd4",
        "name": "Architecto in explicabo est.",
        "description": "Harum aut molestias officiis quas ut nesciunt ipsam facere. Quis vel adipisci impedit amet dolore. Aperiam autem et pariatur. Quisquam consequatur quo voluptatem accusantium.",
        "date": "2023-11-28T04:37:14.3273628",
        "location": null
      },
      {
        "id": "3a101f90-4786-4003-b9de-88fa0a39b37b",
        "name": "string",
        "description": "string",
        "date": "2023-12-05T19:36:31.308",
        "location": "string"
      }
    ];

    setEvents(data2);
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

 const handleCLick =(id)=>{
   setPanel(id);
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
  return (
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
            <div className='eventName'> {event.name} </div>
            <div className='eventDesc'> {event.description} </div>
          </div>
          <div className='buttonContainer'>
          <button onClick={() => handleCLick(event.id)}>More Info</button>

            </div>

          </div>
        
        ))}
      </div>
      </div>
  );
};

export default CheckEvents;
