import React from 'react'
import PostCard from './PostCard'

function PostContainer({user}) {
  return (
    <menu>
      
      <p>POSTS LIVE IN THE PostContainer</p>

      <p>Japan is awesome</p>

      <p>New York is cool</p>

      <p>Seoul has soul</p>

      <p>{user ? `Hello, ${user.username}!`: null}</p>

      <PostCard />
      
    </menu>
  )
}

export default PostContainer