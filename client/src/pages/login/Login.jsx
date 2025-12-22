import React, { useState } from 'react'
import axios from "axios"
import "./login.css"
import newRequest from '../../../utils/newRequest'
import {useNavigate} from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError ] = useState(null)
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await newRequest.post("auth/login", {
        username, password
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
      
    }catch(e){
      setError(e); 
      console.log("Login -> " + e);
    }

  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='johndoe' onChange={e => setUsername(e.target.value)}/>
        <label htmlFor="">Password</label>
        <input type="password" name='password' placeholder='.........' onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login