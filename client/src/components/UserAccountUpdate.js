import React, { useState } from 'react'

// * UPDATE WORKS, BUT GIVES ERRORS WHEN AT LEAST ONE FIELD IS NOT UPDATED OR IF EMAIL IS NOT UNIQUE

function UserAccountUpdate({user, setUser}) {

  console.log(user)

  const [updateUsername, setUpdateUsername] =useState("")
  const [updateEmail, setUpdateEmail]= useState("")
  const [updatePassword, setUpdatePassword]= useState("")
  const [updateFirstName, setUpdateFirstName]= useState("")
  const [updateHomeLocation, setUpdateHomeLocation]= useState("")
  const [error, setError] = useState([])

  function handleSubmitUpdateForm(e){
      e.preventDefault()

      const accountUpdate = {
          username: updateUsername,
          password: updatePassword,
          email: updateEmail,
          first_name: updateFirstName,
          home_location: updateHomeLocation,
      }
      setUser({...user, updateUsername, updatePassword, updateEmail, updateFirstName, updateHomeLocation})

      // refresh form inputs on change
      setUpdateUsername("")
      setUpdatePassword("")
      setUpdateEmail("")
      setUpdateFirstName("")
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
    function handleFirstNameChange(e){
      setUpdateFirstName(e.target.value)
    } 
    function handleHomeLocationChange(e){
      setUpdateHomeLocation(e.target.value)
    }
          
  return (
      
    <div>

      <span style={{fontWeight: 'bold'}}> UPDATE ACCOUNT </span>

      {error?error.map(e => <div>{e}</div>):null}

      <form onSubmit={handleSubmitUpdateForm} >

        <label>
          Username:
        <input type="text" value={updateUsername} onChange={handleUsernameChange} />
        </label>

        <label >
          Password:
        <input type="password" value={updatePassword} onChange={handlePasswordChange} />
        </label>

        <label>
          Email:
        <input type="text" value={updateEmail} onChange={handleEmailChange} />
        </label>

        <p></p>

        <label >
          First Name:
        <input type="text" value={updateFirstName} onChange={handleFirstNameChange} />
        </label> 

        <label >
          Home Location:
        <input type="text" value={updateHomeLocation} onChange={handleHomeLocationChange} />
        </label> 
    
        <p></p>

        <button type="submit"> Submit Changes </button>
        <p></p>
        {/* <button ><a style={{textDecoration: 'none'}}href='/home' type="submit"> View Posts </a> </button> */}

      </form>
        
    </div>
  )
}

export default UserAccountUpdate