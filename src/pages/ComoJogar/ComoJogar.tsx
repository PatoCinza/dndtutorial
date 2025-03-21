import React from 'react';
import { NavLink } from 'react-router-dom';

function ComoJogar() {
  return (
    <div className="App">
        è só fingir que as coisas tão acontecendo
        <br />
        <NavLink
          className="App-link"
          to="/tutorial-ficha" end
        >
          Como fazer a ficha
        </NavLink>
    </div>
  );
}

export default ComoJogar;
