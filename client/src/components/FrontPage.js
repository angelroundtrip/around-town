import React, { useState } from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';
import Signup from './Signup';


function FrontPage({user, setUser}) {

  // const [hasAccount, setHasAccount] = useState(true)

  // const toggleAccount = () => {
  //   setHasAccount(!hasAccount)
  // }

  return (

    <header>
      {/* Can delete button after testing */}
      <button onClick={()=>{
      fetch('/weather')
        .then(r => r.json())
        .then(data => console.log(data))
      }}> WEATHER </button>


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
      {/* <button onClick={toggleAccount}>CREATE ACCOUNT</button> */}
      {/* <button onClick={apiGet}>FETCH</button> */}
      <p></p>
      <a href='signup'><button>Create new account</button></a>
      {/* <h3>Create an account</h3>
      <Signup /> */}

      {/* { hasAccount ? (<button onClick={toggleAccount} className="primary">Login</button>) : (<button>Signup</button>) }  */}

      {/* <img src={seoul} alt='background'/> */}

    </header>
    
  )
}

export default FrontPage