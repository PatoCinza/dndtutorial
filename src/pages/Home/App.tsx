import React from 'react';
import './App.css';
import logo from '../../assets/d20-index.png';
import LinkCard from '../../components/LinkCard/LinkCard';

const navCards = [
  {
    icon: '📖',
    title: "Como Jogar", 
    to: "/como-jogar",
    description: "Aprenda os fundamentos do D&D 2024.",
  },
  {
    icon: '📝',
    title: "Tutorial de Ficha",
    to: "/tutorial-ficha", 
    description: "Guia passo a passo para criar sua ficha.",
  },
  {
    icon: '🔥',
    title: "Lista de Magias",
    to: "/lista-magias",
    description: "Catálogo completo de magias.",
  },
  {
    icon: '📋',
    title: "Ficha de Personagem",
    to: "/ficha-personagem",
    description: "Crie e gerencie seu personagem.",
  },
  {
    icon: '⚔️',
    title: "Classes",
    to: "/classes",
    description: "Explore as classes de personagem.",
  },
  {
    icon: '📚',
    title: "Antecedentes",
    to: "/antecedentes",
    description: "Descubra os antecedentes disponíveis.",
  },
  {
    icon: '🧝',
    title: "Espécies",
    to: "/especies",
    description: "Conheça as espécies jogáveis.",
  },
  {
    icon: '🎯',
    title: "Talentos",
    to: "/feats",
    description: "Explore os talentos especiais.",
  },
];

const App: React.FC = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="D&D 2024 Reference" className="App-logo" />
      <h1 className="home-title">D&amp;D 2024 Reference</h1>
      <div className="link-card-grid">
        {navCards.map((card) => (
          <LinkCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            to={card.to}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
