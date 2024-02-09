import React ,{useState , useEffect} from 'react';
import '../Style/addEvents.css';
import Sidebar from '../component/sidebar'
import AddRemoveMember from "./AddRemoveMember";

import AddWork from "./AddWork";
import AddBlame from './AddBlame';

const AdminFunctionalities = () => {
const [functionality, setfunctionality] = useState('Add/Remove Member');
    const [user, setUser] = useState({});
    const getUserHistory = async () => {
        let token = localStorage.getItem('JwtToken');
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
            console.log(data)
            setUser(data.userData);


        } catch (error) {
            console.error('Error fetching historique:', error);
        }
    };

    useEffect(() => {
        getUserHistory();

    }, []);

    return (<>

            <div className=" flex  justify-center" style={{background: "#EBEBEB",height:"150vh"}}>
                {/* <div className=" my-10 rounded-3xl mr-10 w-1/5" style={{height:"90vh"}}>
                <Sidebar ></Sidebar>
                </div > */}
                <div style={{backgroundColor:"white",height: functionality==="Add/Remove Member"?"140vh": "130vh"}}>
                    <div className="row-span-1 grid grid-cols-4 w-full px-10 pt-6 pb-4"  >
                        <div className="col-span-1 flex justify-center pl-10 mb-4">
                            <svg width="150" height="140" viewBox="0 0 161 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M93.9167 53.6666C93.9167 60.7832 91.0896 67.6084 86.0574 72.6406C81.0251 77.6728 74.2 80.4999 67.0833 80.4999C59.9667 80.4999 53.1415 77.6728 48.1093 72.6406C43.0771 67.6084 40.25 60.7832 40.25 53.6666C40.25 46.5499 43.0771 39.7248 48.1093 34.6926C53.1415 29.6603 59.9667 26.8333 67.0833 26.8333C74.2 26.8333 81.0251 29.6603 86.0574 34.6926C91.0896 39.7248 93.9167 46.5499 93.9167 53.6666Z"
                                    fill="black"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M64.3463 134.113C28.5674 132.677 0 103.214 0 67.0833C0 30.0332 30.0332 0 67.0833 0C104.133 0 134.167 30.0332 134.167 67.0833C134.167 104.133 104.133 134.167 67.0833 134.167C66.777 134.169 66.4706 134.169 66.1643 134.167C65.5572 134.167 64.9501 134.147 64.3463 134.113ZM24.036 109.413C23.5344 107.973 23.3637 106.438 23.5365 104.922C23.7093 103.407 24.2211 101.95 25.0341 100.659C25.847 99.3689 26.9402 98.2781 28.2324 97.4679C29.5247 96.6578 30.9828 96.149 32.4985 95.9795C58.6476 93.0848 75.6801 93.3465 101.702 96.0399C103.219 96.1979 104.681 96.7002 105.975 97.5086C107.27 98.3169 108.363 99.41 109.171 100.705C109.979 101.999 110.481 103.461 110.638 104.979C110.796 106.496 110.605 108.03 110.08 109.463C121.233 98.1795 127.478 82.9483 127.458 67.0833C127.458 33.7396 100.427 6.70833 67.0833 6.70833C33.7396 6.70833 6.70833 33.7396 6.70833 67.0833C6.70833 83.5724 13.3194 98.5186 24.036 109.413Z"
                                      fill="black"/>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start col-span-2 pt-4 ml-2" style={{marginBottom:"2vh"}}>
                            <div className="text-2xl font-bold">{user.firstName} {user.lastName}</div>
                            <div className="text-lg font-semibold">Enactus INSAT Team Member</div>
                            <div>Departement Marketing</div>
                        </div>

                    </div>
                    <div className="fonctionalités">
                        <div className="fonction" onClick={(event)=>{
                            setfunctionality('Add/Remove Member')
                        }}  style={{ backgroundColor: functionality === 'Add/Remove Member' ? '#F7C159' : '#EBEBEB' }}>Add/Remove Member</div>
                        <div className="fonction" onClick={(event)=>{
                            setfunctionality('Add Task')
                        }} style={{ backgroundColor: functionality === 'Add Task' ? '#F7C159' : '#EBEBEB' }}>Add Task</div>
                        <div className="fonction" onClick={(event)=>{
                            setfunctionality('Add Blame')
                        }} style={{ backgroundColor: functionality === 'Add Blame' ? '#F7C159' : '#EBEBEB' }}>Add Blame</div>

                    </div>
                    {functionality==="Add Task" ? <AddWork/> : <></>}
                    {functionality==="Add Blame" ? <AddBlame/> : <></>}
                    {functionality==="Add/Remove Member" ? <AddRemoveMember/> : <></>}

                </div>

            </div>


        </>
    )
}

export default AdminFunctionalities;