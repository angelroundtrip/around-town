import React from 'react'
import PostForm from './PostForm'

function PostContainer({user, location, weatherData, handleDeletePosts}) {

  // console.log(weatherData)

  return (
    <menu>
      
      <p>PostContainer</p>

      <p>{user ? `Hello, ${user.username}! You're currently in ${user.home_location}! It's ${weatherData.currentTemperature} degrees °F`: null}</p>

      <>______________________________________________</>

      <PostForm 
        user={user} 
        location={location} 
        handleDeletePosts={handleDeletePosts} 
        weatherData={weatherData}
      />
      
    </menu>
  )
}

export default PostContainer