import React from 'react'
// import { useNavigate } from "react-router-dom";

function Header({user, setUser}) {

  // const navigate = useNavigate();

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
      setUser(null)
      // navigate('/')
  })
}
   
  // const currentUser = user
  
  console.log(user)
  // console.log(currentUser)

  return (
    <header>
      <h1>Header</h1>
      <button onClick={logout}>Logout</button>
      <hr></hr>
    </header>
  )
}

export default Header