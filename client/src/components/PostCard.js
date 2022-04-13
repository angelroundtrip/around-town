import React, { useState, useEffect  } from 'react'
import { Card } from 'semantic-ui-react'

function PostCard({post, user, location, handleDeletePosts, weatherData, users, locations}) {
  // console.log(post && post.post_content && post.user && post.user.username)
  // console.log(user)
  // console.log(user && user.home_location && weatherData.current && weatherData.current.temp_f)

  // const [users, setUsers] = useState([])
  // // * Renders all users
  // useEffect(()=>{
  //   fetch(`/users`)
  //   .then(r=>r.json())
  //   .then(setUsers)
  // }, [])

  // console.log(users && user.username)
  // console.log(users)
  // console.log(users && user.home_location)
  // console.log(locations)

  const allLocations = locations.map(location => {return location.name})
  // console.log(allLocations)
  // console.log(weatherData)
  // console.log(post && post.location && post.location.name)

  return (
    <div>

      <p></p>
      <Card style={{border: '1px solid gray', padding: '20px'}}>
        {user ? `${post && post.post_content && post.user && post.user.username} | 
        ${user.home_location} - 
        ${weatherData && weatherData.current && weatherData.current.temp_f} °F -
        ${weatherData && weatherData.current && weatherData.current.condition && weatherData.current.condition.text} | 
        ${post && post.post_content}` : null} 
        <button style={{float: 'right'}} onClick={() => handleDeletePosts(post.id)}>Delete Post</button>
      </Card>


      {/* <h1>{post.post_content}</h1> */}

    </div>
  )
}

export default PostCard