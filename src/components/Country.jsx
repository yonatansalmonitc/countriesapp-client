import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/appContext';
import '../App.css'

import axios from 'axios';

function Country({ country }) {
  const { deleteCountry } = useContext(AppContext);
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/countries/${country.id}`, {withCredentials: true});
      if (res.data.ok) {
        deleteCountry(country.id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='country p-2 my-2'>
      <div className='header'>
        <div className='date'></div>
        <div className='delete' onClick={handleDelete}>
          &times;
        </div>
      </div>
      <div className='countryBody'>
        <h4>{country.name}</h4>
        <p>{country.capital}</p>
        <img className='countryImage' src={country.imageUrl} alt='country'></img>
      </div>
    </div>
  );
}

export default Country;
