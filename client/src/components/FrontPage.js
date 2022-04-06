import React from 'react'
import seoul from "../images/seoul.jpg";
import Header from './Header';
import Login from './Login';
import Signup from './Signup';

const randomize = Math.floor(Math.random() * 1000000)

function FrontPage({apiGet}) {

  const randomizeAPIdata = () => {
    fetch(`http://api.opentripmap.com/0.1/en/places/xid/${randomize}?apikey=5ae2e3f221c38a28845f05b6d90c8f1c3fe736f84545796a46dd19e6`)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  return (
    // * NOTE: signup route and component do the same thing, the difference is that one redirects. Can use a ternary and incorporate the signup component to appear on the front page 

  <menu >

    <h1>Around Town</h1>

    {/* <button onClick={apiGet}>FETCH</button> */}

    <a href='signup'>Create account</a>
    <Signup />

    <Login />
    {/* <Header/> */}

    {/* <img src={seoul} alt='background' /> */}

    <button onClick={randomizeAPIdata}>TEST API</button>

  </menu>
   
  )
}

export default FrontPage