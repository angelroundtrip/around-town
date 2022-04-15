import React, { useState } from 'react'
import Header from './NavBar';
import PostContainer from './PostContainer';


function Homepage({user, setUser, handleDeleteAccount, posts, weatherData, location, handleDeletePosts}) {

  return (
    <div>
      
      <Header 
        user={user} 
        setUser={setUser} 
        handleDeleteAccount={handleDeleteAccount} 
        weatherData={weatherData}
      />

      <h1>Homepage</h1>

      <PostContainer 
        user={user} 
        location={location} 
        weatherData={weatherData} 
        handleDeletePosts={handleDeletePosts}
      />

    </div>
  )
}

export default Homepage
