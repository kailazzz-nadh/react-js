import React from "react";
import './App.css';

function App() {
   const name = "Kailas";
  const age = 20;
  const isStudent = true;
   const favoriteHobbies = ["Reading", "Hiking", "Coding"];
 const headingColor = "lightblue";
  let hobbiesForLoop = [];
  for(let i=0;i<favoriteHobbies.length;i++){
    hobbiesForLoop.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }
     function showEnthusiasm() {
        document.getElementById("message").innerText ="Hello from React! I love my hobbies!";
         document.getElementById("heading").style.backgroundColor = headingColor;

  }
  return (
      <div className="container mt-5">
       <h1 id="heading" className="text-center p-3">Personal Information and Hobbies</h1>
        <div className="card shadow mt-4 p-3">

        <div className="card-body">

          <h2 className="card-title">Personal Information</h2>
            <p className="card-text">
            <strong>Name:</strong> {name}
          </p>
            <p className="card-text">
            <strong>Age:</strong> {age}
          </p>

          <p className="card-text">
            <strong>Student:</strong> {isStudent.toString()}
          </p>

        </div>
      </div>
 <div className="mt-4">
        <h3>My Hobbies - For Loop</h3>

        <ul>{hobbiesForLoop}</ul>
      </div>
       <div className="mt-4">
        <h3>My Hobbies - Map</h3>

        <ul>{favoriteHobbies.map((hobby, index) => (<li key={index}>{hobby}</li>))}</ul>
      </div>
        <button className="btn btn-primary mt-3" onClick={showEnthusiasm}>Show Enthusiasm</button>
         <p id="message" className="mt-3">Click the button to see my enthusiasm!</p>

    </div>
   

  );
}

export default App;
