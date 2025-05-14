import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import dndLogo from '../../assets/dnd-logo.png';
import './FichaPersonagem.css'
import { spells } from '../../components/SpellCard/assets/spells';

function FichaPersonagem() {
    const [spellList, setSpellList] = useState(spells);
    const [ac, setAc] = useState(11);
    const [tamanho, setTamanho] = useState('médio');

    const equipShield = (e: React.MouseEvent<HTMLInputElement>) => {
        if ((e.target as HTMLInputElement).checked) {
            setAc(ac + 2);
        } else {
            setAc(ac - 2);
        }
    }

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
                            <p>{ac}</p>
                            <label>AC</label>
                        </div>
                        <div className='fake-input'>
                            <input
                                type="checkbox"
                                id='shield'
                                onClick={(e) => equipShield(e)}
                            ></input>
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
                                <input type="checkbox" id='success1'></input>
                                <input type="checkbox" id='success2'></input>
                                <input type="checkbox" id='success3'></input>
                                <label>SUCESSO</label>
                            </div>
                            <div>
                                <input type="checkbox" id='failure1'></input>
                                <input type="checkbox" id='failure2'></input>
                                <input type="checkbox" id='failure3'></input>
                                <label>FALHA</label>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sheet-logo'>
                    <div className='logo-container'>
                        <img 
                        /* Meu eu nao creio que eu baixei um fake png velhoooooo*/
                            src={dndLogo} 
                            alt="D&D Logo" 
                            className='dnd-logo'
                        />
                    </div>
                </section>
                <section className='sheet-atributtes'>
                    <div className="attribute-block">
                        <div className="attribute-title">BÔNUS DE PROFICIÊNCIA</div>
                        <div className="mod-val-row">
                            <div className="modifier-box">+3</div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">INTELIGÊNCIA</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">+1</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">12</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" checked readOnly />
                                <span>Salvaguarda</span>
                            </div>
                            <div className="save-skill-row"><span className="skill-dot unfilled"></span> <span>Arcanismo</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>História</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Investigação</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Natureza</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Religião</span></div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">FORÇA</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">-1</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">8</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" />
                                <span>Salvaguarda</span>
                            </div>
                            <div className="save-skill-row"><span className="skill-dot unfilled"></span> <span>Atletismo</span></div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">SABEDORIA</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">+1</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">12</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" />
                                <span>Salvaguarda</span>
                            </div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Adestrar animais</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Intuição</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Medicina</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Percepção</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Sobrevivência</span></div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">DESTREZA</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">+1</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">12</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" />
                                <span>Salvaguarda</span>
                            </div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Acrobacia</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Prestidigitação</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Furtividade</span></div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">CARISMA</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">+4</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">18</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" checked readOnly />
                                <span>Salvaguarda</span>
                            </div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Enganação</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Intimidação</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Atuação</span></div>
                            <div className="save-skill-row"><span className="skill-dot"></span> <span>Persuasão</span></div>
                        </div>
                    </div>
                    <div className="attribute-block">
                        <div className="attribute-title">CONSTITUIÇÃO</div>
                        <div className="mod-val-row">
                            <div>
                                <div className="modifier-box">+2</div>
                                <span className="modifier-label">MODIFICADOR</span>
                            </div>
                            <div>
                                <div className="value-box">14</div>
                                <span className="value-label">VALOR</span>
                            </div>
                        </div>
                        <div className="saves-skills">
                            <div className="save-skill-row">
                                <input type="radio" className="save-radio" checked readOnly />
                                <span>Salvaguarda</span>
                            </div>
                        </div>
                    </div>
                    <div className="inspiration-block">
                        <span>INSPIRAÇÃO HEROICA</span>
                        <input type="checkbox" />
                    </div>
                </section>
                <section className='sheet-info'>
                    <div className='info-box'>
                        <span className='info-label'>INICIATIVA</span>
                        <span className='info-value'>+1</span>
                    </div>
                    <div className='info-box'>
                        <span className='info-label'>VELOCIDADE</span>
                        <span className='info-value'>9m</span>
                    </div>
                    <div className='info-box'>
                        <span className='info-label'>TAMANHO</span>
                        <select
                            className='modern-select'
                            value={tamanho}
                            onChange={e => setTamanho(e.target.value)}
                            style={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}
                        >
                            <option value="pequeno">Pequeno</option>
                            <option value="médio">Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                    <div className='info-box'>
                        <span className='info-label'>PERCEPÇÃO PASSIVA</span>
                        <span className='info-value'>17</span>
                    </div>
                </section>
                <section className='sheet-equipment'>Equipment</section>
                <section className='sheet-damage-table'>Damage Table</section>
                <section className='sheet-ClasEspeTalen'>ClasEspeTalen</section>
            </div>
        </div>
    );
}

export default FichaPersonagem;
