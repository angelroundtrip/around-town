import React from 'react'
import { NavLink } from 'react-router-dom'
import PostForm from './PostForm';
import UserAccountUpdate from './UserAccountUpdate';
import { Header } from 'semantic-ui-react'


function NavBar({user, setUser, weatherData}) {

  const handleLogout = () => {
    fetch('/logout',{
      method:'DELETE'
    })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  
  return (
    
    <div>

      <Header as='h1'>
        <a href='/' className='link'>Around Town</a>
      </Header>

      <div style={{float: 'right', marginRight: '1%'}}>
      <span className="nav"> {user ? user.username : <a className="nav"href='/' style={{textDecoration: 'none'}}> <span >Login</span> </a>}</span>

      <a href='/account' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><span>Profile</span></a>
    
      <a href='/' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><span onClick={handleLogout}>Logout</span></a>
      </div>
     
      <div style={{marginRight:'75%', marginTop:'2%'}}>
       {/* Other useful data is available, would like to include weather icon eventually */}
      <span className="nav" style={{fontSize:'18px'}}> {user ? `${user.home_location} - ${weatherData.currentTemperature} °F - ${weatherData.currentCondition}` : null} </span>
      </div>
  
      {/* <h3>{user ? user.home_location : null}</h3> */}
     
   
      

      {/* <button onClick={handleUpdateAccount}>Update Account</button> */}
      {/* <UserAccountUpdate user={user} setUser={setUser}/> */}

      {/* <PostForm user={user} userLocation={userLocation}/> */}
      {/* <Location /> */}

      <div style={{borderBottom: '1px solid navy', marginTop: '1%'}}></div>

    </div>

  )
}

export default NavBar