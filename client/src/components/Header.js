import React, { useState, useEffect } from 'react'
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

function Header({user, setUser, handleDeleteAccount, weatherData}) {

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
  // console.log(user)

  
  
  return (
    
    <div>
      <h1>HEADER</h1>
      
      <h2> {user ? user.username : <a href='/' style={{textDecoration: 'none'}}> Login </a>}</h2>
      <span></span>

      <a href='/profile' style={{textDecoration: 'none'}}>PROFILE PAGE</a>
      
       {/* Other useful data is available, would like to include weather icon eventually */}
      <h5> {user ? user.home_location : null} | {weatherData.current && weatherData.current.temp_f} °F {weatherData.condition && weatherData.condition.icon} {weatherData.current && weatherData.current.condition && weatherData.current.condition.text}</h5>
      <span></span>
      {/* <h3>{user ? user.home_location : null}</h3> */}
     
      <button onClick={handleLogout}>Logout</button>
   
      

      {/* <button onClick={handleUpdateAccount}>Update Account</button> */}
      {/* <UserAccountUpdate user={user} setUser={setUser}/> */}

      {/* <PostForm user={user} userLocation={userLocation}/> */}
      <Location />

      <hr></hr>

    </div>

  )
}

export default Header