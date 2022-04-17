import React, { useState, useEffect  } from 'react'
import { Card, Icon, Button, Comment, Form } from 'semantic-ui-react'


function PostCard({post, posts, user, handleDeletePosts, users, locations, weatherData, location, filteredSearch}) {

  // * Post cards work, but need some work so that correct location info is displayed
  // const allLocations = locations.map(location => {return location.name})
  // console.log(allLocations)
  // console.log(weatherData)
  // console.log(post)
  // console.log(post ? post && post.post_content && post.user.home_location  : null)

//  console.log(post)
//  console.log(post.user.home_location)
// console.log(filteredSearch)
  
  
  return (
    <div>

      <p></p>
      {/* <Card style={{padding: '20px'}}>
        {user ? `${post && post.post_content && post.user && post.user.username} | 
          ${post && post.post_content && post.user.home_location} - 
          ${weatherData.currentTemperature} °F -
          ${weatherData.currentCondition} | 
          ${post && post.post_content}` 
          : null} 
      </Card> */}
        {/* <button style={{float: 'right'}} onClick={() => handleDeletePosts(post.id)}>Delete Post</button> */}
      <Card>
        <Card.Content style={{fontSize: '30px'}}header={user ? `${post && post.post_content && post.user && post.user.username}` : null} />

        <hr></hr><p></p>

        <Card.Content description={post && post.post_content} />
      
        <p></p>
        <div style={{color: 'peachpuff'}}>----------------------------------------------</div>

        <Card.Content extra>
        <Icon name='user' />{post && post.post_content && post.user.home_location}
        </Card.Content>
      </Card>

{/* <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>{post && post.post_content && post.user && post.user.username}</Comment.Author>
        <Comment.Metadata>
          <div>1 day ago</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            {post && post.post_content}
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment> */}

    {/* <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/christian.jpg' />
      <Comment.Content>
        <Comment.Author>Christian Rocha</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>I re-tweeted this.</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment> */}

    {/* <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>

      <h1>{post.post_content}</h1> */}

    </div>
  )
}

export default PostCard
