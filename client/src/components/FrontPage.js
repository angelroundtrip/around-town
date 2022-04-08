import React from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';
import Signup from './Signup';

function FrontPage({user, setUser}) {


  return (

    <header>

      <h1>Around Town</h1>
      <hr></hr>

      <h3>LOGIN</h3>
      <Login setUser={setUser} />
      {/* <button onClick={apiGet}>FETCH</button> */}

      {/* <a href='signup'>Create account</a> */}
      <h3>Create an account</h3>
      <Signup />

      {/* <img src={seoul} alt='background'/> */}

      <a style={{textDecoration: 'none'}}href='home'> <button>TEMPORARY HOME PAGE BUTTON</button> </a>

    </header>
    
  )
}

export default FrontPage