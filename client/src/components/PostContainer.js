import React from 'react'
import Post from './Post'


function PostContainer({user, location, weatherData, handleDeletePosts, posts, locationData}) {

  return (
    <menu>

      <Post 
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