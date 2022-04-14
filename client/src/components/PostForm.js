import React, { useState, useEffect } from 'react'
import PostList from './PostList'


function PostForm({user, location, handleDeletePosts, weatherData}) {

  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState([])
  
  const addNewPosts = newObj => {
    fetch(`/posts`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(data => {
      setPosts([data, ...posts])
    })
  }

  const submitNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      post_content: postContent,
      user_id: user.id,
      location_id: location.id
    }
    addNewPosts(newPost)
    setPostContent("")
    console.log(newPost)
  }

  // * Renders all posts
  useEffect(()=>{
    fetch(`/posts`)
    .then(r=>r.json())
    .then(setPosts)
  }, [])

  return(
    <div>
      <form onSubmit={submitNewPost}>

      <PostList 
        posts={posts} 
        user={user} 
        location={location} 
        handleDeletePosts={handleDeletePosts} 
        weatherData={weatherData}
      />

      <h1> NEW POST </h1>

      <input 
        onChange={(e)=>setPostContent(e.target.value)} 
        type="text" 
        name="postContent" 
        value={postContent}
      />
     
      <button type="submit"> Add Post </button>
      
      </form>
    </div>
  )
}

export default PostForm
