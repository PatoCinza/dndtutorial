import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './FichaPersonagem.css'
import { spellByClass } from '../../components/SpellCard/assets/spellList';
import { spells } from '../../components/SpellCard/assets/spells';

import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from '../../components/SpellCard/assets/book-unknown.svg'
import { SpellCard } from '../../components/SpellCard/SpellCard';

function FichaPersonagem() {
    const [spellList, setSpellList] = useState(spells);

    return (
        <div className="App">
            <div className='sheet-content sheet-grid'>
                <section className='header'>Header</section>
                <section className='logo'>Logo</section>
                <section className='atributt'>Atributt</section>
                <section className='equipment'>Equipment</section>
                <section className='info'>Info</section>
                <section className='damage-table'>Damage Table</section>
                <section className='ClasEspeTalen'>ClasEspeTalen</section>
            </div>
        </div>
    );
}

export default FichaPersonagem;
