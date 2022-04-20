import React from 'react'
import { NavLink } from 'react-router-dom'
import Location from './Location'
import UserAccountUpdate from './UserAccountUpdate'


function ProfilePage({user, weatherData, handleDeleteAccount, setUser}) {
  
  return (
    <div>

      <h1 style={{fontFamily: 'fantasy', fontSize:'40px'}}>Around Town</h1>
      <hr></hr>
      
      <p style={{fontSize:'24px'}}>Hello, {user.first_name}! Here's your personal profile page, where you can update or delete your account.</p>


      <UserAccountUpdate user={user} setUser={setUser}/>
  
      <a href='/home' style={{textDecoration: 'none'}}>
        <button style={{width:'10%'}}>Return Home</button>
      </a>

      <p style={{fontSize:'20px', marginTop:'40px'}}>Get an error while trying to post a comment? Sorry about that... Add your location below and please try again.</p>
      <Location />

      <p >
        <NavLink to='/'>
          <button 
            style={{marginTop:'2%', color: 'red', width:'10%'}} 
            onClick={handleDeleteAccount}
          > 
            Delete Account 
          </button>
        </NavLink>
      </p>


    </div>
  )
}

export default ProfilePage