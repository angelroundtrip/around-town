// import React, { useState, useEffect } from "react";
// import { Input } from 'semantic-ui-react'
// import PostList from './PostList'

// // POST IS WORKING together with search, but a refresh is required to see new post
// function NewPostForm({user, location }) {
//   const [postContent, setPostContent] = useState("")
//   const [posts, setPosts] = useState([])
  
//   const addNewPosts = newObj => {
//     fetch(`/posts`, {
//       method: 'POST', 
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(newObj)
//     })
//     .then(r => r.json())
//     .then(data => {
//       setPosts([data, ...posts])
//     })
//   }

//   const submitNewPost = (e) => {
//     e.preventDefault()
//     const newPost = {
//       post_content: postContent,
//       user_id: user.id,
//       location_id: location.id
//     }
//     addNewPosts(newPost)
//     setPostContent("")
//     console.log(newPost)
//   }

//   // * Renders all posts
//   useEffect(()=>{
//     fetch(`/posts`)
//     .then(r=>r.json())
//     .then(setPosts)
//   }, [])

//   return(
//     <div>
//       <form onSubmit={submitNewPost}>

//       {/* <PostList 
//         posts={posts} 
        
//       /> */}

//       <h1> NEW POST </h1>

//       <input 
//         onChange={(e)=>setPostContent(e.target.value)} 
//         type="text" 
//         name="postContent" 
//         value={postContent}
//       />
     
//       <button type="submit"> Add Post </button>
      
//       </form>
//     </div>
//   )
// }

// export default NewPostForm;