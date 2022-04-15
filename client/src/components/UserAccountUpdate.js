import React, { useState } from 'react'

// * UPDATE WORKS, BUT GIVES ERRORS WHEN AT LEAST ONE FIELD IS NOT UPDATED OR IF EMAIL IS NOT UNIQUE

function UserAccountUpdate({user, setUser}) {

  console.log(user)

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

    <p style={{marginTop: '20%'}}></p>
      {/* <span style={{fontWeight: 'bold'}}> UPDATE ACCOUNT </span> */}

      {error?error.map(e => <div>{e}</div>):null}

      <form onSubmit={handleSubmitUpdateForm} >

        {/* <label> Username: </label> */}
          <input 
            type="text" 
            value={updateUsername} 
            placeholder="UPDATE USERNAME"
            onChange={handleUsernameChange} 
          />
       
        {/* <label> Password: </label> */}
          <input 
            type="password" 
            value={updatePassword} 
            placeholder="UPDATE PASSWORD"
            onChange={handlePasswordChange} 
          />

        {/* <label> Email: </label> */}
          <input 
            type="text" 
            value={updateEmail} 
            placeholder="UPDATE EMAIL"
            onChange={handleEmailChange} 
          />

        {/* <label> Name: </label>  */}
          <input 
            type="text" 
            value={updateName} 
            placeholder="UPDATE NAME"
            onChange={handleNameChange} 
          />
       

        {/* <label> Current Location: </label>  */}
          <input 
           type="text" 
           value={updateHomeLocation} 
           placeholder="UPDATE LOCATION"
          //  placeholder="eg: New York, New York"
           onChange={handleHomeLocationChange} 
          />
    
        <p></p>
        <button type="submit"> Submit Changes </button>
        <p></p>

      </form>
        
    </div>
  )
}

export default UserAccountUpdate