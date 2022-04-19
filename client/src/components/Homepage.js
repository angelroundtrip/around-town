import React, { useState } from 'react'
import NavBar from './NavBar';
import PostContainer from './PostContainer';


function Homepage({user, setUser, handleDeleteAccount, posts, weatherData, location, handleDeletePosts}) {

 
  return (
    <div className='App'>
      
      <h1>
        {
        user ?  
          <>
          <NavBar 
            user={user} 
            setUser={setUser} 
            handleDeleteAccount={handleDeleteAccount} 
            weatherData={weatherData}
          />

          <PostContainer 
          user={user} 
          location={location} 
          weatherData={weatherData} 
          handleDeletePosts={handleDeletePosts}
          />
          </>
          
          : 

          <>
          <h1 style={{fontFamily: 'fantasy', fontSize: '40px'}}>Around Town</h1>
          <hr></hr>
          
          <a href='/' style={{textDecoration: 'none'}}>
          <button style={{width:'45%', marginTop:'20%', fontWeight:'bold', padding:'2%', fontSize: '20px'}}>Seems that you're not logged in... Click HERE to login or signup</button>
          </a>
          </>
        }
      </h1>
    

    </div>
  )
}

export default Homepage
