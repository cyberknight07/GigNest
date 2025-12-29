import React from 'react'
import "./Register.styles.js"
import { useState } from 'react';
import axios from "axios"
import upload from '../../utils/uploadData.js';
import newRequest from "../../utils/apiRequest.js"
import {
    RegisterWrapper,
    RegisterForm,
    LeftRightWrapper,
    Container,
    Checkbox

} from "./Register.styles.js"
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  
  
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
      console.log(url);
      await newRequest.post("/auth/register", {
        ...user,
        img:url,
      })

      console.log("User Registered" + user.username);
      navigate("/signin");
    } catch (error) {
      console.log(error)
    }
  }
  


  return (
    <RegisterWrapper>
      <Container>
        <h1>Join Us and Build Your Nest</h1>
        <RegisterForm onSubmit={handleSubmit}>
          <LeftRightWrapper>
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
          </LeftRightWrapper>
          <LeftRightWrapper>
            <h1>I want to become a seller</h1>
            <label htmlFor="country">Country</label>
            <input type='country' placeholder='en' name='country' onChange={handleChange}/>
            <span><label htmlFor="seller">Activate a seller account</label>
            <Checkbox type='checkbox' name='seller' onChange={hangleSeller}/></span>
            {/* <label htmlFor="number">Phone number</label>
            <input type='number' placeholder='2354465' onChange={handleChange} /> */}
        </LeftRightWrapper>
        </RegisterForm>
      </Container>
    </RegisterWrapper>
  )
}

export default Register;