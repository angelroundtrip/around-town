import React, { useState, useEffect } from 'react'

// * MUST WORK ON POSTS AND SCHEMA. CURRENT POST CONSOLE LOGS BUT DOESN'T SAVE TO ANY USER OR TO THE DATABASE. SEEMS TO BE RELATED TO THE SCHEMA. 

function PostForm({user, userLocation}) {

  const [posts, setPosts] = useState([])
  const [location, setLocation] = useState('')
  // const [userID, setUserID] = useState(user.id)
  // const [location, setLocation] = useState(userLocation)
  const [errors, setErrors] = useState([])

  // console.log(userID)
  // console.log(location)
  // console.log(userLocation)
  // console.log(user? user.username : null)

  const handlePosts = (e) => setPosts(e.target.value)
  const handleLocation = (e) => setLocation(e.target.value)
  // const handleUserID = (e) => setUserID(e.target.value)
  // const navigate = useNavigate();

  function handleContent(postObj){
    fetch('/posts',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(postObj)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(json =>  {
          setPosts([...posts,json])
        })
      } else {
        res.json()
        .then(json => {
        setErrors(Object.entries(json.errors))
        })
      }
    })
}

  function submitPost(e){
      e.preventDefault()
      const newPost = {
        post_content: posts,
        // id: user.id,
        user_id: user.id,
        location_id: location,
        // location_id: location
        // user_id: userID
      }
      console.log(newPost)
      handleContent(newPost) 
    }
      useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(posts => {
          console.log(posts)
          setPosts(posts)
          });
        }, []);

       
    
      // fetch(`/posts`,{
      //   method:'POST',
      //   headers:{'Content-Type': 'application/json'},
      //   body:JSON.stringify(newPost)
      // })
      // .then(res => res.json())
      // .then(post => {
      //     console.log(post)
          // if (!user.errors)  { 
            // alert("Post successful")
            // navigate(`/home`)
          // } else {
          // setErrors(Object.entries(user.errors))
        // }
      // })  
    // }

  return (

    <div > 

    <p></p>
    <form onSubmit={submitPost}>

    <label >
      Location:
      <input type="text" value={location} onChange={(e) => handleLocation(e)} />
    </label>

    <label >
      Post:
      <input type="text" value={posts} onChange={(e) => handlePosts(e)} />
    </label>

    {/* <label >
      User:
      <input type="text" value={userID} onChange={(e) => handleUserID(e)} />
    </label> */}
    
    <p></p>
    <button type="submit">Post</button>

    </form>
    {/* {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null} */}
    </div>
  )
}
  
export default PostForm
