import React, { useEffect } from "react";
import Button from "./Button";
import { useState } from "react";
import Historique from "./Historique";
import Blames from "./Blames";
import Medaille from "./Medaille";

function Profile() {
    const [histBtn, setHistBtn] = useState(true);
    const [blamesBtn, setBlamesBtn] = useState(false);
    const [medBtn, setMedBtn] = useState(false);

    const [history, setHistory] = useState([]);
    const [blames, setBlames] = useState();
    const [user, setUser] = useState({});
    const [role, setRole] = useState();

    let token = localStorage.getItem('JwtToken');
    console.log(token);
    const getUserHistory = async () => {
        try {
            // Fetch data from the API
            const response = await fetch('https://localhost:7181/profile', {
                headers: {
                    'Authorization': 'bearer ' + token,
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

            setHistory(data.histoData);
            setUser(data.userData);
            if (user.isAdmin) { setRole("leader") }
            else { setRole("Member") }

        } catch (error) {
            console.error('Error fetching historique:', error);
        }
    };
    const getUserBlames = async () => {
        try {
            const response = await fetch(`https://localhost:7181/blames/user`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },

            });
            const data = await response.json();
            console.log(data);
            setBlames(data);
        } catch (error) {
            console.log("Error: " + error);
        }
    }


    const handleHistory = () => {
        setHistBtn(true);
        setBlamesBtn(false);
        setMedBtn(false);
    }
    const handleBlames = () => {
        setHistBtn(false);
        setBlamesBtn(true);
        setMedBtn(false);
    }
    const handleMedailles = () => {
        setHistBtn(false);
        setBlamesBtn(false);
        setMedBtn(true);
    }
    useEffect(() => {
        getUserHistory();
        getUserBlames();
    }, []);

    return (
        <>
            <div className="h-screen flex  justify-center" style={{ background: "#EBEBEB" }}>
                <div className="bg-white my-10 rounded-3xl mr-10 w-1/5">

                </div>
                <div className="grid grid-rows-5 gap-10 justify-items-center w-1/2 bg-white my-10 ml-10 rounded-3xl">
                    <div className="row-span-1 grid grid-cols-4 w-full px-10 pt-6 pb-4">
                        <div className="col-span-1 flex justify-center pl-10 mb-4">
                            <svg width="150" height="140" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M93.9167 53.6666C93.9167 60.7832 91.0896 67.6084 86.0574 72.6406C81.0251 77.6728 74.2 80.4999 67.0833 80.4999C59.9667 80.4999 53.1415 77.6728 48.1093 72.6406C43.0771 67.6084 40.25 60.7832 40.25 53.6666C40.25 46.5499 43.0771 39.7248 48.1093 34.6926C53.1415 29.6603 59.9667 26.8333 67.0833 26.8333C74.2 26.8333 81.0251 29.6603 86.0574 34.6926C91.0896 39.7248 93.9167 46.5499 93.9167 53.6666Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M64.3463 134.113C28.5674 132.677 0 103.214 0 67.0833C0 30.0332 30.0332 0 67.0833 0C104.133 0 134.167 30.0332 134.167 67.0833C134.167 104.133 104.133 134.167 67.0833 134.167C66.777 134.169 66.4706 134.169 66.1643 134.167C65.5572 134.167 64.9501 134.147 64.3463 134.113ZM24.036 109.413C23.5344 107.973 23.3637 106.438 23.5365 104.922C23.7093 103.407 24.2211 101.95 25.0341 100.659C25.847 99.3689 26.9402 98.2781 28.2324 97.4679C29.5247 96.6578 30.9828 96.149 32.4985 95.9795C58.6476 93.0848 75.6801 93.3465 101.702 96.0399C103.219 96.1979 104.681 96.7002 105.975 97.5086C107.27 98.3169 108.363 99.41 109.171 100.705C109.979 101.999 110.481 103.461 110.638 104.979C110.796 106.496 110.605 108.03 110.08 109.463C121.233 98.1795 127.478 82.9483 127.458 67.0833C127.458 33.7396 100.427 6.70833 67.0833 6.70833C33.7396 6.70833 6.70833 33.7396 6.70833 67.0833C6.70833 83.5724 13.3194 98.5186 24.036 109.413Z" fill="black" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start col-span-2 pt-4 ml-2">
                            <div className="text-2xl font-bold">{user.firstName} {user.lastName}</div>
                            <div className="text-lg font-semibold">Enactus INSAT Team {role} </div>
                            <div>Departement Marketing</div>
                        </div>
                    </div>
                    <div className="row-span-4 mt-6 flex flex-col gap-4 w-full">
                        <div className="w-full px-20 flex justify-center gap-4 font-medium">
                            <Button buttonName="historique" active={histBtn} handleClick={handleHistory} />
                            <Button buttonName="blames" active={blamesBtn} handleClick={handleBlames} />
                            <Button buttonName="medailles" active={medBtn} handleClick={handleMedailles} />

                        </div>
                        <div style={{ background: "#EBEBEB" }} className="place-self-center w-10/12 h-5/6  bg-white rounded-xl py-4 px-4 overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-rounded-md  scrollbar-thumb-yellow-500 ">
                            <ul>
                                {
                                    histBtn ? <Historique data={history} /> : null
                                }
                                {
                                    blamesBtn ? <Blames data={blames} /> : null
                                }
                                {
                                    medBtn ? <Medaille /> : null
                                }
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}
export default Profile;