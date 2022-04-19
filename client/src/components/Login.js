import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([])
  const navigate = useNavigate();

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
      // navigate('/home')
        } else {
          setError(Object.entries(user.errors))
          // alert("Incorrect login")
      }
    })  
  }
  
  return (
    
    <div style={{marginTop: '10%'}}>
      
      <form onSubmit={handleSubmit}>

      <p></p>
        {/* <label htmlFor="username">Username:</label> */}
        <input className="input"
          style={{width:'20%'}}
          type="text"
          id="username"
          value={username}
          placeholder="USERNAME"
          onChange={(e) => setUsername(e.target.value)}
        />

      <p></p>
        {/* <label htmlFor="password">Password:</label> */}
        <input
          style={{width:'20%'}}
          type="password"
          id="password"
          value={password}
          placeholder="PASSWORD"
          onChange={(e) => setPassword(e.target.value)}
          />

      <p></p>
        <button style={{width:'10%'}} type="submit">Login</button>
  
      </form>
      {error?<div>{error}</div>:null}
     
    </div>
  );
}

export default Login
