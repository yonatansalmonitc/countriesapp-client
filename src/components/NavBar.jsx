import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
  return (
    <ul className='linkContainer'>
      <li>
        <Link to='/'>Login</Link>
      </li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/signup'>Signup</Link>
      </li>
    </ul>
  );
}

export default NavBar;
