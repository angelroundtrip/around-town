import React from 'react'

function FrontPage({apiGet}) {

  return (
    <div>

    <h1>HELLO</h1>

    <button onClick={apiGet}>FETCH</button>

    <a href='signup'>Create account</a>

  </div>
   
  )
}

export default FrontPage