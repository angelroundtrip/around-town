import React, { useState, useEffect } from 'react'
import PostList from './PostList'
import { Input } from 'semantic-ui-react'
import SearchBar from './SearchBar'


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
    .then(post => {
      setPosts([post, ...posts])
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

   // * Search function by location
   const [locationData, setLocationData] = useState([])

   useEffect(() => {
     fetch('/posts')
       .then(response => response.json())
       .then(setLocationData)
   }, [])
 
   const [search, setSearch] = useState('')
   const changeSearch = (e) => setSearch(e.target.value)
 
   const filteredSearch = locationData.filter(locationObj => {
     const search1 = locationObj.user.home_location.toLowerCase()
     const search2 = search.toLowerCase()
     return search1.includes(search2)
   })
  //  console.log(filteredSearch)
  //  console.log(posts) 

  return(
    <div>
      <form onSubmit={submitNewPost}>

      <SearchBar changeSearch={changeSearch} />
      <p></p>

      <Input 
        onChange={(e)=>setPostContent(e.target.value)} 
        type="text" 
        name="postContent" 
        placeholder="What's on your mind?"
        value={postContent}
      />
      <button type="submit"> Add Post </button>
   
      <PostList 
        posts={filteredSearch} 
        user={user} 
        // location={filteredSearch} 
        handleDeletePosts={handleDeletePosts} 
        weatherData={weatherData}
        // locationSearch={filteredSearch}
      />

      {/* <h1> NEW POST </h1> */}
    
      </form>
    </div>
  )
}

export default PostForm
