import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([])
  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password}),
    })
    .then(res => res.json())
    .then(user => {
        console.log(user)
        if (!user.errors)  { 
          alert("Login successful")
          // navigate(`/posts`)
        } else {
        setErrors(Object.entries(user.errors))
        alert("Incorrect login")
      }
    })  
  }
  
  return (
    
    <div  >
      
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
        <label  htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />

      <p></p>
        <button  type="submit">Login</button>
       
      </form>
      
    </div>
  );
}
export default Login