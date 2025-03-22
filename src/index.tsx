import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LayoutDefault } from './components/LayoutDefault/LayoutDefault';
import AppIndex from './pages/AppIndex/App';
import ComoJogar from './pages/ComoJogar/ComoJogar';
import TutorialFicha from './pages/TutorialFicha/TutorialFicha';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route index element={<AppIndex />} />
        <Route path='/como-jogar' element={<ComoJogar />} />
        <Route path='/tutorial-ficha' element={<TutorialFicha />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
