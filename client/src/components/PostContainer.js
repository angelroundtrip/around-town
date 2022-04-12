import React from 'react'
import PostCard from './PostCard'
import PostForm from './PostForm'

function PostContainer({user, location, weatherData}) {

  console.log(weatherData)

  return (
    <menu>
      
      <p>POSTS LIVE IN THE PostContainer</p>

      <p>{user ? `Hello, ${user.username}! You're currently in ${user.home_location}! It's ${weatherData.current && weatherData.current.temp_f} degrees F`: null}</p>

      {/* <PostCard /> */}
      {/* <Card>{user ? `${user && user.username} | ${post && post.post_content}` : null}</Card> */}

      <PostForm user={user} location={location}/>
      
    </menu>
  )
}

export default PostContainer