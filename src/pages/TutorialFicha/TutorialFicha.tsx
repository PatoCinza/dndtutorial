import React from "react";
import { NavLink } from "react-router-dom";
import AlignmentChart from "../../assets/alignment-chart.png";
import ExperienceTable from "../../assets/experience-table.png";
import { LinkFicha } from "../../components/Links/LinkFicha";
import { LinkLivroJogador } from "../../components/Links/LinkLivroJogador";
import { CollapsableTable } from "../../components/CollapsableTable";
import {
  classOverviewTable,
  attributeBackgroundTable,
  languagesTable,
  attributePointsTable,
  attributeModifierTable,
  classEquipmentTable,
  rareLanguagesTable,
  classHealthTable,
  startingHigherLevelEquipmentTable,
  experienceTable,
} from "./Tables";
import "./TutorialFicha.css";

function TutorialFicha() {
  const linkClasses = <NavLink to="/classes">classes</NavLink>;
  const linkAntecedentes = <NavLink to="/antecedentes">antecedentes</NavLink>;
  const linkEspecies = <NavLink to="/especies">espécies</NavLink>;

  return (
    <div className="tutorial-sheet">
      <h1>Capítulo 2 - Criação de Personagens</h1>
      <section>
        <h2>Preparando-se</h2>
        <ul>
          <li>
            <strong>Converse com seu Mestre:</strong> Antes de criar seu
            personagem, converse sobre o tipo de campanha e o tom do jogo.
          </li>
          <li>
            <strong>Escolha uma Ficha de Personagem:</strong> Baixe a ficha
            aqui: <LinkFicha /> ou use a nossa.
          </li>
          <li>
            <strong>Sessão Zero:</strong> Uma reunião inicial para criar
            personagens juntos, alinhar expectativas e discutir temas
            importantes.
          </li>
        </ul>
      </section>

      <section>
        <h2>Criando Seu Personagem</h2>
        <ol>
          <li>
            <h3>Escolha uma Classe</h3>
            <p>
              Todo aventureiro pertence a uma classe. Veja a lista de{" "}
              {linkClasses} ou consulte o capítulo 3 no <LinkLivroJogador />.
            </p>
            <CollapsableTable
              data={classOverviewTable}
              title="Visão Geral das Classes"
            />
            <p>
              O grupo clássico de D&D é composto por Clérigo, Guerreiro, Ladino
              e Mago, mas você pode variar conforme as diretrizes.
            </p>
          </li>
          <li>
            <h3>Determine a Origem</h3>
            <p>
              Inclui {linkAntecedentes}, {linkEspecies} e escolha de idiomas.
              Consulte o capítulo 4 no <LinkLivroJogador />.
            </p>
            <CollapsableTable
              data={attributeBackgroundTable}
              title="Valores de Atributo e Antecedentes"
            />
            <div style={{ margin: "1.5em 0" }}>
              <h4>Imagine seu Passado e Presente</h4>
              <p>
                Deixe o antecedente e a espécie do seu personagem inspirarem
                como você imagina o passado dele. Esse passado moldou o presente
                do personagem. Com isso em mente, considere as seguintes
                perguntas:
              </p>
              <ul>
                <li>Quem criou você?</li>
                <li>Quem foi seu amigo de infância mais querido?</li>
                <li>Você cresceu com um animal de estimação?</li>
                <li>Você se apaixonou? Se sim, por quem?</li>
                <li>
                  Você se juntou a alguma organização, como uma guilda ou
                  religião? Se sim, ainda é membro?
                </li>
                <li>
                  Quais elementos do seu passado o inspiraram a se aventurar?
                </li>
              </ul>
            </div>
            <CollapsableTable data={languagesTable} title="Idiomas Comuns" />
            <CollapsableTable data={rareLanguagesTable} title="Idiomas Raros" />
          </li>
          <li>
            <h3>Determinando os Valores de Atributo</h3>
            <p>
              Escolha um dos métodos: Conjunto Padrão, Geração Aleatória (4d6),
              ou Custo de Pontos (27 pontos).
            </p>
            <CollapsableTable
              data={attributePointsTable}
              title="Custos de Pontos para Valores de Atributo"
            />
            <CollapsableTable
              data={classEquipmentTable}
              title="Conjunto Padrão por Classe"
            />
            <CollapsableTable
              data={attributeModifierTable}
              title="Valores e Modificadores de Atributo"
            />
          </li>
          <li>
            <h3>Escolha um Alinhamento</h3>
            <p>
              Escolha o alinhamento do seu personagem. Veja o diagrama abaixo:
            </p>
            <img
              src={AlignmentChart}
              className="alignment-img"
              alt="diagrama de alinhamentos"
            />
            {/* Tabela: Traços de Personalidade por Alinhamento */}
            <div className="table-placeholder">
              [Tabela: Traços de Personalidade por Alinhamento]
            </div>
          </li>
          <li>
            <h3>Preencha os Detalhes</h3>
            <ul>
              <li>
                Registre as características de classe (veja {linkClasses} e
                capítulo 3).
              </li>
              <li>
                Preencha os números: salvaguardas, perícias, percepção passiva,
                pontos de vida, iniciativa, CA, ataques, conjuração, etc.
              </li>
              <li>Escolha um nome e descreva aparência e personalidade.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2>Avanço de Nível</h2>
        <p>
          Veja como subir de nível, calcular XP e bônus de proficiência.
          Consulte as tabelas de evolução do personagem.
        </p>
        <CollapsableTable
          data={experienceTable}
          title="Pontos de Experiência"
        />
        <CollapsableTable
          data={classHealthTable}
          title="Pontos de Vida Fixos por Classe"
        />
        <CollapsableTable
          data={startingHigherLevelEquipmentTable}
          title="Equipamento Inicial em Níveis Mais Altos"
        />
      </section>

      <section>
        <h2>Multiclasse</h2>
        <p>
          Regras para adquirir níveis em múltiplas classes, pré-requisitos,
          proficiências e conjuração multiclasse.
        </p>
        {/* Tabela: Conjurador Multiclasse */}
        <div className="table-placeholder">
          [Tabela: Conjurador Multiclasse]
        </div>
      </section>

      <section>
        <h2>Bugigangas</h2>
        <p>
          Ao criar seu personagem, você pode sortear uma bugiganga ou escolher
          uma da tabela abaixo.
        </p>
        {/* Tabela: Bugigangas */}
        <div className="table-placeholder">[Tabela: Bugigangas]</div>
      </section>
    </div>
  );
}

export default TutorialFicha;
