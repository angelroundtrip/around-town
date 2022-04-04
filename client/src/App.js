import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (

    <div className="App">

   
    <Routes>
    
        {/* <Route path="/url" element={<Component prop={prop} />}/> */}

    </Routes>
    
  </div>
    
  );
}

export default App;