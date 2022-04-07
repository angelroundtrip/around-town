import React from 'react'
// import { useNavigate } from "react-router-dom";


// const randomize = Math.floor(Math.random() * 1000000)
// const WEATHER_API_KEY = process.env.REACT_APP_API_KEY

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
// * Moving on for now, but come back and hide api key...
// const API = 'apikey'

function Header({user, setUser, handleDeleteAccount}) {

  const userLocation = 'New York, NY'

  // * API works when clicked, need to set userLocation dynamically
  const favCityWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=965b870130e44b87b59212145220604&q=${userLocation}&aqi=no`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => console.log(data.current.temp_f))
  }

  // const navigate = useNavigate();

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
      <button onClick={handleLogout}>Logout</button>
      <button onClick={favCityWeather}>TEST API</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <hr></hr>
    </header>
  )
}

export default Header