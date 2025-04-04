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
                <section className='sheet-header'>
                    <div className='info-header'>
                        <div className='fake-input full-width'>
                            <h3>Regis Haskel</h3>
                            <label>NOME</label>
                        </div>
                        <div className='fake-input'>
                            <p>Nobre</p>
                            <label>ANTECEDENTE</label>
                        </div>
                        <div className='fake-input'>
                            <p>Feiticeiro</p>
                            <label>CLASSE</label>
                        </div>
                        <div className='fake-input'>
                            <p>Humano</p>
                            <label>ESPÉCIE</label>
                        </div>
                        <div className='fake-input'>
                            <p>Draconica</p>
                            <label>SUBCLASSE</label>
                        </div>
                        <div className='floating-level'>
                            <div className='fake-input text-center'>
                                <h3>1</h3>
                                <label>NÍVEL</label>
                            </div>
                            <div className='fake-input text-center'>
                                <p>0</p>
                                <label>EXP</label>
                            </div>
                        </div>
                    </div>
                    <div className='ac-header'>
                        <h4>ARMOR CLASS</h4>
                        <div className='fake-input large'>
                            <p>11</p>
                            <label>AC</label>
                        </div>
                        <div className='fake-input'>
                            <input type="checkbox" id='shield'></input>
                            <label>ESCUDO</label>
                        </div>
                    </div>
                    <div className='life-header'>
                        <div>
                            <h4>HIT POINTS</h4>
                            <div className='fake-input large'>
                                <p>8</p>
                                <label>ATUAL</label>
                            </div>
                            <div className='fake-input'>
                                <p>0</p>
                                <label>TEMPORÁRIO</label>
                            </div>
                            <div className='fake-input'>
                                <p>8</p>
                                <label>MÁXIMO</label>
                            </div>
                        </div>
                        <div>
                            <h4>HIT DICE</h4>
                            <div className='fake-input'>
                                <p>0</p>
                                <label>GASTO</label>
                            </div>
                            <div className='fake-input'>
                                <p>1 d6</p>
                                <label>MÁXIMO</label>
                            </div>
                        </div>
                        <div>
                            <h4>HIT DEATH</h4>
                            <div>
                                <input type="checkbox" id='shield'></input>
                                <input type="checkbox" id='shield'></input>
                                <input type="checkbox" id='shield'></input>
                                <label>SUCESSO</label>
                            </div>
                            <div>
                                <input type="checkbox" id='shield'></input>
                                <input type="checkbox" id='shield'></input>
                                <input type="checkbox" id='shield'></input>
                                <label>FALHA</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sheet-logo'>Logo</section>
                <section className='sheet-atributt'>Atributt</section>
                <section className='sheet-equipment'>Equipment</section>
                <section className='sheet-info'>Info</section>
                <section className='sheet-damage-table'>Damage Table</section>
                <section className='sheet-ClasEspeTalen'>ClasEspeTalen</section>
            </div>
        </div>
    );
}

export default FichaPersonagem;
