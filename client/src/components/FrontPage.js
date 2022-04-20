import React from 'react'
import Login from './Login';


function FrontPage({setUser}) {

  return (
    <div>

      <h1 style={{fontFamily: 'fantasy', fontSize:'40px'}}>Around Town</h1>
      <hr></hr>
     
      <Login setUser={setUser} />

      <p></p>
      <a style={{textDecoration: 'none'}}href='home'> <button style={{width:'10%'}}>View Home</button> </a>
      
      <p></p>
        <div style={{color: 'navy'}}>--------------------------------------------------------------------------------------------------</div>
      <br></br>
    
      <p></p>
      <a href='signup' ><button style={{width:'10%'}}>Create new account</button></a>

      <h5 style={{marginTop:'300px', fontSize: '14px', fontWeight:'lighter'}}>Share events, facts, and other interesting information about your town.</h5>

    </div>
  )
}

export default FrontPage