import React from 'react'
import PostCard from './PostCard'
import PostForm from './PostForm'

function PostContainer({user, location}) {
  return (
    <menu>
      
      <p>POSTS LIVE IN THE PostContainer</p>

      <p>Japan is awesome</p>

      <p>New York is cool</p>

      <p>Seoul has soul</p>

      <p>{user ? `Hello, ${user.username}! You're currently in ${user.home_location}!`: null}</p>

      <PostCard />

      <PostForm user={user} location={location}/>
      
    </menu>
  )
}

export default PostContainer