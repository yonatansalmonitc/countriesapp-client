import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/appContext';
import '../App.css';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function CountryForm() {
  const [countryInfo, setCountryInfo] = useState({ name: '', capital: '' });
  const { addCountry, token } = useContext(AppContext);
  const [countryImage, setCountryImage] = useState('')

  const handleCountryInfo = (e) => {
    setCountryInfo({ ...countryInfo, [e.target.id]: e.target.value });
  };

  const handleImage = (e) => {
    setCountryImage(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const countryInfoData = new FormData()
      countryInfoData.append('name', countryInfo.name)
      countryInfoData.append('capital', countryInfo.capital)
      countryInfoData.append('countryImage', countryImage)

      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/countries`, countryInfoData, {withCredentials: true} );
      addCountry(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <Form.Control placeholder='Country..' onChange={handleCountryInfo} value={countryInfo.name} className='textInput' name='name' id='name' />
        <Form.Control
          placeholder='Capital..'
          onChange={handleCountryInfo}
          value={countryInfo.capital}
          className='textInput'
          name='capital'
          id='capital'
        />
        <input type='file' accept='img/*' onChange={handleImage} />
        <Button type='submit'>Add Country</Button>
      </form>
    </div>
  );
}

export default CountryForm;
