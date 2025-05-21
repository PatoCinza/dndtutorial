import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { navigation } from '../../contexts/navigation';

import './LayoutDefault.css'

export const LayoutDefault = () => {
  return (
    <div className="layout">
      <nav className='nav-bar'>
        <h1 className='title'>Referência D&D</h1>

        {navigation.map((item) => (
          <NavLink className='nav-item' to={item.to}>{item.title}</NavLink>
        ))}
      </nav>
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}
