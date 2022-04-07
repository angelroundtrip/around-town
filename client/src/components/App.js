// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
import Signup from "./Signup";


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

      const handleDeleteAccount = () => {
        fetch(`http://localhost:4000/users/${user.id}`,{
          method:"DELETE",
        })
        setUser(null);
        alert("User deleted successfully")
      }
      
  return (
    <div className="App">
   
    <Routes>

      <Route path="/home" element={<Homepage user={user} />}/>

      <Route element={<Header setUser={setUser} />}/>

      <Route path="/signup" element={<Signup />}/>
    
      <Route path="/" element={<FrontPage />}/>

    </Routes>
    
  </div>
  );
}

export default App;
