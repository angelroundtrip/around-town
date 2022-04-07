import React from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';
import Signup from './Signup';

function FrontPage({user, setUser}) {


  return (
    // * NOTE: signup route and component do the same thing, the difference is that one redirects. Can use a ternary and incorporate the signup component to appear on the front page 

  <menu >

    <h1>Around Town</h1>

    {/* <button onClick={apiGet}>FETCH</button> */}

    <a href='signup'>Create account</a>
    <Signup />

    <Login setUser={setUser} />
    {/* <Header/> */}

    {/* <img src={seoul} alt='background' /> */}

    {/* <button onClick={favCityWeather}>TEST API</button> */}

  </menu>
   
  )
}

export default FrontPage