import React from 'react'
import { NavLink } from 'react-router-dom'
import UserAccountUpdate from './UserAccountUpdate'

function ProfilePage({user, weatherData, handleDeleteAccount, setUser}) {
  // console.log(weatherData)
  
  return (
    <div>

      <h1>Around Town</h1>
      <hr></hr>
      
      Hello, {user.first_name}! Here's your personal profile page, where you can update or delete your account

      <p>
        <NavLink to='/'>
          <button onClick={handleDeleteAccount}> Delete Account </button>
        </NavLink>
      </p>

      <UserAccountUpdate user={user} setUser={setUser}/>

      <a href='/home' style={{textDecoration: 'none'}}>
        <button>TEMP Home Button</button>
      </a>

    </div>
  )
}

export default ProfilePage