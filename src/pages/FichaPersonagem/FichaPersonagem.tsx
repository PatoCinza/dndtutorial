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
        </div>
    );
}

export default FichaPersonagem;
