import React from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';
import Signup from './Signup';


function FrontPage({apiGet}) {

  return (
    
  <menu >

    <h1>Around Town</h1>

    {/* <button onClick={apiGet}>FETCH</button> */}


    {/* NOTE: signup route and component do the same thing, the difference is that one redirects. Can use a ternary and incorporate the signup component to appear on the front page */}
    <a href='signup'>Create account</a>
    <Signup />

    <Login />

    {/* <img src={seoul} alt='background' /> */}

  </menu>
   
  )
}

export default FrontPage