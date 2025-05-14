import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Barbaro.css'

import { ReactComponent as UnknownSpell } from '../../components/SpellCard/assets/book-unknown.svg'

function Barbaro() {

    return (
        <div className="App">
            <h2>Um Combatente Feroz da Fúria Primitiva</h2>
            <h3>Traços Básicos de Bárbaro</h3>
            <table className='barbaro-table'>
                <tbody>
                    <tr>
                        <td>Atributo Primário</td>
                        <td>Força</td>
                    </tr>
                    <tr>
                        <td>Dado de Ponto de Vida</td>
                        <td>D12 por nível de Bárbaro</td>
                    </tr>
                    <tr>
                        <td>Proficiência em Salvaguardas</td>
                        <td>Força e Constituição</td>
                    </tr>
                    <tr>
                        <td>Proficiência em Perícias</td>
                        <td>Escolha 2: Atletismo, Intimidação, Lidar com Animais, Natureza, Percepção ou Sobrevivência</td>
                    </tr>
                    <tr>
                        <td>Proficiências com Armas</td>
                        <td>Armas Simples e Marciais</td>
                    </tr>
                    <tr>
                        <td>Treinamento com Armadura</td>
                        <td>Armaduras Leve e Média e Escudos</td>
                    </tr>
                    <tr>
                        <td>Equipamento Inicial</td>
                        <td>Escolha A ou B: (A) 4 Machadinhas, Machado Grande, Kit de Aventureiro e 15 PO; ou (B) 75 PO</td>
                    </tr>
                </tbody>
            </table>

            <p>Bárbaros são combatentes poderosos, impulsionados por forças primitivas do multiverso que se manifestam com sua Fúria. Mais do que uma simples emoção — e não limitada à raiva — essa Fúria é a encarnação da ferocidade de um predador, da fúria de uma tempestade e da turbulência do mar.</p>

            <p>Alguns Bárbaros personificam sua Fúria como um espírito feroz ou um antepassado reverenciado. Outros a veem como uma conexão com a dor e o sofrimento do mundo, um emaranhado impessoal de magia selvagem ou uma expressão de seu eu mais profundo. Para cada Bárbaro, a Fúria é uma força que alimenta não apenas sua habilidade de combate, mas também seus reflexos aprimorados e sentidos ampliados.</p>

            <p>Bárbaros frequentemente servem como protetores e líderes em suas comunidades. Eles se entregam de cabeça no perigo para que aqueles sob sua proteção não precisem. Sua coragem diante do perigo torna os Bárbaros perfeitamente adequados para aventuras.</p>

        </div>
    )
}

export default Barbaro