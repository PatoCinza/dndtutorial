import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './material-theme.css';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
// Layout
import { LayoutDefault } from './components/LayoutDefault/LayoutDefault';
// Pages
import AppIndex from './pages/AppIndex/App';
import ComoJogar from './pages/ComoJogar/ComoJogar';
import TutorialFicha from './pages/TutorialFicha/TutorialFicha';
import ListaMagias from './pages/Magias/Magias';
import FichaPersonagem from './pages/FichaPersonagem/FichaPersonagem';
import Classes from './pages/Classes/Classes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route index element={<AppIndex />} />
          <Route path='/como-jogar' element={<ComoJogar />} />
          <Route path='/tutorial-ficha' element={<TutorialFicha />} />
          <Route path='/lista-magias' element={<ListaMagias />} />
          <Route path='/ficha-personagem' element={<FichaPersonagem />} />
          <Route path='/classes'>
            <Route index element={<Classes />}/>
            <Route path='/classes/:className' element={<Classes />}/>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
