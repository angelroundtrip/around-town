import React, {useState, useEffect} from 'react'
import PostCard from './PostCard'

function PostList({posts}) {

  // const [posts, setPosts] = useState([])

  // useEffect(()=>{
  //   fetch(`/posts`)
  //   .then(r=>r.json())
  //   .then(json => setPosts(json))
  // }, [])

  console.log(posts)

  return (
    <div>
      {posts.map(postObj => <PostCard key={postObj.id} post={postObj}/>)}
    </div>
  )
}

export default PostList