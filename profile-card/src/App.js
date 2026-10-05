import React from "react";

import profileImage from "./images/tonystark.jpg";
function App() {
   let personName = "Kailas";
  let description = "I am learning React and Bootstrap.";
  return (
     <>
      <style>
        {`
          .profile-card {
            border: 2px solid black;
            padding: 30px;
            background-color: lightblue;
            width: 400px;
            border-radius: 15px;
          }

          .profile-card h1 {
            color: darkblue;
          }

          .profile-card p {
            font-size: 18px;
          }

          .profile-card img {
            width: 200px;
            margin: 10px;
            border-radius: 10px;
          }
        `}
      </style>
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="profile-card text-center">
           <h1>{personName}</h1>

          <p>{description}</p>
           <img src={profileImage} alt="Profile" className="img-fluid"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKB30SPfS760p2eAe1jR4PC0h7lLKhsPbwLKWqvj_gQ&s=10" alt="External" className="img-fluid"/>
               </div>
      </div>
    </>
   
  );
}

export default App;
