import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

function PostCard({post}) {
  console.log(post && post.post_content)

  return (
    <div>
      <Card>{post && post.post_content}</Card>
      {/* <h1>{post.post_content}</h1> */}
    </div>
  )
}

export default PostCard