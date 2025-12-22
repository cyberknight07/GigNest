import React from 'react'
import "./register.css"
import { useState } from 'react';
import axios from "axios"
import upload from '../../../utils/upload';
import newRequest from "../../../utils/newRequest"

const Register = () => {

  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  
  
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value};
    });
  }
  
  const hangleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked};
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      
      await newRequest.post("/auth/register", {
        ...user,
        img:url,
      })

    } catch (error) {
      console.log(error)
    }
  }
  
  console.log(user);





  return (
    <div className="register">
      <div className="container">
        <h1>Join Us and Build Your Nest</h1>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="username">Username</label>
            <input type='text' placeholder='Tikhjfkf' name='username' onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input type='email' placeholder='Tikhjfkf@gmail.com' name='email' onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input type='passsword' placeholder='Tikhjfkf@gmail.com' name='password' onChange={handleChange}/>
            <label htmlFor="cover">Profile Image</label>
            <input type="file" onChange={e=> setFile(e.target.files[0])} />
            <label htmlFor="description">Description</label>
            <textarea name="desc" placeholder='Write description' id="" cols="20" rows="16" onChange={handleChange}></textarea>
            <button type='submit'>Send</button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <label htmlFor="country">Country</label>
            <input type='country' placeholder='en' name='country' onChange={handleChange}/>
            <label htmlFor="seller">Activate a seller account</label>
            <input type='checkbox' name='seller' placeholder='e.g., Tikhjfkf' onChange={hangleSeller}/>
            {/* <label htmlFor="number">Phone number</label>
            <input type='number' placeholder='2354465' onChange={handleChange} /> */}
        </div>
        </form>
      </div>
    </div>
  )
}

export default Register;