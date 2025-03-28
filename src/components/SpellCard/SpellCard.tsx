import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from './assets/book-unknown.svg'
import cast from './assets/cast.svg'
import component from './assets/components.svg'
import { ReactComponent as Concentration } from './assets/concentration.svg'
import duration from './assets/duratio..svg'
import range from './assets/range.svg'
import './SpellCard.css'


export const SpellCard = ({ spell }: any) => {
  return (
    <div className='spell-card grid-item'>
        <div className='spell-card-header'>
            <div className='spell-title'>{spell.name}</div>
            <label className='spell-school'>{spell.school}</label>
        </div>
        <hr />
        <div className='spell-props'>
            <div>{spell.casting.time} {spell.casting.unit}</div>
            <div>{spell.range.value}{spell.range.unit}</div>
            <div>
                {spell.components.isVerbal ?? 'V, ' }
                {spell.components.isSomatic ?? 'S, ' }
                {spell.components.isMaterial ?? 'M' }
            </div>
            <div>{spell.duration.concentration ? <Concentration /> : ''}</div>
            <div>{spell.duration.value} {spell.duration.unit}</div>
        </div>
        <div className='spell-description'>
            {
                spell.components.material.description ?
                    <div>Material: {spell.components.material.description}</div> : ''
            }
            {   spell.body.description.map((paragraph: any) => (<div>{paragraph.description}</div>))}
        </div>
    </div>
)
}


