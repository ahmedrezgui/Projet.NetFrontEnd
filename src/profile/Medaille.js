import React from 'react';

function Medaille() {
    const medailles = [
        { date: "February 14, 2024", time: " 9:00 AM", title: "  Attended the Meeting 1", description: "Descriptino lorem espm lmesdf dese ldods ea selkdmqwfjk f" },
    ]
    return (
        <>
            <ul>
                {
                    medailles.map((item) => {
                        return (
                            <li className="w-full h-full mb-4">
                            <div className="grid grid-cols-3 ">
                                <div className="col-span-1 grid grid-rows-2 place-self-center place-items-center ">
                                    <div className="font-medium">
                                    {item.date}
                                    </div>
                                    <div className="text-sm font-medium">
                                    {item.time}
                                    </div>
                                </div>
        
                                <div className="col-span-2 grid grid-rows-2 place-items-center ">
                                    <div className="text-lg font-medium">
                                    {item.title}
                                    </div>
                                    <div className="text-xs font-normal">
                                    {item.description}
                                    </div>
                                </div>
                            </div>
        
                            <div className="mt-2 mx-2 border border-t-0 border-solid border-black"></div>
                        </li>
                        )
                    })
                }
               
            </ul>
        </>
    )
}
export default Medaille;