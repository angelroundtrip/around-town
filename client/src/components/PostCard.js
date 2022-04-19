import React, { useState, useEffect  } from 'react'
import { Card, Icon, Button, Comment, Form } from 'semantic-ui-react'


function PostCard({post, posts, user, handleDeletePosts, users, locations, weatherData, location, filteredSearch}) {

  // console.log(filteredSearch)
  
  return (
    <div>

      <p></p>
      
      <Card>
     
        <Card.Content style={{fontSize: '30px'}}header={user ? <div style={{color:'navy'}}>{post && post.post_content && post.user && post.user.username}</div> : null} />

        <hr></hr><p></p>

        <Card.Content description={post && post.post_content} />
      
        <p></p>
        <div style={{color: 'peachpuff'}}>-----------------------------------------------------------------</div>

        <Card.Content extra>
        <Icon name='user' /><div style={{fontFamily: 'fantasy', color:'navy'}}>{post && post.post_content && post.user.home_location}</div>

        </Card.Content>
      </Card>

    </div>
  )
}

export default PostCard
