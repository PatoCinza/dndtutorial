import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import knownSpell from './assets/book-known.svg'
import { ReactComponent as UnknownSpell } from './assets/book-unknown.svg'
import { ReactComponent as Concentration } from './assets/spell icons/concentration.svg'
import { ReactComponent as Ritual } from './assets/spell icons/ritual.svg'
import { ReactComponent as Vocal } from './assets/spell icons/vocal.svg'
import { ReactComponent as Somatic } from './assets/spell icons/somatic.svg'
import { ReactComponent as Material } from './assets/spell icons/material.svg'

import { SpellClasses } from '../SpellClasses/SpellClasses'
import { spellSchoolMap, spellLevelMap } from './constants';

import './SpellCard.css'

export const SpellCard = ({ spell }: any) => {
  const SchoolIcon = spellSchoolMap.find((school) => school.school === spell.school)?.icon;
  const LevelIcon = spellLevelMap.find((level) => level.level === spell.level)?.icon;

  return (
    <div className='spell-card grid-item'>
        <div className='spell-props'>
            <div title={`Nível ${spell.level}`}>
                {LevelIcon && <LevelIcon />}
            </div>
            <div title={spell.school}>
                {SchoolIcon && <SchoolIcon />}
            </div>
            <div title='Ritual'>{spell.isRitual ? <Ritual /> : ''}</div>
            <div title='Concentração'>{spell.duration.concentration ? <Concentration /> : ''}</div>
        </div>
        <div className='spell-card-header'>
            <h3>{spell.name}</h3>
            <SpellClasses classes={spell.classes} />
            <p><strong>Tempo de Conjuração: </strong>{spell.casting.time} {spell.casting.unit}</p>
            <p><strong>Alcance: </strong>{spell.range.value} {spell.range.unit}</p>
            <p><strong>Duração: </strong>{spell.duration.value} {spell.duration.unit}</p>
            <div className='spell-components'>
                {spell.components.isVerbal && <Vocal title="Verbal" />}
                {spell.components.isSomatic && <Somatic title="Somatic" />}
                {spell.components.isMaterial && <Material title="Material" />}
            </div>
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


