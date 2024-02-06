import { useEffect, useState } from "react";
import MeetingItem from "./meetingItems";
import axios from 'axios';
const upcomingMeetingUrl = 'https://localhost:7181/api/meetings/upcoming';
const token = localStorage.getItem('JwtToken');


function Meeting(){
    const [meetingData, setMeetingData]= useState([])
   
    useEffect(()=>{
        axios.get(upcomingMeetingUrl,{
            headers: {
                'Authorization': "Bearer "+ token,
                'Access-Control-Allow-Origin': '*', 
                'Accept': 'application/json',

            },
            
        })
        .then(response => {
            setMeetingData(response.data)
            console.log('Upcoming Meeting Data:', meetingData);
        })
        .catch((error)=> {
            console.error('Error fetching upcoming meeting data:', error.message);
        });

    },[])

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
    return(
        <div className="meeting-container w-3/4 ml-[100px]">
            <div className="time">
                <h1 className="text-[50px] font-extrabold">
                    <span>{day}, {date}</span>
                </h1>
                <h2 className="text-[30px] font-medium">
                    <span>{month}</span>
                </h2>
            </div>
            <div className="header text-[50px] font-medium mt-[60px]">
                Meetings / Workshops
            </div>
            <div className="meetings-items-container flex flex-col gap-[20px] mt-[30px]">
                {
                    meetingData.map((meeting)=>{
                        return(
                            <MeetingItem meetingData={meeting} token={token} key={meeting.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Meeting;