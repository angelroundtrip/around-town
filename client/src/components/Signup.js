import React, { useState, useEffect, useNavigate } from 'react'

function Signup() {

  // * Need to set REGEX to ensure valid email address

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errors, setErrors] = useState([])
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const handleUsername = (e) => setUsername(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  // const navigate = useNavigate();

  function onSubmit(e){
      e.preventDefault()
      const newUser = {
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
        // password_confirmation: passwordConfirmation,
      }
      console.log(newUser)
     
      fetch(`/signup`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newUser)
      })
      .then(res => res.json())
      .then(user => {
          console.log(user)
          if (!user.errors)  { 
            // navigate(`/posts`)
            alert("Signup successful!")
          } else {
          setErrors(Object.entries(user.errors))
        }
      })  
    }

  return (
    // *Signup Form

    <div > 
      <a href='/'>SIGNUP PAGE</a>

    <p></p>
    <form onSubmit={onSubmit}>
    <label >
      Username:
      <input style={{ marginLeft:'20px'}} type="text" value={username} onChange={(e) => handleUsername(e)} />
    </label>
    
    <p></p>
    <label>
      Password:
    <input style={{ marginLeft:'20px'}} type="password" value={password} onChange={(e) => handlePassword(e)} />
    </label>

    <p></p>
    <label htmlFor="pet_name">Email:</label>
    <input
      style={{ marginLeft:'20px'}}
      type="text"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <p></p>
    <label htmlFor="first_name">First Name:</label>
    <input
      style={{ marginLeft:'20px'}}
      type="text"
      id="first_name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />

    <p></p>
    <label htmlFor="last_name">Last Name:</label>
    <input
      style={{ marginLeft:'20px'}}
      type="text"
      id="last_name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
    
    <p></p>
    <button type="submit">Signup</button>

    </form>
    {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </div>
  )
}

export default Signup