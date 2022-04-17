import React, { useState } from 'react'
import PostForm from './Post'
// import { useNavigate } from 'react-router-dom';

function Location() {
  
  const [location, setLocation] = useState('')
  const [errors, setErrors] = useState([])
  
  const handleLocation = (e) => setLocation(e.target.value)
  
  // const navigate = useNavigate();
  
  function onSubmit(e){
    e.preventDefault()
    const newLocation = {
      name: location,
    }
    console.log(newLocation)
    
    fetch(`/locations`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(newLocation)
    })
    .then(res => res.json())
    .then(location => {
      console.log(location)
      if (!location.errors)  { 
        // alert("Signup successful")
        // navigate(`/home`)
      } else {
        setErrors(Object.entries(Location.errors))
      }
    })  
  }
  
  return (
    <div > 
     
    <p></p>
    <form onSubmit={onSubmit}>

    <label> Location: </label>
      <input 
        style={{ marginLeft:'20px'}} 
        type="text" 
        value={location} 
        placeholder="eg: Lima, Peru"
        onChange={(e) => handleLocation(e)}
      />
    
    <p></p>
    <button type="submit">Location</button>

    </form>
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </div>
  )
}

export default Location