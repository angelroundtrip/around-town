import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Location from './Location';
import PostForm from './Post';
import UserAccountUpdate from './UserAccountUpdate';
import { Header, Icon } from 'semantic-ui-react'


function NavBar({user, setUser, weatherData}) {

  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout',
      {method: 'DELETE'})
      .then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    navigate('/');
  }

  const [date, setDate] = useState(new Date())

  useEffect(() => {
    // let timer = setInterval(() =>setDate(new Date()), 1000)
    let timer = (() =>setDate(new Date()), 1000)
    return function cleanup(){
      clearInterval(timer)
      // clearInterval(timer)
    }
  },[])
  // console.log(`Time: ${date.toLocaleTimeString()}`)
  console.log(`Date: ${date.toLocaleDateString()}`)
  
  return (
    
    <div>

      <Header as='h1'>
        <a href='/' className='link' style={{fontFamily: 'fantasy'}}>Around Town</a>
      </Header>

      <div style={{float: 'right', marginRight: '1%'}}>
      <span className="nav" style={{color:'navy'}}> {user ? user.username : <a className="nav"href='/' style={{textDecoration: 'none'}}> <span >Login</span> </a>}</span>

      <span style={{marginLeft:'20px'}}>{date.toLocaleDateString()}</span>

      <a href='/account' style={{textDecoration: 'none', marginLeft:'20px', color:'black'}}><span>Profile</span></a>
    
      <span style={{marginLeft:'20px'}} onClick={handleLogout}>Logout</span>

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