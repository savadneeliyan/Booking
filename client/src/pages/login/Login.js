import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username:undefined,
    password:undefined,
  });

  const {loading , error , dispatch} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (event) => {
    setCredentials((prev) => ({... prev , [event.target.id]:event.target.value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({type:"LOGIN_START"})
    try {
        const res = await axios.post("/auth/login",credentials)
        dispatch({type:"LOGIN_SUCCESS" , payload:res.data.details})
        navigate("/")
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE" , payload:error.response.data})
    }
  };

  
  return (
    <div className="login-container ">
        <h1>Login</h1>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" className='loginInput' placeholder='username' onChange={handleChange} required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input type="password" className='loginInput' id="password" placeholder='password' onChange={handleChange} required />
        </div>
        <button className='loginButton' disabled={loading} onClick={handleSubmit} type="submit">Login</button>
        {error && <span>{error.message}</span>}
    </div>
  );
}

export default Login;

