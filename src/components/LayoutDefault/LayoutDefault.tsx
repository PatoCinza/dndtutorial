import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import './LayoutDefault.css'

export const LayoutDefault = () => {
  return (
    <>
      <header className='header'>
        <h1 className='title'>Referência D&D</h1>
        <nav className='nav-bar'>
            <NavLink className='nav-item' to="/">Home</NavLink>
        </nav>
      </header>
      <main className='content'>
        <Outlet />
      </main>
    </>
  );
}
