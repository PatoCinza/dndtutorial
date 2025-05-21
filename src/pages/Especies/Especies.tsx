import React, { useState } from "react";
import speciesData from "./species.json";
import Modal from "../../components/Modal/Modal";
import "./Especies.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard";

interface FeatureByLevel {
  level: number;
  feature: string;
}

interface Subtype {
  name: string;
  description: string;
  featuresByLevel?: FeatureByLevel[];
}

interface Legacy {
  name: string;
  description: string;
  features: string[];
  featuresByLevel?: FeatureByLevel[];
}

interface TraitAbility {
  name: string;
  description: string;
  level?: number;
  options?: {
    type: string;
    damage: string;
    name: string;
    description: string;
  }[];
}

interface Species {
  name: string;
  description: string;
  appearance: string;
  subtypes?: Subtype[];
  legacies?: Legacy[];
  traits: {
    creatureType: string;
    size: string;
    movement: string;
    abilities: TraitAbility[];
  };
}

interface SpeciesData {
  introduction: { description: string };
  species: { [key: string]: Species };
}

const Especies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);

  const data = speciesData as SpeciesData;

  const filteredSpecies = Object.entries(data.species).filter(([_, species]) =>
    species.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (species: Species) => {
    setSelectedSpecies(species);
  };

  const handleCloseModal = () => {
    setSelectedSpecies(null);
  };

  const renderFeaturesTable = (featuresByLevel?: FeatureByLevel[]) => {
    if (!featuresByLevel) return null;
    return (
      <table className="features-table">
        <thead>
          <tr>
            <th>Nível</th>
            <th>Característica</th>
          </tr>
        </thead>
        <tbody>
          {featuresByLevel.map((f, idx) => (
            <tr key={idx}>
              <td>{f.level}</td>
              <td>{f.feature}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const header = <h2>{selectedSpecies?.name}</h2>;
  const body = selectedSpecies && (
    <>
      <p className="description">{selectedSpecies.description}</p>
      <div className="section">
        <h3>Aparência</h3>
        <p>{selectedSpecies.appearance}</p>
      </div>
      <div className="section">
        <h3>Traços</h3>
        <ul>
          <li>
            <strong>Tipo de Criatura:</strong>{" "}
            {selectedSpecies.traits.creatureType}
          </li>
          <li>
            <strong>Tamanho:</strong> {selectedSpecies.traits.size}
          </li>
          <li>
            <strong>Deslocamento:</strong> {selectedSpecies.traits.movement}
          </li>
        </ul>
        <h4>Habilidades</h4>
        <ul>
          {selectedSpecies.traits.abilities.map((ab, idx) => (
            <li key={idx}>
              <strong>{ab.name}</strong>
              {ab.level ? ` (Nível ${ab.level})` : ""}: {ab.description}
              {ab.options && (
                <ul>
                  {ab.options.map((opt, i) => (
                    <li key={i}>
                      <strong>{opt?.type || opt?.name}:</strong>{" "}
                      {opt?.damage || opt?.description}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      {selectedSpecies.subtypes && (
        <div className="section">
          <h3>Linhagens</h3>
          {selectedSpecies.subtypes.map((sub, idx) => (
            <div key={idx} className="subtype-block">
              <h4>{sub.name}</h4>
              <p>{sub.description}</p>
              {renderFeaturesTable(sub.featuresByLevel)}
            </div>
          ))}
        </div>
      )}
      {selectedSpecies.legacies && (
        <div className="section">
          <h3>Legados</h3>
          {selectedSpecies.legacies.map((legacy, idx) => (
            <div key={idx} className="legacy-block">
              <h4>{legacy.name}</h4>
              <p>{legacy.description}</p>
              {legacy.features && legacy.features.length > 0 && (
                <ul className="legacy-features">
                  {legacy.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              )}
              {renderFeaturesTable(legacy.featuresByLevel)}
            </div>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="especies-container">
      <section className="introduction-section">
        <h1>Espécies de Personagens</h1>
        <p>{data.introduction.description}</p>
      </section>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar Espécie"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="species-grid">
        {filteredSpecies.map(([id, species]) => (
          <PreviewCard
            key={id}
            title={species.name}
            preview={species.description}
            onClick={() => handleCardClick(species)}
          />
        ))}
      </div>
      {selectedSpecies && (
        <Modal
          header={header}
          body={body}
          footer={<></>}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Especies;
