import React, { useState } from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';


function FrontPage({user, setUser}) {

  // const [hasAccount, setHasAccount] = useState(true)

  // const toggleAccount = () => {
  //   setHasAccount(!hasAccount)
  // }

  return (
    <div>

      {/* <div style={{backgroundImage: `url(${seoul})`}}> */}
      <h1 style={{fontFamily: 'fantasy'}}>Around Town</h1>
      <hr></hr>
      {/* {hasAccount ? (<h3>LOGIN</h3> <Login setUser={setUser}) /> : null} */}

      {/* <h3>LOGIN</h3> */}
      <Login setUser={setUser} />

      <p></p>
      <a style={{textDecoration: 'none'}}href='home'> <button style={{width:'10%'}}>View Home</button> </a>
      
      <p></p>
        <div style={{color: 'navy'}}>--------------------------------------------------------------------------------------------------</div>
      <br></br>
    
      <p></p>
      <a href='signup' ><button style={{width:'10%'}}>Create new account</button></a>

      <h5 style={{marginTop:'300px', fontSize: '14px', fontWeight:'lighter'}}>Share events, facts, and other interesting information about your town.</h5>
    {/* </div> */}
    </div>
  )
}

export default FrontPage