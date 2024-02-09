import React from 'react';

function Historique(data) {


    const parseDateTime = (dateTimeString) => {
        // Parse the date string
        const parsedDate = new Date(dateTimeString);

        // Extract date and time components
        const date = parsedDate.toLocaleDateString(); // Adjust the format as needed
        const time = parsedDate.toLocaleTimeString(); // Adjust the format as needed
        return (
            <div>
                <div className="font-medium">{date}</div>
                <div className="text-sm font-medium">{time}</div>
            </div>
        );
    };


    return (
        <>
            <ul>
                {data.data ?
                    data.data.map(item => (
                        <li className="w-full h-full mb-4">
                            <div className="grid grid-cols-3 ">
                                <div className="col-span-1 grid grid-rows-2 place-self-center place-items-center ">
                                    {parseDateTime(item.date)}
                                </div>

                                <div className="col-span-2 grid grid-rows-2 place-items-center ">
                                    <div className="text-lg font-medium">
                                        {item.validation === false && item.eventType === "Meeting" && `You didn't attend the meeting ${item.name}`}
                                        {item.validation === true && item.eventType === "Meeting" && `You attended the meeting ${item.name}`}
                                        {item.validation === false && item.eventType === "Task" && `You didn't do the task ${item.name}`}
                                        {item.validation === true && item.eventType === "Task" && `You did the task ${item.name}`}
                                    </div>
                                    <div className="text-xs font-normal">
                                        {item.description}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-2 mx-2 border border-t-0 border-solid border-black"></div>
                        </li>
                    )
                    )
                    : null}

            </ul>
        </>
    )

}
export default Historique;