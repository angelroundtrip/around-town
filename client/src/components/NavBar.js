import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Location from './Location';
import PostForm from './PostForm';
import UserAccountUpdate from './UserAccountUpdate';
import { Header } from 'semantic-ui-react'

// * RENAME HEADER
function NavBar({user, setUser, weatherData}) {

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
    
    <Header>

      <Header as='h1'>Around Town</Header>

      <div style={{float: 'right'}}>
      <span className="nav"> {user ? user.username : <a href='/' style={{textDecoration: 'none'}}> <span className="title">Login</span> </a>}</span>

      <a href='/account' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><span>Profile Page</span></a>
    
      <a href='/' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><span onClick={handleLogout}>Logout</span></a>
      </div>
     
      <div style={{marginRight:'60%', marginTop:'2%'}}>
       {/* Other useful data is available, would like to include weather icon eventually */}
      <span className="nav" style={{fontSize:'18px'}}> {user ? `${weatherData.currentCity}, ${weatherData.currentState}, ${weatherData.currentCountry} - ${weatherData.currentTemperature} °F ${weatherData.currentCondition}` : null} </span>
      </div>
  
      {/* <h3>{user ? user.home_location : null}</h3> */}
     
   
      

      {/* <button onClick={handleUpdateAccount}>Update Account</button> */}
      {/* <UserAccountUpdate user={user} setUser={setUser}/> */}

      {/* <PostForm user={user} userLocation={userLocation}/> */}
      {/* <Location /> */}

      <hr></hr>

    </Header>

  )
}

export default NavBar