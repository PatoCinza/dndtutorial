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