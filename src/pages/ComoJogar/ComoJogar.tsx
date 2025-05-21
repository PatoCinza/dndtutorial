import React from "react";
import { NavLink } from "react-router-dom";

function ComoJogar() {
  return (
    <div className="App">
      <h1>Como Jogar</h1>
      <p>É só fingir que as coisas tão acontecendo</p>
      <br />
      <NavLink className="App-link" to="/tutorial-ficha" end>
        Como fazer a ficha
      </NavLink>
    </div>
  );
}

export default ComoJogar;
