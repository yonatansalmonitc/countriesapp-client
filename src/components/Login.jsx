import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AppContext from '../context/appContext';
import '../App.css';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setCurrentUser, setToken} = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const userInfo = {
        email,
        password,
      };
      const res = await axios.post('http://localhost:8080/users/login', userInfo, {withCredentials: true});
      console.log(res.data)
      if(res.data.ok) {
        setCurrentUser(res.data.userId)
        navigate('/home')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleLogIn}>
      <h1>Log In</h1>
      <label htmlFor='email'>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type='text' id='email' />
      <label htmlFor='password'>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type='text' id='password' />
      <button className='btn-submit' type='submit'>
        Log In
      </button>
      <Link className='link' to='/signup'>
        Not a member? Sign up
      </Link>
    </form>
  );
}
