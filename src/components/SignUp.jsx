import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function SignUp() {
  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({name:"", email: "", password: '', repassword: ''})


  const handleUserDetails = e => {
    setUserDetails({...userDetails, [e.target.id]: e.target.value})
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/users/signup', userDetails)
      if(res.data.ok) {
        navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSignUp}>
      <h1>Sign Up</h1>
      <label htmlFor='name'>Name</label>
      <input onChange={handleUserDetails} type='text' id='name' />
      <label htmlFor='email'>Email</label>
      <input onChange={handleUserDetails} type='text' id='email' />
      <label htmlFor='password'>Password</label>
      <input onChange={handleUserDetails} type='text' id='password' />
      <label htmlFor='repassword'>Re-Password</label>
      <input onChange={handleUserDetails} type='text' id='repassword' />
      <button className='btn-submit' type='submit'>
        Sign Up
      </button>
    </form>
  );
}
