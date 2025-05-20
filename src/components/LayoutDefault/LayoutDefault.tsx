import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './LayoutDefault.css'

export const LayoutDefault = () => {
  return (
    <div className="layout">
      <nav className='nav-bar'>
        <h1 className='title'>Referência D&D</h1>
        <NavLink className='nav-item' to="/">Home</NavLink>
        <NavLink className='nav-item' to="/como-jogar">Como Jogar</NavLink>
        <NavLink className='nav-item' to="/tutorial-ficha">Tutorial de Ficha</NavLink>
        <NavLink className='nav-item' to="/lista-magias">Lista de Magias</NavLink>
        <NavLink className='nav-item' to="/ficha-personagem">Ficha de Personagem</NavLink>
        <NavLink className='nav-item' to="/classes">Classes</NavLink>
        <NavLink className='nav-item' to="/antecedentes">Antecedentes</NavLink>
        <NavLink className='nav-item' to="/especies">Espécies</NavLink>
      </nav>
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}
