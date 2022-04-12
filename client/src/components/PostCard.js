import React from 'react'
import { Card } from 'semantic-ui-react'

function PostCard({post, user}) {
  // console.log(post && post.post_content && post.user && post.user.username)
  // console.log(user)

  return (
    <div>
      <Card>{user ? `${post && post.post_content && post.user && post.user.username} | ${post && post.post_content}` : null}</Card>
      {/* <h1>{post.post_content}</h1> */}
    </div>
  )
}

export default PostCard