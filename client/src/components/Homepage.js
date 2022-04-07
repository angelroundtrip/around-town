import React from 'react'
import Header from './Header';

function Homepage({user, setUser}) {
  console.log(user)

  return (
    <div>
      <Header user={user} setUser={setUser}/>

      <h1>Homepage</h1>

    </div>
  )
}

export default Homepage