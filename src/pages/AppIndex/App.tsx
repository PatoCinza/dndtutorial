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
      </header>
    </div>
  );
}

export default App;
