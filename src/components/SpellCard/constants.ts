import { ReactComponent as Necromancy } from './assets/spell icons/necromancy.svg';
import { ReactComponent as Conjuration } from './assets/spell icons/conjuration.svg';
import { ReactComponent as Divination } from './assets/spell icons/divination.svg';
import { ReactComponent as Enchantment } from './assets/spell icons/enchantment.svg';
import { ReactComponent as Evocation } from './assets/spell icons/evocation.svg';
import { ReactComponent as Illusion } from './assets/spell icons/illusion.svg';
import { ReactComponent as Transmutation } from './assets/spell icons/transmutation.svg';
import { ReactComponent as Abjuration } from './assets/spell icons/abjuration.svg';

import { ReactComponent as Level0 } from './assets/magic level icons/tricks.svg';
import { ReactComponent as Level1 } from './assets/magic level icons/1 level.svg';
import { ReactComponent as Level2 } from './assets/magic level icons/2 level.svg';
import { ReactComponent as Level3 } from './assets/magic level icons/3 level.svg';
import { ReactComponent as Level4 } from './assets/magic level icons/4 level.svg';
import { ReactComponent as Level5 } from './assets/magic level icons/5 level.svg';
import { ReactComponent as Level6 } from './assets/magic level icons/6 level.svg';
import { ReactComponent as Level7 } from './assets/magic level icons/7 level.svg';
import { ReactComponent as Level8 } from './assets/magic level icons/8 level.svg';
import { ReactComponent as Level9 } from './assets/magic level icons/9 level.svg';

interface SpellSchool {
    school: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SpellLevel {
    level: number;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const spellSchoolMap: SpellSchool[] = [
    { school: 'necromancia', icon: Necromancy },
    { school: 'conjuração', icon: Conjuration },
    { school: 'adivinhação', icon: Divination },
    { school: 'encantamento', icon: Enchantment },
    { school: 'evocação', icon: Evocation },
    { school: 'ilusão', icon: Illusion },
    { school: 'transmutação', icon: Transmutation },
    { school: 'abjuração', icon: Abjuration }
];

export const spellLevelMap: SpellLevel[] = [
    { level: 0, icon: Level0 },
    { level: 1, icon: Level1 },
    { level: 2, icon: Level2 },
    { level: 3, icon: Level3 },
    { level: 4, icon: Level4 },
    { level: 5, icon: Level5 },
    { level: 6, icon: Level6 },
    { level: 7, icon: Level7 },
    { level: 8, icon: Level8 },
    { level: 9, icon: Level9 }
]; 