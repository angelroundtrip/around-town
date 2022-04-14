import React from 'react'
import Header from './Header';
import PostContainer from './PostContainer';

function Homepage({user, setUser, handleDeleteAccount, weatherData, location, handleDeletePosts}) {

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