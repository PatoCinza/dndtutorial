import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Magias.css'
import { spellByClass } from '../../components/SpellCard/assets/spellList';
import { spells } from '../../components/SpellCard/assets/spells';

import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from '../../components/SpellCard/assets/book-unknown.svg'
import { SpellCard } from '../../components/SpellCard/SpellCard';

function ListaMagias() {
    const [spellList, setSpellList] = useState(spells);

    return (
        <div className="App">
            Referencia (cópia pra ser honesto): <a
                href='https://avribacki.gitlab.io/magias5e/'
                target='_blank'
                rel='noreferrer'
            >Lista de magias by avribacki</a>
            <br />
            <div id="menu-container">
                <div id="menu">
                    <div className="menu-item">
                        <p>Classe</p>
                        <div></div>
                        <select id="class-select">
                            <option value="all">-----</option>
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
                    <div className="menu-space">
                    </div>
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
                    <div id='empty-message'>Nenhuma magia selecionada</div>
                )}
            </div>
        </div>
    );
}

export default ListaMagias;
