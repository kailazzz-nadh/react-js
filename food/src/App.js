import React from "react";
import './App.css';

function App() {
  const favoriteFoods = ["Pizza", "Burger", "Biryani", "Dosa"];
  function showFood(food) {
    document.getElementById("message").innerText ="I love " + food + "!";
  }
  return (
      <div className="container mt-5">

      <h1 className="text-center mb-4">My Favorite Foods</h1>
      <ul className="list-group">{favoriteFoods.map((food, index) => (<li key={index} className="list-group-item d-flex justify-content-between align-items-center">{food}
       <button className="btn btn-primary" onClick={() => showFood(food)}>I Love This</button>
        </li>))}
        </ul>
          <p id="message" className="text-center mt-4"> Select a food that you love!</p>

    </div>
    
  );
}

export default App;
