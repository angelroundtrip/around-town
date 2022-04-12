import React from 'react'
import Header from './Header';
import Login from './Login';
import PostContainer from './PostContainer';

function Homepage({user, setUser, handleDeleteAccount, weatherData, location}) {
  // console.log(location)

  return (
    <div>
      <Header user={user} setUser={setUser} handleDeleteAccount={handleDeleteAccount} weatherData={weatherData}/>

      <h1>Homepage</h1>

      <PostContainer user={user} location={location} weatherData={weatherData}/>

      {/* <Login /> */}

    </div>
  )
}

export default Homepage