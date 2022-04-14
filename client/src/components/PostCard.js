import React, { useState, useEffect  } from 'react'
import { Card } from 'semantic-ui-react'
import PostContainer from './PostContainer'

function PostCard({post, user, location, handleDeletePosts, users, locations, weatherData}) {

  // * Post cards work, but need some work so that correct location info is displayed
  // const allLocations = locations.map(location => {return location.name})
  // console.log(allLocations)
  // console.log(weatherData)
  // console.log(post)

  return (
    <div>

      <p></p>
      <Card style={{border: '1px solid gray', padding: '20px'}}>
        {user ? `${post && post.post_content && post.user && post.user.username} | 
          ${post && post.location && post.location.name} - 
          ${weatherData.currentCity} °F -
          ${weatherData.currentTemperature} °F -
          ${weatherData.currentCondition} | 
          ${post && post.post_content}` 
          : null} 
        {/* <button style={{float: 'right'}} onClick={() => handleDeletePosts(post.id)}>Delete Post</button> */}
      </Card>

      {/* <h1>{post.post_content}</h1> */}

    </div>
  )
}

export default PostCard
