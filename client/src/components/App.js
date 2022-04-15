import '../App.css';
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
          r.json().then(user=>setUser(user))
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
          r.json().then(location=>setLocation(location))
        }
      })
  },[])
      
  // * POSTS (need refactoring, same code is currently in postForm and app breaks if it's removed)
  const [postContent, setPostContent] = useState("")
  const [posts, setPosts] = useState([])
  
  const addNewPosts = newObj => {
    fetch(`/posts`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newObj)
    })
    .then(r => r.json())
    .then(post => {
      setPosts([post, ...posts])
    })
  }

  const submitNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      post_content: postContent,
      user_id: user.id,
      location_id: location.id
    }
    addNewPosts(newPost)
    setPostContent("")
    console.log(newPost)
  }

  // * Renders all posts
  useEffect(()=>{
    fetch(`/posts`)
    .then(r=>r.json())
    .then(setPosts)
  }, [])

  const handleDeletePosts = (id) => {
    fetch(`/posts/${id}`,{
      method:"DELETE",
    })
    setPosts(null);
    // alert("Post deleted")
  }

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
  // console.log(weatherData)

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
            posts={posts}
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
            posts={posts}
            submitNewPost={submitNewPost}
            // changeSearch={changeSearch}
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
          postContent={postContent}
          setPostContent={setPostContent}
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

export default App
