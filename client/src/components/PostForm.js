import React, { useState, useEffect } from 'react'


function PostForm({user}) {

  const [city, setCity] = useState("")
  const [comment, setComment] = useState("")
  const [post, setPost] = useState([])
  const [error, setError] = useState(false)

  function handlePost(e){
    setComment(e.target.value)
  }

  function handleNewPost(e) {
    e.preventDefault()
    const formInputData = {
      city: city,
      comment: comment
    }
    // update state array with all posts plus new post
    const newPostArray=[formInputData, ...post]
    setPost(newPostArray)
    // clear the fields
    setCity("")
    setComment("");
    // post request to persist data
    fetch("/posts",{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputData),
       
      })
      .then(r=>r.json())
      .then(console.log); 
  }

    useEffect(() => {
      fetch(`/posts`)
      .then((r) => r.json())
      .then(setPost)
    }, [user])
  
    return (

      <div>

        {error?error.map(e => <div>{e}</div>):null}

       <form onSubmit={handleNewPost}>

        <span>
          <label>
            Post:
            <input type="text" name="comment" value={comment} onChange={handlePost} />
          </label>
          
          <button type="submit" > Submit Post </button>

        </span>
       </form>

      </div>
    );
  }
  

export default PostForm