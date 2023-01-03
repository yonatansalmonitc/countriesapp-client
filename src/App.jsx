import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import AppContext from './context/appContext';

function App() {
  const [countryList, setCountryList] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [currentUser, setCurrentUser] = useState('')


  const fetchCountries = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/countries`, {withCredentials: true});
      console.log(res.data);
      setCountryList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const addCountry = (newCountry) => {
    const newCountriesArray = [...countryList, newCountry];
    setCountryList(newCountriesArray);
  };

  const deleteCountry = (countryId) => {
    const newArray = countryList.filter((country) => country.id !== countryId);
    setCountryList(newArray);
  };
  return (
    <AppContext.Provider value={{ countryList, addCountry, deleteCountry, setToken, setCurrentUser, token }}>
      <div className='mainContainer'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
