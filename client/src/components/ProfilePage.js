import React from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import UserAccountUpdate from './UserAccountUpdate'


function ProfilePage({user, weatherData, handleDeleteAccount, setUser}) {
  console.log(user)
  
  return (
    <div>

      <NavBar />
      
      <p>Hello, {user.first_name}! Here's your personal profile page, where you can update or delete your account</p>

      <UserAccountUpdate user={user} setUser={setUser}/>

      <p>
        <NavLink to='/'>
          <button 
            style={{marginTop:'2%'}} 
            onClick={handleDeleteAccount}
          > 
            Delete Account 
          </button>
        </NavLink>
      </p>

      <a href='/home' style={{textDecoration: 'none'}}>
        <button>TEMP Home Button</button>
      </a>

    </div>
  )
}

export default ProfilePage