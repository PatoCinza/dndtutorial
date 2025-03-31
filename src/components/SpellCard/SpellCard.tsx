import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from './assets/book-unknown.svg'
import cast from './assets/cast.svg'
import component from './assets/components.svg'
import { ReactComponent as Concentration } from './assets/spell icons/concentration.svg'
import duration from './assets/duratio..svg'
import range from './assets/range.svg'
import './SpellCard.css'


export const SpellCard = ({ spell }: any) => {
  return (
    <div className='spell-card grid-item'>
        <div className='spell-props'>
            <div className='icon'>{spell.duration.concentration ? <Concentration /> : ''}</div>
        </div>
        <div className='spell-card-header'>
            <h3>{spell.name}</h3>
            <div className='spell-classes'>como colocar os icones aqui</div>
            <p><strong>Tempo de Comjuração: </strong>{spell.casting.time} {spell.casting.unit}</p>
            <p><strong>Alcance: </strong>{spell.range.value} {spell.range.unit}</p>
            <p><strong>Duração: </strong>{spell.duration.value} {spell.duration.unit}</p>
            <div className='spell-components'>V, S, M</div>
        </div>

        <div className='spell-description'>
            {
                spell.components.material.description ?
                    <p><strong>Material: </strong>{spell.components.material.description}</p> : ''
            }
            {   spell.body.description.map((paragraph: any) => (<p>{paragraph.description}</p>))}
        </div>
    </div>



    /*<div className='spell-card grid-item'>
        <div className='spell-card-header'>
            <div className='spell-title'>{spell.name}</div>
            <label className='spell-school'>{spell.school}</label>
        </div>
        <div className='spell-props'>
            <div>{spell.casting.time} {spell.casting.unit}</div>
            <div>{spell.range.value} {spell.range.unit}</div>
            <div>
                {spell.components.isVerbal ? 'V'  : ''}
                {spell.components.isSomatic ? ', S'  : ''}
                {spell.components.isMaterial ? ', M'  : ''}
            </div>
            
            <div>{spell.duration.value} {spell.duration.unit}
                 <span className='icon'>{spell.duration.concentration ? <Concentration /> : ''}</span>
            </div>
        </div>
        <div className='spell-description'>
            {
                spell.components.material.description ?
                    <div><strong>Material: </strong>{spell.components.material.description}</div> : ''
            }
            {   spell.body.description.map((paragraph: any) => (<p>{paragraph.description}</p>))}
        </div>
    </div>*/
)
}


