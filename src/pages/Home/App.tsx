import React from 'react';
import logo from '../../assets/d20-index.png';
import './App.css';
import { NavLink } from 'react-router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sumário
        </p>
        <NavLink
          className="App-link"
          to="/como-jogar" end
        >
          Como jogar
        </NavLink>
        <NavLink
          className="App-link"
          to="/tutorial-ficha" end
        >
          Como fazer ficha
        </NavLink>
        <NavLink
          className="App-link"
          to="/lista-magias" end
        >
          Lista de Magias
        </NavLink>
        <NavLink
          className="App-link"
          to="/ficha-personagem" end
        >
          Ficha do personagem
        </NavLink>
        <NavLink
          className="App-link"
          to="/classes/" end
        >
          Classes
        </NavLink>
      </header>
    </div>
  );
}

export default App;
