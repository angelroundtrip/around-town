import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Location from './Location';
import PostForm from './PostForm';
import UserAccountUpdate from './UserAccountUpdate';
// import ENV from './config/locales/application.yml'
// import { useNavigate } from "react-router-dom";


// const randomize = Math.floor(Math.random() * 1000000)
// const WEATHER_API_KEY = process.env.REACT_APP_API_KEY

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
// * Moving on for now, but come back and hide api key...
// * API works, refresh changes to null

function Header({user, setUser, weatherData}) {

  
  
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
  
  return (
    
    <div>

      <h1>HEADER</h1>
      
      <h2> {user ? user.username : <a href='/' style={{textDecoration: 'none'}}> Login </a>}</h2>

      <NavLink to='/'>
      <button onClick={handleLogout}>Logout</button>
      </NavLink>

      <a href='/account' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><p>PROFILE PAGE</p></a>
     
       {/* Other useful data is available, would like to include weather icon eventually */}
      <h5> {user ? `${weatherData.currentCity}, ${weatherData.currentState}, ${weatherData.currentCountry} - ${weatherData.currentTemperature} °F ${weatherData.currentCondition}` : null} </h5>
      <span></span>
      {/* <h3>{user ? user.home_location : null}</h3> */}
     
   
      

      {/* <button onClick={handleUpdateAccount}>Update Account</button> */}
      {/* <UserAccountUpdate user={user} setUser={setUser}/> */}

      {/* <PostForm user={user} userLocation={userLocation}/> */}
      <Location />

      <hr></hr>

    </div>

  )
}

export default Header