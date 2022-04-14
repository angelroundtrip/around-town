import React, { useState } from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';


function FrontPage({user, setUser}) {

  // const [hasAccount, setHasAccount] = useState(true)

  // const toggleAccount = () => {
  //   setHasAccount(!hasAccount)
  // }

  return (
    <header>

      <h1>Around Town</h1>
      <hr></hr>

      {/* {hasAccount ? (<h3>LOGIN</h3> <Login setUser={setUser}) /> : null} */}

      <h3>LOGIN</h3>
      <Login setUser={setUser} />

      <p></p>
      <a style={{textDecoration: 'none'}}href='home'> <button>TEMPORARY HOME PAGE BUTTON</button> </a>
      
      <p></p>
      <>_____________________________________</>
      <br></br>
    
      <p></p>
      <a href='signup'><button>Create new account</button></a>

      {/* <img src={seoul} alt='background'/> */}

    </header>
  )
}

export default FrontPage