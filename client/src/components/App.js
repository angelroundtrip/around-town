// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
import Location from "./Location";
import PostForm from "./PostForm";
// import Signup from "./Signup";


function App() {

  const [user, setUser] = useState('')
  console.log(user)
  
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setUser(data))
        }
      })
  },[])

  const [location, setLocation] = useState([])
  console.log(location)
  
  useEffect(()=>{
    fetch('/me')
      .then(r => {
        if(r.ok){
          r.json().then(data=>setLocation(data))
        }
      })
  },[])
 
  // * Will be used in the profile page
  const handleDeleteAccount = () => {
    fetch(`http://localhost:4000/users/${user.id}`,{
      method:"DELETE",
    })
    setUser(null);
    alert("User deleted")
  }
      
  // * POSTS
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

  return (
    <div className="App">

    <Routes>

      <Route path="/home" element={<Homepage user={user} setUser={setUser} handleDeleteAccount={handleDeleteAccount} location={location}/>}/>

      {/* <Route path="/signup" element={<Signup />}/> */}

      <Route path="/posts" element={<PostForm user={user}  location={location} />} />

      {/* <Route path="/locations" element={<Location user={user}  />} /> */}
    
      <Route path="/" element={<FrontPage user={user} setUser={setUser}/>}/>

    </Routes>
    
  </div>
  );
}

export default App;
