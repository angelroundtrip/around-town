import React, {useState, useEffect} from 'react'
import PostCard from './PostCard'

function PostList({posts, user}) {

  // const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //   fetch(`/posts`)
  //   .then(r=>r.json())
  //   .then(json => setPosts(json))
  // }, [])

  // console.log(user.posts)
  // console.log(user.posts)

  return (
    <div>
      {posts.map(postObj => <PostCard key={postObj.id} post={postObj} user={user}/>)}
    </div>
  )
}

export default PostList