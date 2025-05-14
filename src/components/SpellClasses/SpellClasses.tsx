import React from 'react';
import { ReactComponent as BardIcon } from '../SpellCard/assets/class icons/bard.svg';
import { ReactComponent as ClericIcon } from '../SpellCard/assets/class icons/cleric.svg';
import { ReactComponent as DruidIcon } from '../SpellCard/assets/class icons/druid.svg';
import { ReactComponent as PaladinIcon } from '../SpellCard/assets/class icons/paladin.svg';
import { ReactComponent as RangerIcon } from '../SpellCard/assets/class icons/ranger.svg';
import { ReactComponent as SorcererIcon } from '../SpellCard/assets/class icons/sorcerer.svg';
import { ReactComponent as WarlockIcon } from '../SpellCard/assets/class icons/warlock.svg';
import { ReactComponent as WizardIcon } from '../SpellCard/assets/class icons/wizard.svg';

interface SpellClassesProps {
    classes: string[];
}

const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--md-text-primary-dark').trim();
const disabledColor = getComputedStyle(document.documentElement).getPropertyValue('--md-text-disabled-dark').trim();

export const SpellClasses: React.FC<SpellClassesProps> = ({ classes }) => {
    return (
        <div className='spell-classes'>
            <BardIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('bardo') ? activeColor : disabledColor
                }}
                title={classes.includes('bardo') ? 'Usable by Bard' : 'Not usable by Bard'}
            />
            <ClericIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('clérigo') ? activeColor : disabledColor
                }}
                title={classes.includes('clérigo') ? 'Usable by Cleric' : 'Not usable by Cleric'}
            />
            <DruidIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('druida') ? activeColor : disabledColor
                }}
                title={classes.includes('druida') ? 'Usable by Druid' : 'Not usable by Druid'}
            />
            <PaladinIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('paladino') ? activeColor : disabledColor
                }}
                title={classes.includes('paladino') ? 'Usable by Paladin' : 'Not usable by Paladin'}
            />
            <RangerIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('patrulheiro') ? activeColor : disabledColor
                }}
                title={classes.includes('patrulheiro') ? 'Usable by Ranger' : 'Not usable by Ranger'}
            />
            <SorcererIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('feiticeiro') ? activeColor : disabledColor
                }}
                title={classes.includes('feiticeiro') ? 'Usable by Sorcerer' : 'Not usable by Sorcerer'}
            />
            <WarlockIcon 
                style={{
                    width: '24px', 
                    height: '24px', 
                    marginRight: '8px',
                    fill: classes.includes('bruxo') ? activeColor : disabledColor
                }}
                title={classes.includes('bruxo') ? 'Usable by Warlock' : 'Not usable by Warlock'}
            />
            <WizardIcon 
                style={{
                    width: '24px', 
                    height: '24px',
                    fill: classes.includes('mago') ? activeColor : disabledColor
                }}
                title={classes.includes('mago') ? 'Usable by Wizard' : 'Not usable by Wizard'}
            />
        </div>
    );
}; 