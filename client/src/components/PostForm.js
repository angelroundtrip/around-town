import React, { useState, useEffect } from 'react'
import Location from './Location'

// * location_id returns a string instead of an integer
// * Relationships ARE working when seeding manually. Need to figure out the form.

function PostForm({user, location}) {

// //   const [posts, setPosts] = useState([])
// //   const [l, setL] = useState([])
// //   const [errors, setErrors] = useState([])


// //   const handlePosts = (e) => setPosts(e.target.value)
// //   // const handleLocation = (e) => setLocation(e.target.value)
// //   const handleLocation = (e) => setL(e.target.value)
// //   // const handleUserID = (e) => setUserID(e.target.value)
// //   // const navigate = useNavigate();

// //   function handleContent(postObj){
// //     fetch(`/posts`,{
// //       method:'POST',
// //       headers: {'Content-Type': 'application/json'},
// //       body:JSON.stringify(postObj)
// //     })
// //     .then(res => {
// //       if(res.ok){
// //         res.json()
// //         .then(json =>  {
// //           setPosts([...posts,json])
// //           // setLocation([...location,json])
// //         })
// //       } else {
// //         res.json()
// //         .then(json => {
// //         setErrors(Object.entries(json.errors))
// //         })
// //       }
// //     })
// // }

// //   function submitPost(e){
// //       e.preventDefault()
// //       const newPost = {
// //         post_content: posts,
// //         // id: user.id,
// //         user_id: user.id,
// //         // location_id: location
// //       }
// //       // const newLocation = {
// //       //   name: location,
// //       //   location_id: user.id,
// //       // }
// //       console.log(newPost)
// //       // console.log(newLocation)
// //       handleContent(newPost) 
// //       // handleContent(newLocation)
// //     }
// //       useEffect(() => {
// //         fetch('/posts')
// //         .then(res => res.json())
// //         .then(posts => {
// //           console.log(posts)
// //           setPosts(posts)
// //           });
// //         }, []);


// //   return (

// //     <div > 

// //     <p></p>
// //     <form onSubmit={submitPost}>

// //     <label >
// //       Location:
// //       <input type="text" value={l} onChange={(e) => handleLocation(e)} />
// //     </label>

// //     <label >
// //       Post:
// //       <input type="text" value={posts} onChange={(e) => handlePosts(e)} />
// //     </label>

// //     {/* <label >
// //       User:
// //       <input type="text" value={userID} onChange={(e) => handleUserID(e)} />
// //     </label> */}
    
// //     <p></p>
// //     <button type="submit">Post</button>

// //     {/* <Location user={user}/> */}

// //     </form>
// //     {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
// //     </div>
// //   )
// // }

// // ! TESTING

// const [posts, setPosts] = useState([])
// const [userID, setUserID] = useState(user.id)
// const [locationID, setLocationID] = useState(location.id)
//   const [errors, setErrors] = useState(false)

//   function handleSubmitNewPost(e){
//     e.preventDefault()
//     const formInputData = {
//       post_content: posts,
//       user_id: userID,
//       location_id: locationID
//     }
//     // update state array with all posts plus new post
//     const newPostArray=[formInputData,...posts]
//     setPosts(newPostArray)
//     // clear the fields
//     setPosts("")
//     setUserID("");
//     setLocationID("");
//     // post request to persist data
//     fetch("/posts",{
//       method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formInputData),
       
//       })
//       .then(r=>r.json())
//       .then(console.log); 
//   }

// function handlePost(obj){
//   fetch('/posts',{
//     method:'POST',
//     headers: {'Content-Type': 'application/json'},
//     body:JSON.stringify(obj)
//   })
//   .then(res => {
//     if(res.ok){
//       res.json()
//       .then(json =>  {
//         setPosts([...posts,json])
//       })
//     } else {
//       res.json()
//       .then(json => {
//       setErrors(Object.entries(json.errors))
//       })
//     }
//   })
// }

// function onSubmit(e){
//   e.preventDefault()
//   const post = {
//     // user_id: user.id,
//     // location_id: location.id,
//     post_content: posts
//   }
//   console.log(post)
//   handlePost(post)
// }
//   return (
//     <div className="App">
//       {errors?errors.map(e => <div>{e}</div>):null}
//      <form onSubmit={onSubmit}>
//      <label>
//         Post
//         <input type="text" name="post" value={formData.posts} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label>
//       <br/>
//       {/* <label>
//       Genre
//         <input type="text" name="genre" value={formData.genre} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label>
//       <br/>
//       <label>
//       Budget
//         <input type="number" name="budget" value={formData.budget} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label>
//       <br/>
//       <label>
//       Image
//         <input type="text" name="image" value={formData.image} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label>
//       <br/>
//       <label>
//       Director
//         <input type="text" name="director" value={formData.director} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label>
//       <br/>
//       <label>
//       Description
//         <textarea type="text" name="description" rows="4" cols="50" value={formData.description} onChange={(e) => setFormData({...formData, [e.target.name]:e.target.value})} />
//       </label> */}
//       <br/>
//       <input type="submit" value="Submit Post" />
//      </form>
//     </div>
//   );
// }

// * Post kind of works! But default state for location on App.js is not correct
  const [postContent, setPostContent] = useState("")
  console.log(user.id)
  console.log(location.id)

  const createPost = (e) => {
    e.preventDefault()
    const post = {
      post_content: postContent,
      user_id: user.id,
      location_id: location.id
    }
    console.log(post)
    fetch("/posts",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
        credentials: "include"
      })
      .then(r=>r.json())
      .then(console.log); 
  }

  return(
    <div>
      <h1>NEW POST</h1>
      <form onSubmit={createPost}>
        <input onChange={(e)=>setPostContent(e.target.value)} type="text" name="postContent" value={postContent}/>
        <button type="submit">Add Post</button>
        </form>
    </div>
  )
}
export default PostForm
