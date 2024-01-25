function MeetingItem(meetingData){
    const date = meetingData?.date
    return(
        <div className="meeting-item bg-zinc-100 px-[30px] py-[20px] h-[200px]">
            <div className="meeting-date bg-amber-500 w-1/5 h-full flex justify-center items-center text-[38px] text-semibold">
                19 Jan
            </div>
            <div className="meeting-info">
                <h2 className="meeting-title">
                    {meetingData?.Name}
                </h2>
                <p className="meeting-location">
                    {meetingData?.Location}
                </p>
                <p className="meeting-description">
                    {meetingData?.Description}
                </p>
            </div>
            <div className="confirmation-buttons">
                
            </div>
        </div>
        
    )
}
export default MeetingItem;