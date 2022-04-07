import React from 'react'
// import { useNavigate } from "react-router-dom";


// const randomize = Math.floor(Math.random() * 1000000)
// const WEATHER_API_KEY = process.env.REACT_APP_API_KEY

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
// * Moving on for now, but come back and hide api key...
// const API = 'apikey'

function Header({user, setUser, handleDeleteAccount}) {

  // const userLocation = user.home_location
  const userLocation = 'New York, NY'

  // * API works when clicked, need to set userLocation dynamically
  const fetchUserWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=965b870130e44b87b59212145220604&q=${userLocation}&aqi=no`)
      .then(res => res.json())
      // .then(data => console.log(data))
      // .then(data => console.log(data.current.temp_f))
      .then(data => {
        console.log(data)
        setUser({home_temp: data.current.temp_f})
        setUser(user)
    })
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
      <h2>{user ? user.username : <a href='/' style={{textDecoration: 'none'}}> Login </a>}</h2>
      <h3>{user ? user.home_location : null}</h3>
      <h1>USER WEATHER: {`${fetchUserWeather.data}`}</h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={fetchUserWeather}>TEST API</button>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <hr></hr>
    </header>
  )
}

export default Header