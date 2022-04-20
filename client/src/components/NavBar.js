import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header} from 'semantic-ui-react'


function NavBar({user, setUser, weatherData}) {
 
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout',
      {method: 'DELETE'})
      .then((r) => {
        if(r.ok){
          setUser(null);
        }
      })
      .then(() => {
        navigate('/')
      });
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
  // console.log(`Date: ${date.toLocaleDateString()}`)
  
  return (
    
    <div>

      <Header as='h3'>
        <a href='/' className='link' style={{fontFamily: 'fantasy'}}>Around Town</a>
      </Header>

      <div style={{float: 'right', marginRight: '5%'}}>
      <span className="nav" style={{color:'navy'}}> {user ? user.username : <a className="nav"href='/' style={{textDecoration: 'none'}}>  </a>}</span>

      <span style={{marginLeft:'20px', fontSize: '18px'}}>{date.toLocaleDateString()} </span> 

      <a href='/account' style={{textDecoration: 'none', marginLeft:'20px', color:'black', fontSize: '18px'}}><span>Profile</span></a>
    
      <span style={{marginLeft:'20px', fontSize: '18px'}} onClick={handleLogout}>Logout</span>

      </div>
     
      <div style={{marginRight:'75%', marginTop:'2%'}}>
      
      <span className="nav" style={{fontSize:'18px'}}> {user ? `${user.home_location} - ${weatherData.currentTemperature} °F - ${weatherData.currentCondition}` : null} </span>
      </div>

      <div style={{borderBottom: '1px solid navy', marginTop: '1%'}}></div>

    </div>

  )
}

export default NavBar