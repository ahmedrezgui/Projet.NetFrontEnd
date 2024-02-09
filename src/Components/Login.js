import React, { useState } from 'react';
import "../Styles/Login.css";
import BgImage from "../Assets/bg-home.jpg";
import Hide from "../Assets/hide.svg"
import axios from 'axios';
import Cookies from 'js-cookie';

const Login = ({setAuthenticated, redirect}) => {
  const backgroundStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');

    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

      try {
          const response = await axios.post('https://localhost:7181/Auth/login', {
              Email: email,
              Password: password,
              RememberMe: rememberMe,
          }, { withCredentials: true });

          if (response.status === 200) {
              const data = response.data;


              // Extract the JWT token from the response
              const jwtToken = data.token;

              // Set the JWT token in the browser's local storage
              localStorage.setItem('JwtToken', jwtToken);
              if(redirect){
                setAuthenticated('authenticated')
              }
              window.location.href = "/meeting";


          } else {
              const errorData = response.data;
              console.error('Login failed:', errorData);
          }
      }
      catch (error) {
          if (error.response && error.response.status === 401) {
              setPasswordError('Invalid email or password');
          } else {
              setPasswordError('An error occurred during login');
          }
      }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={backgroundStyle}>
       
        <div className="formContainer">
          <div className="form-title">Log in</div>
          
         
          
          <form onSubmit={handleSubmit}>
          <div className='formbox'>
      <label>
        Email:
        <br></br>
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        <div className='hide'>
      Password: <img src={Hide} alt='hide'onClick={handleTogglePassword} ></img> 
      </div>
        <input  type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange}  />
      </label>
      <br />
      {passwordError && <div className="errormessage">{passwordError}</div>}
      <button type="submit" className='loginbutton'>Log in</button>
      <br />
      <div>
      <div className='rememberme'>
        <input type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
       <div>Remember Me</div> 
      </div>
      </div>
      <div className='noaccount'>Don't have an account? <span><a href="https://mail.google.com/mail/u/0/?fs=1&to=enactusinsat@gmail.com&tf=cm">Contact our executive board</a></span>
      </div>
            <div className='forgotpassword'>Forgot your password?</div>
      </div>
    </form>
    
    

        </div>
        
      </div>
    </>
  );
};

export default Login;
