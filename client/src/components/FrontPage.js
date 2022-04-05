import React from 'react'
import background from "../images/seoul.jpg";

function FrontPage({apiGet}) {

  return (
    <div style={{ backgroundImage: `url(${background})`}}>

    <h1>HELLO</h1>

    <button onClick={apiGet}>FETCH</button>

    <a href='signup'>Create account</a>

  </div>
   
  )
}

export default FrontPage