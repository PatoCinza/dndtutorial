import React, { useEffect, useState } from 'react';

import './Magias.css'
import { spells } from '../../components/SpellCard/assets/spells';

import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from '../../components/SpellCard/assets/book-unknown.svg'
import { SpellCard } from '../../components/SpellCard/SpellCard';

function ListaMagias() {
    const [spellList, setSpellList] = useState(spells);
    const [classFilter, setClassFilter] = useState('all');
    const [levelFilter, setLevelFilter] = useState('all');
    const [schoolFilter, setSchoolFilter] = useState('all');

    useEffect(() => {
        console.log(classFilter, levelFilter, schoolFilter);
        setSpellList(spells.filter((spell) => {
            return (
                (classFilter === 'all' || spell.classes.includes(classFilter)) &&
                (levelFilter === 'all' || spell.level === Number(levelFilter)) &&
                (schoolFilter === 'all' || spell.school === schoolFilter)
            )
        }));
    }, [classFilter, levelFilter, schoolFilter]);

    const filterSpellListByClass = (className: string) => {
        setClassFilter(className);
    }

    const filterSpellListByLevel = (level: string) => {
        setLevelFilter(level);
    }

    const filterSpellListBySchool = (school: string) => {
        setSchoolFilter(school);
    }

    return (
        <div className="App">
            <div id="menu-container">
                <div id="menu">
                    <div className="menu-item">
                        <p>Classe</p>
                        <select id="class-select" className="modern-select"
                            onChange={(e) => filterSpellListByClass(e.target.value)}>
                            <option value="all">Selecione uma classe</option>
                            <option value="bardo">Bardo</option>
                            <option value="bruxo">Bruxo</option>
                            <option value="clérigo">Clérigo</option>
                            <option value="druida">Druida</option>
                            <option value="feiticeiro">Feiticeiro</option>
                            <option value="mago">Mago</option>
                            <option value="paladino">Paladino</option>
                            <option value="patrulheiro">Patrulheiro</option>
                        </select>
                    </div>
                    <div className="menu-space" />
                    <div className="menu-item">
                        <p>Nível</p>
                        <select id="level-select" className="modern-select"
                            onChange={(e) => filterSpellListByLevel(e.target.value)}>
                            <option value="all">Todos os níveis</option>
                            <option value="0">Truque</option>
                            <option value="1">1º nível</option>
                            <option value="2">2º nível</option>
                            <option value="3">3º nível</option>
                            <option value="4">4º nível</option>
                            <option value="5">5º nível</option>
                            <option value="6">6º nível</option>
                            <option value="7">7º nível</option>
                            <option value="8">8º nível</option>
                            <option value="9">9º nível</option>
                        </select>
                    </div>
                    <div className="menu-space" />
                    <div className="menu-item">
                        <p>Escola</p>
                        <select id="school-select" className="modern-select"
                            onChange={(e) => filterSpellListBySchool(e.target.value)}>
                            <option value="all">Todas as escolas</option>
                            <option value="abjuração">Abjuração</option>
                            <option value="adivinhação">Adivinhação</option>
                            <option value="conjuração">Conjuração</option>
                            <option value="encantamento">Encantamento</option>
                            <option value="evocação">Evocação</option>
                            <option value="ilusão">Ilusão</option>
                            <option value="necromancia">Necromancia</option>
                            <option value="transmutação">Transmutação</option>
                        </select>
                    </div>
                    <div className="menu-space" />

                    <div id="show-known" className="menu-item">
                        <p>Conhecidas <UnknownSpell /></p>
                    </div>
                </div>
            </div>
            <div id="spell-list" className='grid-list'>
                {spellList.length ? (
                    spellList.map((spell) => <SpellCard spell={spell}/>)
                ) :
                (
                    <div id='empty-message'>Nenhuma magia corresponde aos filtros selecionados</div>
                )}
            </div>
        </div>
    );
}

export default ListaMagias;
