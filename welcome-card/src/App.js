import React from "react";
import './App.css';
import myImage from "./images/tonystark.jpg";

function App() {
   let userName = "Kailas";
    console.log("React app started");
  return (
     <div className="container min-vh-100 d-flex justify-content-center align-items-center">
     <div className="card shadow p-4 text-center" style={{ width: "500px" }}>
       <h1 style={{ color: "blue",fontSize: "30px",fontWeight: "bold"}}> Welcome to React Learning, {userName} </h1>
       <img src={myImage} alt="React Local" className="img-fluid mx-auto my-3" style={{ width: "200px" }}/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfCrNrD5vO4hJNxycjchYqvmcH1_4DyWMVQdPndh5j5g&s=10" alt="React External" className="img-fluid mx-auto my-3" style={{ width: "200px" }}/>
         <p className="text-muted">
          This is your first card with images and styles!
        </p>
          </div>
    </div>

  );
}

export default App;
