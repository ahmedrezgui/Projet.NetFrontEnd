import React, { useState } from 'react';
import ContestModal from './ContestModal';

function Blames(data) {
    // const blames = [
    //     { date: "February 14, 2024", time: " 9:00 AM", title: "  Attended the Meeting 1", description: "Descriptino lorem espm lmesdf dese ldods fjk f" },
    //     { date: "February 14, 2024", time: " 9:00 AM", title: "  Attended the Meeting 1", description: "Descriptino lorem espm lmesdf dese ldods fjk fjshdc jhsd gjh gsdjgc hjhg" },
    // ]
    console.log(data);
    const [visible, setVisible] = useState(false);
    const onClose = () => { setVisible(false); }
    return (
        <>
            <ul>
                {
                    data.data.map((item) => {
                        return (<>
                            <li className="w-full h-full mb-4">
                                <div className="grid grid-cols-4 gap-4  ">
                                    <div className="col-span-1 grid grid-rows-2 place-self-center place-items-center ">
                                        <div className="font-medium">
                                            {/* {item.date} */}
                                        </div>
                                        <div className="text-sm font-medium">
                                            {/* {item.time} */}
                                        </div>
                                    </div>

                                    <div className="col-span-2 gap-2 flex flex-col place-items-center">
                                        <div className="text-lg font-medium row-span-1">
                                            {item.name}
                                        </div>
                                        <div className="text-xs font-normal row-span-1 px-2">
                                            {item.object}
                                        </div>
                                    </div>

                                    <div className='col-span-1 rounded-lg flex place-items-center h-9 place-self-center w-10/12 text-white text-sm font-semibold ' style={{ background: "#F7C159" }}>
                                        <button className='w-full' onClick={() => { setVisible(!visible) }}>Contest</button>
                                    </div>
                                </div>

                                <div className="mt-2 mx-2 border border-t-0 border-solid border-black"></div>
                            </li>
                            <ContestModal visible={visible} blame={item} onClose={onClose} />
                        </>
                        )
                    })
                }

            </ul>

        </>
    )
}
export default Blames;