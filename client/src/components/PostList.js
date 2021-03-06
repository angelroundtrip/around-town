import React, {useState, useEffect} from 'react'
import PostCard from './PostCard'


function PostList({posts, user, handleDeletePosts, weatherData, location, filteredSearch}) {

  const [users, setUsers] = useState([])
  // * Renders all users
  useEffect(()=>{
    fetch(`/users`)
    .then(r=>r.json())
    .then(setUsers)
  }, [])
  // console.log(users)

  const [locations, setLocations] = useState([])
  // * Renders all locations
  useEffect(()=>{
    fetch(`/locations`)
    .then(r=>r.json())
    .then(setLocations)
  }, [])
  // console.log(locations)
  // console.log(filteredSearch)

  return (
    <div>

      {posts.map(postObj => 
        <PostCard 
          key={postObj.id} 
          post={postObj} 
          user={postObj} 
          handleDeletePosts={handleDeletePosts} 
          weatherData={weatherData} 
          users={users} 
          locations={locations}
        />
      )}
      
    </div>
  )
}

export default PostList
