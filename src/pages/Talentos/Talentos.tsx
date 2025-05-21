import React, { useState } from "react";
import featsData from "./feats.json";
import "./Talentos.css";
import Modal from "../../components/Modal/Modal";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import { CollapsableTable } from "../../components/CollapsableTable/CollapsableTable";
import SearchInput from "../../components/SearchInput/SearchInput";

interface Feat {
  name: string;
  category: string;
  prerequisite?: string;
  description: string;
  table?: {
    header: string[];
    rows: { cells: string[] }[];
  };
}

interface FeatsData {
  introduction: {
    description: string;
    parts: string[];
  };
  categories: {
    [key: string]: {
      description: string;
      feats: {
        [key: string]: Feat;
      };
    };
  };
}

const Talentos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFeat, setSelectedFeat] = useState<Feat | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const data = featsData as FeatsData;

  const expandCard = (feat: Feat) => {
    setSelectedFeat(feat);
  };

  const closeModal = () => {
    setSelectedFeat(null);
  };

  const allFeats = Object.entries(data.categories).flatMap(
    ([category, categoryData]) =>
      Object.entries(categoryData.feats).map(([_, feat]) => ({
        ...feat,
        category,
      }))
  );

  const filteredFeats = allFeats.filter(
    (feat) =>
      feat.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || feat.category === selectedCategory)
  );

  const body = selectedFeat && (
    <>
      {selectedFeat.prerequisite && (
        <div className="section">
          <h3>Pré-requisito:</h3>
          <p>{selectedFeat.prerequisite}</p>
        </div>
      )}
      <div className="section">
        <h3>Descrição:</h3>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: selectedFeat.description }}
        />
      </div>
      {selectedFeat.table && (
        <div className="section">
          <CollapsableTable
            data={selectedFeat.table}
            title="Tabela de Fabricação Rápida"
          />
        </div>
      )}
    </>
  );

  return (
    <div className="talentos-container">
      {/* Introduction Section */}
      <section className="introduction-section">
        <h1>Talentos</h1>
        <p>{data.introduction.description}</p>
        <ul className="parts-list">
          {data.introduction.parts.map((part, index) => (
            <li key={index}>{part}</li>
          ))}
        </ul>
      </section>

      <div className="filters-container">
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Buscar Talento"
        />

        <div className="category-filters">
          <button
            className={`category-filter ${!selectedCategory ? "active" : ""}`}
            onClick={() => setSelectedCategory(null)}
          >
            Todos
          </button>
          {Object.keys(data.categories).map((category) => (
            <button
              key={category}
              className={`category-filter ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="feats-grid">
        {filteredFeats.map((feat) => (
          <PreviewCard
            key={feat.name}
            title={feat.name}
            preview={feat.description.split("\n")[0]}
            onClick={() => expandCard(feat)}
          />
        ))}
      </div>

      {selectedFeat && (
        <Modal
          header={<h2>{selectedFeat.name}</h2>}
          body={body}
          footer={<></>}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Talentos;
