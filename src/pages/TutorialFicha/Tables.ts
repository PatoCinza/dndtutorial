import { CollapsableTableData } from '../../components/CollapsableTable';

export const classOverviewTable = {
    header: ['Classe', 'Interesse', 'Atributo Primário', 'Complexidade'],
    rows: [
        { cells: ['Bárbaro', 'Combate', 'Força', 'Média'] },
        { cells: ['Bardo', 'Atuação', 'Carisma', 'Alta'] },
        { cells: ['Bruxo', 'Conhecimento obscuro', 'Carisma', 'Alta'] },
        { cells: ['Clérigo', 'Deuses', 'Sabedoria', 'Média'] },
        { cells: ['Druida', 'Natureza', 'Sabedoria', 'Alta'] },
        { cells: ['Feiticeiro', 'Poder', 'Carisma', 'Alta'] },
        { cells: ['Guardião', 'Sobrevivência', 'Destreza e Sabedoria', 'Média'] },
        { cells: ['Guerreiro', 'Armas', 'Força ou Destreza', 'Baixa'] },
        { cells: ['Ladino', 'Furtividade', 'Destreza', 'Baixa'] },
        { cells: ['Mago', 'Livros de magia', 'Inteligência', 'Média'] },
        { cells: ['Monge', 'Combate desarmado', 'Destreza e Sabedoria', 'Alta'] },
        { cells: ['Paladino', 'Proteção', 'Força e Carisma', 'Média'] },
    ],
};

export const attributeBackgroundTable: CollapsableTableData = {
  header: ['Atributo', 'Antecedentes'],
  rows: [
    { cells: ['Força', 'Artesão, Artista, Fazendeiro, Guarda, Marinheiro, Nobre, Soldado'] },
    { cells: ['Destreza', 'Andarilho, Artesão, Artista, Charlatão, Criminoso, Escriba, Guia, Marinheiro, Soldado'] },
    { cells: ['Constituição', 'Charlatão, Criminoso, Eremita, Fazendeiro, Guia, Mercador, Sábio, Soldado'] },
    { cells: ['Inteligência', 'Acólito, Artesão, Criminoso, Escriba, Guarda, Mercador, Nobre, Sábio'] },
    { cells: ['Sabedoria', 'Acólito, Andarilho, Eremita, Escriba, Fazendeiro, Guarda, Guia, Marinheiro, Sábio'] },
    { cells: ['Carisma', 'Acólito, Andarilho, Artista, Charlatão, Eremita, Mercador, Nobre'] },
  ],
};

export const languagesTable: CollapsableTableData = {
  header: ['1d12', 'Idioma', 'Origem'],
  rows: [
    { cells: ['—', 'Comum', 'Sigil'] },
    { cells: ['1', 'Linguagem de Sinais Comum', 'Sigil'] },
    { cells: ['2', 'Dracônico', 'Dragões'] },
    { cells: ['3–4', 'Anão', 'Anões'] },
    { cells: ['5–6', 'Élfico', 'Elfos'] },
    { cells: ['7', 'Gigante', 'Gigantes'] },
    { cells: ['8', 'Gnômico', 'Gnomos'] },
    { cells: ['9', 'Goblin', 'Goblinoides'] },
    { cells: ['10–11', 'Pequenino', 'Pequeninos'] },
    { cells: ['12', 'Orc', 'Orcs'] },
    // Raros não aparecem nesse d12, mas podem ser listados em outra tabela
  ],
};

export const attributePointsTable: CollapsableTableData = {
  header: ['Valor', 'Custo'],
  rows: [
    { cells: ['8', '0'] },
    { cells: ['9', '1'] },
    { cells: ['10', '2'] },
    { cells: ['11', '3'] },
    { cells: ['12', '4'] },
    { cells: ['13', '5'] },
    { cells: ['14', '7'] },
    { cells: ['15', '9'] },
  ],
};

export const classEquipmentTable: CollapsableTableData = {
  header: ['Classe', 'Equipamento Inicial'],
  rows: [
    { cells: ['Bárbaro', 'Um machado grande ou qualquer arma marcial corpo a corpo, dois machados de mão ou qualquer arma simples, um pacote de explorador ou aventureiro, quatro lanças'] },
    { cells: ['Bardo', 'Uma rapieira, espada longa ou qualquer arma simples, um pacote de diplomata, explorador ou artista, um instrumento musical à sua escolha, armadura de couro, adaga, e um estojo de instrumentos musicais'] },
    { cells: ['Bruxo', 'Uma maça ou qualquer arma simples corpo a corpo, uma bolsa de componentes ou foco arcano, um pacote de estudioso ou explorador, armadura de couro, adaga, e um livro de magias'] },
    { cells: ['Clérigo', 'Uma maça ou martelo de guerra, armadura leve, média ou escudo, uma besta leve com 20 virotes ou qualquer arma simples, um pacote de sacerdote ou explorador, um escudo e símbolo sagrado'] },
    { cells: ['Druida', 'Um escimitarra ou qualquer arma simples corpo a corpo, um pacote de explorador ou sacerdote, um escudo de madeira, um símbolo sagrado, armadura de couro, um cajado e uma bolsa de componentes'] },
    { cells: ['Feiticeiro', 'Uma besta leve com 20 virotes ou qualquer arma simples, um pacote de explorador ou estudioso, um foco arcano, duas adagas'] },
    { cells: ['Guardião', 'Uma armadura de couro, escudo, qualquer arma simples corpo a corpo, um pacote de explorador ou sacerdote, um símbolo sagrado, cajado ou arma marcial'] },
    { cells: ['Guerreiro', 'Cota de malha ou couro, arco longo com 20 flechas ou arma marcial, escudo, duas armas marciais ou arma marcial e escudo, pacote de aventureiro ou explorador'] },
    { cells: ['Ladino', 'Uma rapieira, espada curta ou qualquer arma simples, um arco curto e 20 flechas ou espada curta, um pacote de aventureiro, explorador ou assaltante, armadura de couro, duas adagas, ferramentas de ladrão'] },
    { cells: ['Mago', 'Um bastão, adaga ou qualquer arma simples, um pacote de estudioso ou explorador, um foco arcano, um livro de magias'] },
    { cells: ['Monge', 'Uma arma simples corpo a corpo ou espada curta, 10 dardos, um pacote de explorador ou aventureiro'] },
    { cells: ['Paladino', 'Uma arma marcial e escudo ou duas armas marciais, cinco lanças ou qualquer arma simples corpo a corpo, cota de malha, pacote de sacerdote ou aventureiro, símbolo sagrado'] },
  ],
};

export const attributeModifierTable: CollapsableTableData = {
  header: ['Valor', 'Modificador'],
  rows: [
    { cells: ['1', '-5'] },
    { cells: ['2-3', '-4'] },
    { cells: ['4–5', '-3'] },
    { cells: ['6–7', '-2'] },
    { cells: ['8–9', '-1'] },
    { cells: ['10–11', '+0'] },
    { cells: ['12–13', '+1'] },
    { cells: ['14–15', '+2'] },
    { cells: ['16–17', '+3'] },
    { cells: ['18–19', '+4'] },
    { cells: ['20', '+5'] },
  ],
};

export const rareLanguagesTable: CollapsableTableData = {
  header: ['Idioma', 'Origem'],
  rows: [
    { cells: ['Abissal', 'Demônios do Abismo'] },
    { cells: ['Celestial', 'Celestiais'] },
    { cells: ['Dialeto Obscuro', 'Aberrações'] },
    { cells: ['Druídico', 'Círculos druídicos'] },
    { cells: ['Gíria dos Ladrões', 'Várias guildas criminosas'] },
    { cells: ['Infernal', 'Diabos dos Nove Infernos'] },
    { cells: ['Primordial', 'Elementais'] },
    { cells: ['Silvestre', 'A Faéria'] },
    { cells: ['Subcomum', 'A Umbraeterna'] },
  ],
};

export const experienceTable: CollapsableTableData = {
  header: ['Nível', 'Pontos de Experiência', 'Bônus de Proficiência'],
  rows: [
    { cells: ['1', '0', '+2'] },
    { cells: ['2', '300', '+2'] },
    { cells: ['3', '900', '+2'] },
    { cells: ['4', '2.700', '+2'] },
    { cells: ['5', '6.500', '+3'] },
    { cells: ['6', '14.000', '+3'] },
    { cells: ['7', '23.000', '+3'] },
    { cells: ['8', '34.000', '+3'] },
    { cells: ['9', '48.000', '+4'] },
    { cells: ['10', '64.000', '+4'] },
    { cells: ['11', '85.000', '+4'] },
    { cells: ['12', '100.000', '+4'] },
    { cells: ['13', '120.000', '+5'] },
    { cells: ['14', '140.000', '+5'] },
    { cells: ['15', '165.000', '+5'] },
    { cells: ['16', '195.000', '+5'] },
    { cells: ['17', '225.000', '+6'] },
    { cells: ['18', '265.000', '+6'] },
    { cells: ['19', '305.000', '+6'] },
    { cells: ['20', '355.000', '+6'] },
  ],
};

export const startingHigherLevelEquipmentTable: CollapsableTableData = {
  header: ['Nível Inicial', 'Equipamento e Dinheiro', 'Itens Mágicos'],
  rows: [
    { cells: ['2–4', 'Equipamento Inicial Normal', '1 Comum'] },
    { cells: ['5–10', '500 PO + 1d10 × 25 PO + equipamento inicial normal', '1 Comum, 1 Incomum'] },
    { cells: ['11–16', '5.000 PO + 1d10 × 250 PO + equipamento inicial normal', '2 Comum, 3 Incomum, 1 Raro'] },
    { cells: ['17–20', '20.000 PO + 1d10 × 250 PO + equipamento inicial normal', '2 Comum, 4 Incomum, 3 Raro, 1 Muito Raro'] },
  ],
};

export const classHealthTable: CollapsableTableData = {
  header: ['Classe', 'Pontos de Vida Máximos'],
  rows: [
    { cells: ['Bárbaro', '12 + mod. de Constituição'] },
    { cells: ['Guardião', '10 + mod. de Constituição'] },
    { cells: ['Guerreiro', '10 + mod. de Constituição'] },
    { cells: ['Paladino', '10 + mod. de Constituição'] },
    { cells: ['Bardo', '8 + mod. de Constituição'] },
    { cells: ['Bruxo', '8 + mod. de Constituição'] },
    { cells: ['Clérigo', '8 + mod. de Constituição'] },
    { cells: ['Druida', '8 + mod. de Constituição'] },
    { cells: ['Ladino', '8 + mod. de Constituição'] },
    { cells: ['Monge', '8 + mod. de Constituição'] },
    { cells: ['Feiticeiro', '6 + mod. de Constituição'] },
    { cells: ['Mago', '6 + mod. de Constituição'] },
  ],
};
