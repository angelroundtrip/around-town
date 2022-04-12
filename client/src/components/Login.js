import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Header from './Header'

function Login({setUser}) {
  // *Login works, but all users get logged in...
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([])
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res => res.json())
    .then(user => {
        console.log(user)
        if (!user.errors)  { 
          alert("Login successful")
          // navigate(`/posts`)
        } else {
        setError(Object.entries(user.errors))
        alert("Incorrect login")
      }
    })  
  }
  
  return (
    
    <div>
      
      <form onSubmit={handleSubmit}>

      <p></p>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

      <p></p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

      <p></p>
      {/* <NavLink to='/home'> */}
        <button type="submit">Login</button>
      {/* </NavLink> */}
      
      </form>
      {error?<div>{error}</div>:null}
     
    </div>
  );
}
export default Login