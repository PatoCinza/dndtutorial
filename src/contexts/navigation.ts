import {ReactComponent as barbarian} from '../assets/class icons/barbarian.svg';

export const navigation = [
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
    subItems: [
      {
        icon: barbarian,
        title: "Bárbaro",
        to: "/classes/barbarian",
        description: "Bate, apanha e faz barulho.",
      },
    ],
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
