import React from 'react'
import Header from './Header';

function Homepage({user}) {
  console.log(user)

  return (
    <div>
      <Header user={user} />

      <h1>Homepage</h1>

    </div>
  )
}

export default Homepage