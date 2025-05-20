import React, { useState } from 'react';
import backgroundsData from './backgrounds.json';
import './Antecedentes.css';

interface Background {
  name: string;
  attributeValues: string[];
  talent: string;
  skillProficiencies: string[];
  toolProficiency: string;
  equipment: {
    optionA: {
      items: string[];
    };
    optionB: string;
  };
  description: string;
}

interface BackgroundsData {
  introduction: {
    description: string;
    parts: string[];
  };
  backgrounds: {
    [key: string]: Background;
  };
}

const Antecedentes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBackground, setSelectedBackground] = useState<Background | null>(null);

  const data = backgroundsData as BackgroundsData;

  const handleCardClick = (background: Background) => {
    setSelectedBackground(background);
  };

  const handleCloseModal = () => {
    setSelectedBackground(null);
  };

  const filteredBackgrounds = Object.entries(data.backgrounds).filter(([_, background]) =>
    background.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="antecedentes-container">
      {/* Introduction Section */}
      <section className="introduction-section">
        <h1>Antecedentes de Personagens</h1>
        <p>{data.introduction.description}</p>
        <h2>Partes de um Antecedente:</h2>
        <ul className="parts-list">
            <li><strong>Valores de Atributo.</strong> Um antecedente apresenta três dos valores de atributo do seu personagem. Aumente um em 2 e outro em 1, ou aumente todos os três em 1. Nenhum desses aumentos pode ser maior que 20.</li>
            <li><strong>Talento.</strong> Um antecedente confere ao seu personagem um talento específico de Origem (descrito no capítulo 5).</li>
            <li><strong>Proficiência em Perícias.</strong> Um antecedente confere proficiência ao seu personagem em duas perícias específicas.</li>
            <li><strong>Proficiência com Ferramentas.</strong> Cada antecedente confere a um personagem proficiência com uma ferramenta — uma ferramenta específica ou uma escolhida da categoria Ferramentas de Artesão. As ferramentas são detalhadas no capítulo 6.</li>
            <li><strong>Equipamento.</strong> Cada antecedente oferece uma escolha entre um pacote de equipamentos ou 50 PO.</li>
        </ul>
      </section>

      {/* Search Field */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar Antecedente"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Backgrounds Grid */}
      <div className="backgrounds-grid">
        {filteredBackgrounds.map(([id, background]) => (
          <div 
            key={id} 
            className="background-card"
            onClick={() => handleCardClick(background)}
          >
            <div className="card-header">
              <h2>{background.name}</h2>
            </div>
            <div className="card-preview">
              <p>{background.description.substring(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBackground && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedBackground.name}</h2>
              <button className="close-button" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-body">
              <p className="description">{selectedBackground.description}</p>
              <hr />
              
              <div className="section">
                <h3>Valores de Atributo:</h3>
                <p>{selectedBackground.attributeValues.join(', ')}</p>
              </div>

              <div className="section">
                <h3>Talento:</h3>
                <p>{selectedBackground.talent}</p>
              </div>

              <div className="section">
                <h3>Proficiências em Perícias:</h3>
                <p>{selectedBackground.skillProficiencies.join(', ')}</p>
              </div>

              <div className="section">
                <h3>Proficiência com Ferramentas:</h3>
                <p>{selectedBackground.toolProficiency}</p>
              </div>

              <div className="section">
                <h3>Equipamento:</h3>
                <div className="equipment-section">
                  <h4>Opção A:</h4>
                  <ul>
                    {selectedBackground.equipment.optionA.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="equipment-section">
                  <h4>Opção B:</h4>
                  <p>{selectedBackground.equipment.optionB}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Antecedentes;
