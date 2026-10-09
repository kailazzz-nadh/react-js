import React, { useState } from "react";
import './App.css';
import LightSwitch from './LightSwitch';

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    if (isOn) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  };
  let roomMessage;
  

  if (isOn) {
    roomMessage = "The room is bright";
  } else {
    roomMessage = "The room is dark";
  }
  
    
  return (


     <div>
      <h1>{roomMessage}</h1>

      <LightSwitch isOn={isOn} onToggle={handleToggle}/>
    </div>
    
  );
}

export default App;
