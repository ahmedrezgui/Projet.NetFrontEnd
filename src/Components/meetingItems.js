function MeetingItem({meetingData}){
    const dateObject = new Date(meetingData?.Date);
    const formattedDate = new Intl.DateTimeFormat("en-us",{
        day: "numeric",
        month: "long",
        timeZone: "UTC",
      }).format(dateObject);
    const meetingDay = formattedDate.split(" ")[1]
    const meetingMonth = formattedDate.split(" ")[0].substring(0,3)
    console.log(formattedDate)
    console.log(meetingData)
    return(
        <div className="meeting-item flex justify-between gap-[40px] bg-zinc-100 px-[30px] py-[20px] h-[200px] rounded-2xl">
            <div className="meeting-date w-[150px] px-[20px] bg-amber-500  h-full flex justify-center items-center text-[38px] font-semibold">
                <div className="meeting-day">
                    {meetingDay}
                </div>
                <div className="meeting-month ml-2">
                    {meetingMonth}
                </div>
            </div>
            <div className="meeting-info w-full">
                <h2 className="meeting-title text-[38px] font-semibold">
                    {meetingData?.Name}
                </h2>
                <p className="meeting-location text-xl">
                    {meetingData?.Location}
                </p>
                <p className="meeting-description text-xl">
                    {meetingData?.Description}
                </p>
            </div>
            <div className="confirmation-buttons flex flex-col justify-center gap-[20px] w-[150px] h-full text-white font-black">
                <button className="confirm-button bg-green-600 py-[15px]">
                    Confirm
                </button>
                <button className="deny-button bg-rose-800 py-[15px]">
                    Deny
                </button>
            </div>
        </div>
        
    )
}
export default MeetingItem;