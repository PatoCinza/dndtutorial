import React from 'react';
import './App.css';
import logo from '../../assets/d20-index.png';
import LinkCard from '../../components/LinkCard/LinkCard';
import { navigation } from '../../contexts/navigation';

const App: React.FC = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="D&D 2024 Reference" className="App-logo" />
      <h1 className="home-title">D&amp;D 2024 Reference</h1>
      <div className="link-card-grid">
        {navigation.map((card) => (
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
