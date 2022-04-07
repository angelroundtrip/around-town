import React from 'react'
import Header from './Header';
import PostContainer from './PostContainer';

function Homepage({user, setUser}) {
  console.log(user)

  return (
    <div>
      <Header user={user} setUser={setUser}/>

      <h1>Homepage</h1>

      <PostContainer />

    </div>
  )
}

export default Homepage