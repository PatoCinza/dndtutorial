import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import barbarianData from './barbarian.json';
import './Detalhes.css';

interface Feature {
  name: string;
  description: string;
  benefits?: string[];
  options?: string[];
}

interface SubclassFeature {
  name: string;
  description: string;
  benefits?: string[];
  options?: string[];
}

interface Subclass {
  name: string;
  title: string;
  description: string;
  features: {
    [key: string]: SubclassFeature;
  };
}

interface ClassData {
  name: string;
  title: string;
  basicTraits: {
    primaryAttribute: string;
    hitDie: string;
    savingThrows: string[];
    skills: {
      choose: number;
      options: string[];
    };
    weaponProficiencies: string[];
    armorProficiencies: string[];
    startingEquipment: {
      options: {
        name: string;
        items: string[];
      }[];
    };
  };
  description: string;
  features: {
    [key: string]: {
      proficiencyBonus: string;
      classFeatures: string[];
      rages?: number;
      rageDamage?: number;
      weaponMastery?: number;
    };
  };
  featureDetails: {
    [key: string]: Feature;
  };
  subclasses: {
    [key: string]: Subclass;
  };
}

const Detalhes: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    basicTraits: true,
    features: true,
    subclasses: true
  });
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const data: ClassData = barbarianData;

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderFeatureDetails = (feature: Feature) => (
    <div className="feature-details">
      <p>{feature.description}</p>
      {feature.benefits && (
        <ul>
          {feature.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}
      {feature.options && (
        <div className="feature-options">
          <h4>Opções:</h4>
          <ul>
            {feature.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <div className="class-details">
      <header className="class-header-details">
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
        <p className="class-description">{data.description}</p>
      </header>

      <section className="class-section">
        <div className="section-header" onClick={() => toggleSection('basicTraits')}>
          <h3>Traços Básicos</h3>
          <span className="toggle-icon">{expandedSections.basicTraits ? '−' : '+'}</span>
        </div>
        {expandedSections.basicTraits && (
          <div className="section-content">
            <div className="traits-grid">
              <div className="trait-box">
                <h4>Atributo Primário</h4>
                <p>{data.basicTraits.primaryAttribute}</p>
              </div>
              <div className="trait-box">
                <h4>Dado de Ponto de Vida</h4>
                <p>{data.basicTraits.hitDie}</p>
              </div>
              <div className="trait-box">
                <h4>Proficiência em Salvaguardas</h4>
                <ul>
                  {data.basicTraits.savingThrows.map((throw_, index) => (
                    <li key={index}>{throw_}</li>
                  ))}
                </ul>
              </div>
              <div className="trait-box">
                <h4>Perícias</h4>
                <p>Escolha {data.basicTraits.skills.choose}:</p>
                <ul>
                  {data.basicTraits.skills.options.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="trait-box">
                <h4>Proficiências com Armas</h4>
                <ul>
                  {data.basicTraits.weaponProficiencies.map((weapon, index) => (
                    <li key={index}>{weapon}</li>
                  ))}
                </ul>
              </div>
              <div className="trait-box">
                <h4>Treinamento com Armadura</h4>
                <ul>
                  {data.basicTraits.armorProficiencies.map((armor, index) => (
                    <li key={index}>{armor}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="equipment-section">
              <h4>Equipamento Inicial</h4>
              <div className="equipment-options">
                {data.basicTraits.startingEquipment.options.map((option, index) => (
                  <div key={index} className="equipment-option">
                    <h5>{option.name}</h5>
                    <ul>
                      {option.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="class-section">
        <div className="section-header" onClick={() => toggleSection('features')}>
          <h3>Características de Classe</h3>
          <span className="toggle-icon">{expandedSections.features ? '−' : '+'}</span>
        </div>
        {expandedSections.features && (
          <div className="section-content">
            <div className="features-table">
              <table>
                <thead>
                  <tr>
                    <th>Nível</th>
                    <th>Bônus de Proficiência</th>
                    <th>Características</th>
                    <th>Fúrias</th>
                    <th>Dano da Fúria</th>
                    <th>Maestria em Arma</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.features).map(([level, feature]) => (
                    <tr key={level}>
                      <td>{level}</td>
                      <td>{feature.proficiencyBonus}</td>
                      <td>
                        {feature.classFeatures.map((feat, index) => (
                          <div
                            key={index}
                            className="feature-link"
                            onMouseEnter={() => setHoveredFeature(feat)}
                            onMouseLeave={() => setHoveredFeature(null)}
                          >
                            {feat}
                          </div>
                        ))}
                      </td>
                      <td>{feature.rages}</td>
                      <td>{feature.rageDamage}</td>
                      <td>{feature.weaponMastery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {hoveredFeature && data.featureDetails[hoveredFeature.toLowerCase().replace(/\s+/g, '')] && (
              <div className="floating-details">
                {renderFeatureDetails(data.featureDetails[hoveredFeature.toLowerCase().replace(/\s+/g, '')])}
              </div>
            )}
          </div>
        )}
      </section>

      <section className="class-section">
        <div className="section-header" onClick={() => toggleSection('subclasses')}>
          <h3>Subclasses</h3>
          <span className="toggle-icon">{expandedSections.subclasses ? '−' : '+'}</span>
        </div>
        {expandedSections.subclasses && (
          <div className="section-content">
            <div className="subclasses-grid">
              {Object.entries(data.subclasses).map(([key, subclass]) => (
                <div key={key} className="subclass-card">
                  <h4>{subclass.name}</h4>
                  <h5>{subclass.title}</h5>
                  <p>{subclass.description}</p>
                  <div className="subclass-features">
                    {Object.entries(subclass.features).map(([level, feature]) => (
                      <div key={level} className="subclass-feature">
                        <h6>Nível {level}: {feature.name}</h6>
                        <p>{feature.description}</p>
                        {feature.benefits && (
                          <ul>
                            {feature.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        )}
                        {feature.options && (
                          <div className="feature-options">
                            <h6>Opções:</h6>
                            <ul>
                              {feature.options.map((option, index) => (
                                <li key={index}>{option}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Detalhes;