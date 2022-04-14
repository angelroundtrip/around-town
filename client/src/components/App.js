// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
import PostForm from "./PostForm";
import ProfilePage from "./ProfilePage";
import Signup from "./Signup";


function App() {

  // * USER ACCOUNTS
  const [user, setUser] = useState('')
  // console.log(user)
  
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setUser(data))
        }
      })
  },[])
 
  const handleDeleteAccount = () => {
    fetch(`/users/${user.id}`,{
      method:"DELETE",
    })
    setUser(null);
    alert("User deleted")
  }

  // * LOCATIONS
  const [location, setLocation] = useState([])
  // console.log(location)
  
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setLocation(data))
        }
      })
  },[])
      
  // * POSTS
  // * Doesn't work correctly at the moment. Post is deleted(after refreshing), but not completely on the front end (it is on the back end). User can delete ANY post, not just their own. Weather data is not deleted
  const [post, setPost] = useState('')

  // useEffect(()=>{
  //   fetch('/me')
  //     .then(r => {
  //       if(r.ok){
  //         r.json().then(data=>setPost(data))
  //       }
  //     })
  // },[])

  const handleDeletePosts = (id) => {
    fetch(`/posts/${id}`,{
      method:"DELETE",
    })
    setPost(null);
    // alert("Post deleted")
  }

  // const [posts, setPosts] = useState([])

  // const addNewPosts = newObj => {
  //   fetch(`/posts`, {
  //     method: 'POST', 
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify(newObj)
  //   })
  //   .then(r => r.json())
  //   .then(data => {
  //     setPosts([...posts, data])
  //   })
  // }

  // useEffect(()=>{
  //   fetch(`/posts`)
  //   .then(r=>r.json())
  //   .then(setPosts)
  // }, [])

  // console.log(posts)

  // * WEATHER
  const [weatherData, setWeatherData] = useState({});
  
  const getWeather = () => {
    fetch('/weather')
      .then(r => r.json())
      .then(setWeatherData);
  }

  useEffect(() => {
    getWeather();
  }, []);
  console.log(weatherData)

  return (
    <div className="App">

    <Routes>

      <Route path="/home" 
        element={
          <Homepage 
            user={user} 
            setUser={setUser} 
            handleDeleteAccount={handleDeleteAccount} 
            location={location} 
            weatherData={weatherData} 
            handleDeletePosts={handleDeletePosts}
          />
        }
      />

      <Route path="/signup" element={<Signup />}/>

      <Route path="/posts" 
        element={
          <PostForm 
            user={user}  
            location={location} 
            handleDeletePosts={handleDeletePosts} 
          />
        } 
      />

      <Route path="/account" 
        element={
          <ProfilePage 
          user={user} 
          setUser={setUser} 
          weatherData={weatherData} 
          location={location} 
          handleDeleteAccount={handleDeleteAccount}
          />
        } 
      />
    
      <Route path="/" 
        element={
          <FrontPage 
            user={user} 
            setUser={setUser}
          />
        }
      />

    </Routes>
    
  </div>
  );
}

export default App;
