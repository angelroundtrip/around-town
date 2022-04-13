// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
import Location from "./Location";
import PostForm from "./PostForm";
import ProfilePage from "./ProfilePage";
import Signup from "./Signup";


// const API_KEY = ENV['WEATHER_API_KEY']

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
  // * Doesn't work correctly at the moment. Post is deleted(after refreshing), but not completely. User can delete ANY post, not just their own
  const [posts, setPosts] = useState('')

  const handleDeletePosts = (id) => {
    fetch(`/posts/${id}`,{
      method:"DELETE",
    })
    // setPosts(null);
    // alert("Post deleted")
  }

  // useEffect(()=>{
  //   fetch('/me')
  //     .then(r => {
  //       if(r.ok){
  //         r.json().then(data=>setPosts(data))
  //       }
  //     })
  // },[])
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
  
  const userLocation = user ? user.home_location : null
  // * fetch from backend
  const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=26d8da2542354788820132449220804&q=${userLocation}&aqi=no`

  // JSON.parse(weatherAPI)

  const [weatherData, setWeatherData] = useState({});
  
  useEffect(() => {
    getWeatherWithFetch();
  }, [userLocation]);

  const getWeatherWithFetch = async () => {
    const response = await fetch(weatherAPIUrl);
    const jsonData = await response.json();
    setWeatherData(jsonData);
  };
  // console.log(weatherData.current && weatherData.current.condition && weatherData.current.condition.text)

  return (
    <div className="App">

    <Routes>

      <Route path="/home" element={<Homepage user={user} setUser={setUser} handleDeleteAccount={handleDeleteAccount} location={location} weatherData={weatherData} handleDeletePosts={handleDeletePosts}/>}/>

      <Route path="/signup" element={<Signup />}/>

      <Route path="/posts" element={<PostForm user={user}  location={location} handleDeletePosts={handleDeletePosts} />} />

      <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} weatherData={weatherData} location={location} handleDeleteAccount={handleDeleteAccount}/>} />

      {/* <Route path="/locations" element={<Location user={user}  />} /> */}
    
      <Route path="/" element={<FrontPage user={user} setUser={setUser}/>}/>

    </Routes>
    
  </div>
  );
}

export default App;
