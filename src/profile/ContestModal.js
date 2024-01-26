import React from "react";
import { useState } from "react";

function ContestModal({ visible, blame, onClose }) {
    const [inputValue, setInputValue] = useState(blame.contention);

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    }

    const updateContest = async () => {
        try {
            const response = await fetch(`https://localhost:7181/api/Profile/${blame.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contestation: inputValue,
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    if (!visible) return null;
    return (
        <>
            <div id="container"
                onClick={handleOnClose}
                className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                <div className="bg-white rounded grid grid-row-6 grid-cols-1 w-1/4 h-2/5 px-4 pt-4 pb-2 gap-2">
                    <div className="row-span-1 text-lg font-semibold justify-self-center ">Contestation</div>
                    <textarea
                        type="text"
                        className="row-span-3 h-full"
                        value={inputValue}
                        onChange={handleInput}
                        rows={5}
                        style={{ resize: 'none' }}
                    />
                    <button
                        style={{ background: "#F7C159" }}
                        className="row-span-2 rounded text-white font-semibold text-sm w-1/4 h-full justify-self-end "
                        onClick={updateContest}
                    > valider </button>


                </div>

            </div>
        </>
    )
}
export default ContestModal;