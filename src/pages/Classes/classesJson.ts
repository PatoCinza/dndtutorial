// Import class icons
import { ReactComponent as BarbarianIcon } from '../../components/SpellCard/assets/class icons/barbarian.svg';
import { ReactComponent as BardIcon } from '../../components/SpellCard/assets/class icons/bard.svg';
import { ReactComponent as ClericIcon } from '../../components/SpellCard/assets/class icons/cleric.svg';
import { ReactComponent as DruidIcon } from '../../components/SpellCard/assets/class icons/druid.svg';
import { ReactComponent as FighterIcon } from '../../components/SpellCard/assets/class icons/fighter.svg';
import { ReactComponent as MonkIcon } from '../../components/SpellCard/assets/class icons/monk.svg';
import { ReactComponent as PaladinIcon } from '../../components/SpellCard/assets/class icons/paladin.svg';
import { ReactComponent as RangerIcon } from '../../components/SpellCard/assets/class icons/ranger.svg';
import { ReactComponent as RogueIcon } from '../../components/SpellCard/assets/class icons/rogue.svg';
import { ReactComponent as SorcererIcon } from '../../components/SpellCard/assets/class icons/sorcerer.svg';
import { ReactComponent as WarlockIcon } from '../../components/SpellCard/assets/class icons/warlock.svg';
import { ReactComponent as WizardIcon } from '../../components/SpellCard/assets/class icons/wizard.svg';

export default [
    {
        name: 'Bárbaro',
        description: 'Bárbaros são combatentes poderosos, impulsionados por forças primitivas do multiverso que se manifestam com sua Fúria.',
        path: '/classes/barbarian',
        subclasses: ['Árvore do Mundo', 'Berserker', 'Coração Selvagem', 'Fanático'],
        icon: BarbarianIcon
    },
    {
        name: 'Bardo',
        description: 'Invocando magia através de música, dança e versos, os Bardos são peritos em inspirar os outros, aliviar ferimentos, desanimar inimigos e criar ilusões',
        path: '/classes/bard',
        subclasses: ['Bravura', 'Conhecimento', 'Dança', 'Glamour'],
        icon: BardIcon
    },
    {
        name: 'Bruxo',
        description: 'Bruxos buscam conhecimento oculto no multiverso, frequentemente começando sua jornada em tomos de sabedoria proibida, realizando invocações para atrair seres extra planares ou explorando locais de poder ligados a essas entidades',
        path: '/classes/warlock',
        subclasses: ['Patrono Arquifada', 'Patrono Celestial', 'Patrono O Grande Antigo', 'Patrono Ínfero'],
        icon: WarlockIcon
    },
    {
        name: 'Clérigo',
        description: 'Clérigos canalizam o poder dos reinos dos deuses para realizar milagres. Abençoados por uma divindade, panteão ou outra entidade imortal.',
        path: '/classes/cleric',
        subclasses: ['Domínio da Guerra', 'Domínio da Luz', 'Domínio da Trapaça', 'Domínio da Vida'],
        icon: ClericIcon
    },
    {
        name: 'Druida',
        description: 'Druidas pertencem a ordens antigas que invocam as forças da natureza. Utilizando a magia dos animais, plantas e dos quatro elementos.',
        path: '/classes/druid',
        subclasses: ['Estrelas', 'Lua', 'Mar', 'Terra'],
        icon: DruidIcon
    },
    {
        name: 'Feiticeiro',
        description: 'Os Feiticeiros possuem uma magia inata, que é intrínseca a eles.',
        path: '/classes/sorcerer',
        subclasses: ['Feitiçaria Aberrante', 'Feitiçaria Dracônica', 'Feitiçaria Mecânica', 'Feitiçaria Selvagem'],
        icon: SorcererIcon
    },
    {
        name: 'Guardião',
        description: 'Longe das cidades movimentadas, os Guardiões exercem sua vigilância interminável nos ermos, entre árvores de florestas sem trilhas e amplas planícies.',
        path: '/classes/ranger',
        subclasses: ['Andarilho Feérico', 'Caçador', 'Senhor das Feras', 'Vigilante das Sombras'],
        icon: RangerIcon
    },
    {
        name: 'Guerreiro',
        description: 'Guerreiros dominam inúmeros campos de batalha. Cavaleiros em busca de glória, campeões reais, soldados de elite e mercenários experientes.',
        path: '/classes/fighter',
        subclasses: ['Campeão', 'Cavaleiro Místico', 'Combatente Psíquico', 'Mestre da Batalha'],
        icon: FighterIcon
    },
    {
        name: 'Ladino',
        description: 'Ladinos confiam na astúcia, furtividade e nas fraquezas de seus inimigos para obter vantagem. Eles têm um dom especial para resolver praticamente qualquer problema.',
        path: '/classes/rogue',
        subclasses: ['Adaga Espiritual', 'Assassino', 'Ladrão', 'Trapaceiro Arcano'],
        icon: RogueIcon
    },
    {
        name: 'Mago',
        description: 'Magos são reconhecidos por seu estudo aprofundado da magia. Eles conjuram magias explosivas, raios, ilusões e transformações notáveis.',
        path: '/classes/wizard',
        subclasses: ['Abjurador', 'Adivinhador', 'Evocador', 'Ilusionista'],
        icon: WizardIcon
    },
    {
        name: 'Monge',
        description: 'Os Monges praticam um rigoroso treinamento de combate e disciplina mental para se conectarem ao multiverso e canalizarem seus reservatórios internos de poder.',
        path: '/classes/monk',
        subclasses: ['Elementos', 'Mão Espalmada', 'Misericórdia', 'Sombras'],
        icon: MonkIcon
    },
    {
        name: 'Paladino',
        description: 'Os Paladinos são unidos por seus juramentos de combater as forças da aniquilação e da corrupção.',
        path: '/classes/paladin',
        subclasses: ['Anciões', 'Devoção', 'Glória', 'Vingança'],
        icon: PaladinIcon
    }
]