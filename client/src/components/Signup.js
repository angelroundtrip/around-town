import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Location from './Location'
// import { useNavigate } from 'react-router-dom';

function Signup() {

  // * Need to set REGEX to ensure valid email address

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [homeLocation, setHomeLocation] = useState('')
  const [errors, setErrors] = useState([])
  
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  // const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault()
    const newUser = {
      username: username,
      password: password,
      email: email,
      first_name: name,
      home_location: homeLocation,
    }
    console.log(newUser)
     
    fetch(`/signup`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(user => {
        // console.log(user)
        if (!user.errors)  { 
          alert("Signup successful")
          // navigate(`/home`)
        } else {
        setErrors(Object.entries(user.errors))
        }
      })  
    }

  return (
    <div> 

      <a href='/' style={{textDecoration: 'none', color: 'black'}}>
        <h1>Around Town</h1>
      </a>

      <hr></hr>

      <h4>Create Account</h4>

      <p></p>
      <form onSubmit={onSubmit}>

      <label> Username: </label>
        <input style={{ marginLeft:'20px'}} 
          type="text" 
          value={username} 
          placeholder="Enter username"
          onChange={(e) => handleUsername(e)} 
        />
      
      <p></p>
      <label> Password: </label>
        <input style={{ marginLeft:'20px'}} 
          type="password" 
          value={password} 
          placeholder="Enter password"
          onChange={(e) => handlePassword(e)} 
        />
      
      <p></p>
      <label htmlFor="email">Email: </label>
        <input
          style={{ marginLeft:'20px'}}
          type="text"
          id="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

      <p></p>
      <label htmlFor="first_name"> Name: </label>
        <input
          style={{ marginLeft:'20px'}}
          type="text"
          id="first_name"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

      <p></p>
      <label htmlFor="home_location"> Current Location: </label>
        <input
          style={{ marginLeft:'20px'}}
          type="text"
          id="home_location"
          value={homeLocation}
          placeholder="eg: New York, New York"
          onChange={(e) => setHomeLocation(e.target.value)}
        />
      
      <p></p>
      <button type="submit">Signup</button>

      <p></p>
      <NavLink to='/home'>
      <button>TEMPORARY HOME PAGE BUTTON</button> 
      </NavLink>

      </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

    </div>
  )
}

export default Signup