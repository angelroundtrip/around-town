// import '../App.css';
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "semantic-ui-react";
import FrontPage from "./FrontPage";
import Homepage from "./Homepage";
import Signup from "./Signup";


const apiKey = "5ae2e3f221c38a28845f05b6d90c8f1c3fe736f84545796a46dd19e6";

function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  
      // * You should get your API key at https://opentripmap.io
      function apiGet(method, query) {
        return new Promise(function(resolve, reject) {
          const otmAPI =
            "https://api.opentripmap.com/0.1/en/places/" +
            method +
            "?apikey=" +
            apiKey;
          if (query !== undefined) {
            otmAPI += "&" + query;
          }
          fetch(otmAPI)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(function(err) {
              console.log("Fetch Error :-S", err);
            });
        });
      }

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

      <Route path="/home" element={<Homepage  />}/>

      <Route element={<Header setUser={setUser} />}/>

      <Route path="/signup" element={<Signup />}/>
    
      <Route path="/" element={<FrontPage apiGet={apiGet}/>}/>

    </Routes>
    
  </div>
  );
}

export default App;