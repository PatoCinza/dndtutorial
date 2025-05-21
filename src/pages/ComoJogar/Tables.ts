import { CollapsableTableData } from '../../components/CollapsableTable';

export const abilityCheckTable: CollapsableTableData = {
  header: ['Dificuldade', 'DC'],
  rows: [
    { cells: ['Muito Fácil', '5'] },
    { cells: ['Fácil', '10'] },
    { cells: ['Médio', '15'] },
    { cells: ['Difícil', '20'] },
    { cells: ['Muito Difícil', '25'] },
    { cells: ['Quase Impossível', '30'] },
  ],
};

export const advantageDisadvantageTable: CollapsableTableData = {
  header: ['Situação', 'Efeito'],
  rows: [
    { cells: ['Vantagem', 'Rola 2d20 e usa o maior valor'] },
    { cells: ['Desvantagem', 'Rola 2d20 e usa o menor valor'] },
    { cells: ['Ambos', 'Se tiver vantagem e desvantagem, rola normalmente'] },
  ],
};

export const coverTable: CollapsableTableData = {
  header: ['Tipo de Cobertura', 'Bônus na CA', 'Bônus em Salvaguardas de Destreza'],
  rows: [
    { cells: ['Meia Cobertura', '+2', '+2'] },
    { cells: ['Três Quartos de Cobertura', '+5', '+5'] },
    { cells: ['Cobertura Total', 'Não pode ser alvo', 'Automático'] },
  ],
};

export const damageTypesTable: CollapsableTableData = {
  header: ['Tipo de Dano', 'Exemplos'],
  rows: [
    { cells: ['Ácido', 'Vapores corrosivos de um dragão negro'] },
    { cells: ['Concussão', 'Um martelo, uma queda'] },
    { cells: ['Frio', 'O sopro gelado de um dragão branco'] },
    { cells: ['Fogo', 'Uma tocha, o sopro de um dragão vermelho'] },
    { cells: ['Força', 'Magia mágica de mísseis'] },
    { cells: ['Lâmina', 'Espadas, machados, flechas'] },
    { cells: ['Perfurante', 'Lanças, picaretas'] },
    { cells: ['Psíquico', 'Um efeito mental'] },
    { cells: ['Radiante', 'Um feitiço de cura ou um anjo'] },
    { cells: ['Relâmpago', 'Um raio, o sopro de um dragão azul'] },
    { cells: ['Trovejante', 'O estrondo de um trovão'] },
    { cells: ['Veneno', 'O ferrão de um escorpião'] },
  ],
};

export const exhaustionTable: CollapsableTableData = {
  header: ['Nível', 'Efeito'],
  rows: [
    { cells: ['1', 'Desvantagem em testes de característica'] },
    { cells: ['2', 'Velocidade reduzida à metade'] },
    { cells: ['3', 'Desvantagem em salvaguardas e testes de ataque'] },
    { cells: ['4', 'Pontos de vida máximos reduzidos à metade'] },
    { cells: ['5', 'Velocidade reduzida a 0'] },
    { cells: ['6', 'Morte'] },
  ],
};

export const healingTable: CollapsableTableData = {
  header: ['Método', 'Efeito'],
  rows: [
    { cells: ['Descanso Curto', 'Gasta dados de vida para recuperar PV'] },
    { cells: ['Descanso Longo', 'Recupera todos os PV e metade dos dados de vida'] },
    { cells: ['Magia', 'Cura instantânea de PV'] },
    { cells: ['Poções', 'Cura instantânea de PV'] },
  ],
};

export const movementTable: CollapsableTableData = {
  header: ['Tipo de Movimento', 'Regras'],
  rows: [
    { cells: ['Andar', 'Velocidade base do personagem'] },
    { cells: ['Correr', 'Dobra a velocidade (ação de corrida)'] },
    { cells: ['Nadar', 'Metade da velocidade normal'] },
    { cells: ['Escalar', 'Metade da velocidade normal'] },
    { cells: ['Pular', 'Distância baseada na Força'] },
  ],
};

export const visionTable: CollapsableTableData = {
  header: ['Tipo de Visão', 'Detalhes'],
  rows: [
    { cells: ['Visão Normal', 'Até 18 metros em escuridão total'] },
    { cells: ['Visão no Escuro', 'Até 18 metros em escuridão total como se fosse penumbra'] },
    { cells: ['Visão Verdadeira', 'Vê através de ilusões e escuridão mágica'] },
    { cells: ['Visão com Luz', 'Até o alcance da fonte de luz'] },
  ],
}; 