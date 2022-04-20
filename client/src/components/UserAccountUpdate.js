import React, { useState } from 'react'


function UserAccountUpdate({user, setUser}) {

  const [updateUsername, setUpdateUsername] =useState("")
  const [updateEmail, setUpdateEmail]= useState("")
  const [updatePassword, setUpdatePassword]= useState("")
  const [updateName, setUpdateName]= useState("")
  const [updateHomeLocation, setUpdateHomeLocation]= useState("")
  const [error, setError] = useState([])

  function handleSubmitUpdateForm(e){
      e.preventDefault()

      const accountUpdate = {
        username: updateUsername,
        password: updatePassword,
        email: updateEmail,
        first_name: updateName,
        home_location: updateHomeLocation,
      }
      setUser({
        ...user, 
        updateUsername, 
        updatePassword, 
        updateEmail, 
        updateName, 
        updateHomeLocation
      })

      // refresh form inputs on change
      setUpdateUsername("")
      setUpdatePassword("")
      setUpdateEmail("")
      setUpdateName("")
      setUpdateHomeLocation("")

      fetch(`http://localhost:4000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify(accountUpdate),
      })
      .then(r => {
          if(r.ok){
            r.json().then(setUser)
            alert("Update successful")
          } else {
              r.json().then(e => setError(Object.entries(e.error).flat()))
              alert("Unsuccessful")
          }
      });
  }

    function handleUsernameChange(e){
      setUpdateUsername(e.target.value)
    } 
    function handlePasswordChange(e){
      setUpdatePassword(e.target.value)
    }
    function handleEmailChange(e){
      setUpdateEmail(e.target.value)
    }
    function handleNameChange(e){
      setUpdateName(e.target.value)
    } 
    function handleHomeLocationChange(e){
      setUpdateHomeLocation(e.target.value)
    }
          
  return (
    <div>

      <p style={{marginTop: '10%'}}></p>
      {/* <span style={{fontWeight: 'bold'}}> Update Account</span>  
      <p></p> */}

      {error?error.map(e => <div>{e}</div>):null}

      <form onSubmit={handleSubmitUpdateForm} >

        {/* <label> Username: </label> */}
        <p></p>
          <input 
            style={{width:'20%'}}
            type="text" 
            value={updateUsername} 
            placeholder="UPDATE USERNAME"
            onChange={handleUsernameChange} 
          />
       
        {/* <label> Password: </label> */}
          <p></p>
          <input 
            style={{width:'20%'}}
            type="password" 
            value={updatePassword} 
            placeholder="UPDATE PASSWORD"
            onChange={handlePasswordChange} 
          />

        {/* <label> Email: </label> */}
          <p></p>
          <input 
            style={{width:'20%'}}
            type="text" 
            value={updateEmail} 
            placeholder="UPDATE EMAIL"
            onChange={handleEmailChange} 
          />

        {/* <label> Name: </label>  */}
          <p></p>
          <input 
            style={{width:'20%'}}
            type="text" 
            value={updateName} 
            placeholder="UPDATE NAME"
            onChange={handleNameChange} 
          />
       

        {/* <label> Current Location: </label>  */}
          <p></p>
          <input 
            style={{width:'20%'}}
            type="text" 
            value={updateHomeLocation} 
            placeholder="UPDATE LOCATION"
          //  placeholder="eg: New York, New York"
            onChange={handleHomeLocationChange} 
          />
    
        <p></p>
        <button type="submit" style={{width:'10%'}}> Submit Changes </button>
        <p></p>

      </form>
        
    </div>
  )
}

export default UserAccountUpdate