import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Location from './Location'
import PostList from './PostList'


function PostForm({user, location}) {

  // * Post form is working and posts are saving to the database, but the location info isn't ideal 

  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState([])
  // const id = useParams()

  // console.log(user.id)
  // console.log(location)
  // console.log(posts)

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
    // const addNewPost = [newPost, ...posts]
    // setPosts(addNewPost)
    addNewPosts(newPost)
    setPostContent("")
    console.log(newPost)
    //! MIGHT NEED CODE BELOW
    // fetch(`/posts`,{
    //   method: "POST",
    //   headers: {"Content-Type": "application/json",},
    //   body: JSON.stringify(newPost),
    //   credentials: "include"
    // })
    //   .then(r=>r.json())
    //   .then(console.log); 
  }
  // * Renders all posts
  useEffect(()=>{
    fetch(`/posts`)
    .then(r=>r.json())
    .then(setPosts)
  }, [])


  // const handleDeletePost = () => {
  //   fetch(`http://localhost:4000/posts/${posts.id}`,{
  //     method:"DELETE",
  //   })
  //   setPosts(null);
  //   // alert("Post deleted")
  // }

  // const addPost = (post) => setPosts([post, ...posts])
  // console.log(user.posts && user.posts.post_content)
  console.log(posts)

  return(
    <div>
      <form onSubmit={submitNewPost}>

      <h1>NEW POST</h1>

      <input onChange={(e)=>setPostContent(e.target.value)} type="text" name="postContent" value={postContent}/>
     
      <button type="submit">Add Post</button>

      <PostList posts={posts} user={user}/>

      {/* <button onClick={handleDeletePost}>Delete Post</button> */}
      

      </form>
    </div>
  )
}
export default PostForm
