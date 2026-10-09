import { useState, useEffect } from 'react';
import './App.css';

function App() {
   const [user, setUser] = useState("Guest");
   useEffect(()=>{
    if(user==="alice"){
      console.log("User changed to alice");
    }
   },[user])

    const handleLogin = () => {
    setUser("alice");
  };


  return (
    <div>
    <h2>Welcome ,{user}</h2>
    <button onClick={handleLogin}>
      Login as Alice
    </button>
    </div>

   
  );
}

export default App;
