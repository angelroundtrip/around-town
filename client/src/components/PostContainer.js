import React from 'react'
import PostCard from './PostCard'
import PostForm from './PostForm'

function PostContainer({user, location, weatherData, handleDeletePosts}) {

  console.log(weatherData)

  return (
    <menu>
      
      <p>PostContainer</p>

      <p>{user ? `Hello, ${user.username}! You're currently in ${user.home_location}! It's ${weatherData.current && weatherData.current.temp_f} degrees F`: null}</p>

      <>______________________________________________</>

      {/* <PostCard /> */}
      {/* <Card>{user ? `${user && user.username} | ${post && post.post_content}` : null}</Card> */}

      <PostForm user={user} location={location} handleDeletePosts={handleDeletePosts} weatherData={weatherData}/>
      
    </menu>
  )
}

export default PostContainer