import React, { useState, useEffect } from 'react'
// import ENV from './config/locales/application.yml'
// import { useNavigate } from "react-router-dom";


// const randomize = Math.floor(Math.random() * 1000000)
// const WEATHER_API_KEY = process.env.REACT_APP_API_KEY

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
// * Moving on for now, but come back and hide api key...
const weatherAPIUrl = 'http://api.weatherapi.com/v1/current.json?key=&q=New York, NY&aqi=no'

function Header({user, setUser, handleDeleteAccount}) {

  const [weatherData, setWeatherData] = useState({});
  
  useEffect(() => {
    getWeatherWithFetch();
  }, []);

  const getWeatherWithFetch = async () => {
    const response = await fetch(weatherAPIUrl);
    const jsonData = await response.json();
    setWeatherData(jsonData);
  };
  // console.log(weatherData.current && weatherData.current.condition && weatherData.current.condition.text)

  // const userLocation = user.home_location
  // const WEATHER_API_KEY = ENV['WEATHER_API_KEY']
  // const userLocation = 'New York, NY'

  // * API works when clicked, need to set userLocation dynamically

  const handleLogout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
   
  // const currentUser = user
  
  console.log(user)
  // console.log(currentUser)

  return (
    <header>
      <h1>Header</h1>

       {/* Other useful data is available, would like to include weather icon eventually */}
      <h5> {user ? user.home_location : null} - Temperature: {weatherData.current && weatherData.current.temp_f}°F {weatherData.condition && weatherData.condition.icon} {weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</h5>

      <h2>{user ? user.username : <a href='/' style={{textDecoration: 'none'}}> Login </a>}</h2>
      <h3>{user ? user.home_location : null}</h3>
     
      <button onClick={handleLogout}>Logout</button>
   
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <hr></hr>
    </header>
  )
}

export default Header