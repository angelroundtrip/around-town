import React, { useState, useEffect  } from 'react'
import { Card } from 'semantic-ui-react'


function PostCard({post, posts, user, location, handleDeletePosts, users, locations, weatherData}) {

  // * Post cards work, but need some work so that correct location info is displayed
  // const allLocations = locations.map(location => {return location.name})
  // console.log(allLocations)
  // console.log(weatherData)
  // console.log(post)
  console.log(post ? post && post.post_content && post.user.home_location  : null)

  return (
    <div>

      <p></p>
      <Card style={{padding: '20px'}}>
        {user ? `${post && post.post_content && post.user && post.user.username} | 
          ${post && post.post_content && post.user.home_location} - 
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
