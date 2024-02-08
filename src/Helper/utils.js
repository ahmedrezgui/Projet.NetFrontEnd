
export const checkAdmin = async (setState) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        let token = localStorage.getItem('JwtToken');
        const response = await fetch('https://localhost:7181/Auth/isadmin', {
            headers: {
                'Authorization': 'bearer ' + token,
            }
        });
        if (!response.ok) {
            if(response.status===401){
                window.location.href = '/login';
            }
            throw new Error('Network response was not ok');
        }
        // Set state to indicate that data is loaded
        setState(true);
    } catch (error) {
        console.error('Error fetching data:', error);
    }}

export const checkLoggedIn=async (setState)=>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        let token = localStorage.getItem('JwtToken');
        const response = await fetch('https://localhost:7181/Auth/isloggedin', {
            headers: {
                'Authorization': 'bearer ' + token,
            }
        });
        if (!response.ok) {
            if(response.status===401){
                window.location.href = '/login';
            }
            throw new Error('Network response was not ok');
        }
        // Set state to indicate that data is loaded
        setState(true);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

