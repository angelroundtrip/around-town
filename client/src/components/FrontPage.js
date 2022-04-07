import React from 'react'
import seoul from "../images/seoul.jpg";
import Login from './Login';
import Signup from './Signup';

// const randomize = Math.floor(Math.random() * 1000000)
// const WEATHER_API_KEY = process.env.REACT_APP_API_KEY

// console.log(process.env.REACT_APP_WEATHER_API_KEY)
// * Moving on for now, but come back and hide api key...
const API = 'apikey'

function FrontPage({user}) {
  
  const userLocation = user
  // console.log(userLocation)

  const favCityWeather = () => {

    fetch(`http://api.weatherapi.com/v1/current.json?key=${API}&q=${userLocation}&aqi=no`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => console.log(data.current.temp_f))
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

    {/* <button onClick={favCityWeather}>TEST API</button> */}

  </menu>
   
  )
}

export default FrontPage