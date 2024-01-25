import MeetingItem from "./meetingItems";

function Meeting(){
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
                <h1 className="text-[50px] text-extrabold">
                    <span>{day}, {date}</span>
                </h1>
                <h2 className="text-[30px] text-medium">
                    <span>{month}</span>
                </h2>
            </div>
            <div className="header text-[50px] text-medium">
                Meetings / Workshops
            </div>
            <div className="meetings-items-container">
                <MeetingItem></MeetingItem>
            </div>
        </div>
    )
}
export default Meeting;