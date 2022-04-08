// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
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
 
  // * Will be used in the profile page
  const handleDeleteAccount = () => {
    fetch(`http://localhost:4000/users/${user.id}`,{
      method:"DELETE",
    })
    setUser(null);
    alert("User deleted")
  }
      
  return (
    <div className="App">

    <Routes>

      <Route path="/home" element={<Homepage user={user} setUser={setUser} handleDeleteAccount={handleDeleteAccount} />}/>

      {/* <Route path="/signup" element={<Signup />}/> */}

      <Route path="/post" element={<PostForm user={user} />} />
    
      <Route path="/" element={<FrontPage user={user} setUser={setUser}/>}/>

    </Routes>
    
  </div>
  );
}

export default App;
