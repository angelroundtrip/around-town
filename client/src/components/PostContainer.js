import React, { useState } from 'react'
import PostForm from './PostForm'

function PostContainer({user, location, weatherData, handleDeletePosts, posts, locationData}) {

  // console.log(weatherData)
  

  return (
    <menu>
      
      <p>PostContainer</p>

      {/* <p>{user ? `Hello, ${user.username}! You're currently in ${user.home_location}! It's ${weatherData.currentTemperature} degrees °F`: null}</p> */}

      {/* <div style={{color: 'navy'}} >______________________________________________</div> */}

      <PostForm 
        user={user} 
        location={location} 
        handleDeletePosts={handleDeletePosts} 
        weatherData={weatherData}
        locationData={locationData}
      />
      
    </menu>
  )
}

export default PostContainer