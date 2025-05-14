import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Classes.css'

import { ReactComponent as UnknownSpell } from '../../components/SpellCard/assets/book-unknown.svg'
import { SpellCard } from '../../components/SpellCard/SpellCard';
import Barbaro from './Barbaro/Barbaro';
function Classes() {

    if (window.location.hash.includes('barbarian')) {
        return (
            <div className="App">
                <NavLink to='/classes'>Voltar</NavLink>
                <Barbaro />
            </div>
        )
    }

    return (
        <div className="App">
            <h1>Capítulo 3 - Classes de Personagens</h1>
            <p>As classes de personagem fornecem as capacidades mais emocionantes de um personagem. Este capítulo oferece doze classes, cada uma contendo quatro subclasses — todas resumidas a seguir.</p>
            <hr />
            <div><NavLink to='/classes/barbarian'>Bárbaro.</NavLink> Avance com Fúria e entre em combate corpo a corpo. Então siga a Trilha d...
                <ul>
                    <li><NavLink to='/classes/barbarian/worldtree'>Árvore do Mundo</NavLink> para acessar a vitalidade cósmica.</li>
                    <li>Berserker para liberar violência bruta.</li>
                    <li>Coração Selvagem para manifestar seu instinto animal.</li>
                    <li>Fanático para enfurecer-se em união com um deus.</li>
                </ul>
            </div>
            <hr />
            <div>Bardo. Conjure magias que inspiram e curam aliados ou confundem inimigos. Então junte-se ao Colégio d...
                <ul>
                    <li>Bravura para brandir armas com magias.</li>
                    <li>Conhecimento para colecionar saberes e segredos mágicos.</li>
                    <li>Dança para aproveitar a agilidade no combate.</li>
                    <li>Glamour para tecer a magia fascinante de Faéria.</li>
                </ul>
            </div>
            <hr />
            <div>Bruxo. Conjure magias derivadas de conhecimento oculto. Em seguida, forme um pacto com o...
                <ul>
                    <li>Patrono Arquifada para se teleportar e manipular magia feérica.</li>
                    <li>Patrono Celestial para curar com magia celestial.</li>
                    <li>Patrono O Grande Antigo para mergulhar em conhecimentos proibidos.</li>
                    <li>Patrono Ínfero para invocar poderes sinistros.</li>
                </ul>
            </div>
            <hr />
            <div>Clérigo. Invoque magia divina para curar, fortalecer e castigar. Em seguida, domine o...
                <ul>
                    <li>Domínio da Guerra para inspirar bravura e punir inimigos.</li>
                    <li>Domínio da Luz para empunhar luz ardente e protetora.</li>
                    <li>Domínio da Trapaça para atormentar inimigos com artimanhas.</li>
                    <li>Domínio da Vida para ser um mestre da cura.</li>
                </ul>
            </div>
            <hr />
            <div>Druida. Canalize a magia da natureza para curar, moldar e controlar os elementos. Então junte-se ao Círculo d...
                <ul>
                    <li>Estrelas para obter poderes em uma forma estelar.</li>
                    <li>Lua para adotar formas de animais poderosos.</li>
                    <li>Mar para canalizar marés e tempestades.</li>
                    <li>Terra para aproveitar a magia do ambiente.</li>
                </ul>
            </div>
            <hr />
            <div>Feiticeiro. Use magia inerente ao seu ser, moldando o poder à sua vontade. Em seguida, a canalize por meio d...
                <ul>
                    <li>Feitiçaria Aberrante para usar estranha magia psiônica.</li>
                    <li>Feitiçaria Dracônica para emanar a magia dos dragões.</li>
                    <li>Feitiçaria Mecânica para aproveitar forças cósmicas da ordem.</li>
                    <li>Feitiçaria Selvagem para liberar magia caótica.</li>
                </ul>
            </div>
            <hr />
            <div>Guardião. Una proezas marciais, magia da natureza e habilidades de sobrevivência. Em seguida, incorpore o...
                <ul>
                    <li>Andarilho Feérico para manifestar a alegria e a fúria feérica.</li>
                    <li>Caçador para proteger a natureza com versatilidade marcial.</li>
                    <li>Senhor das Feras para formar um laço com uma fera primitiva.</li>
                    <li>Vigilante das Sombras para perseguir inimigos que se escondem nas trevas.</li>
                </ul>
            </div>
            <hr />
            <div>Guerreiro. Domine todas as armas e armaduras. Em seguida, incorpore o...
                <ul>
                    <li>Campeão para buscar o auge da proeza no combate.</li>
                    <li>Cavaleiro Místico para aprender magias que auxiliem no combate.</li>
                    <li>Combatente Psíquico para aumentar os ataques com poder psiônico.</li>
                    <li>Mestre da Batalha para usar manobras de combate especiais.</li>
                </ul>
            </div>
            <hr />
            <div>Ladino. Desfira Ataques Furtivos mortais enquanto evita danos através da furtividade. Em seguida, incorpore o...
                <ul>
                    <li>Adaga Espiritual para golpear inimigos com lâminas psíquicas.</li>
                    <li>Assassino para realizar emboscadas e envenenamentos.</li>
                    <li>Ladrão para dominar infiltração e caça ao tesouro.</li>
                    <li>Trapaceiro Arcano para melhorar a furtividade com magia.</li>
                </ul>
            </div>
            <hr />
            <div>Mago. Estude magia arcana e domine magias para todos os propósitos. Em seguida, incorpore o...
                <ul>
                    <li>Abjurador para proteger aliados e banir inimigos.</li>
                    <li>Adivinhador para aprender os segredos do multiverso.</li>
                    <li>Evocador para criar efeitos explosivos.</li>
                    <li>Ilusionista para tecer magias de ilusão.</li>
                </ul>
            </div>
            <hr />
            <div>
                <ul>Monge. Entre e saia do combate corpo a corpo com velocidade e precisão. Em seguida, torne-se um Combatente d...
                    <li>Elementos para manejar poder elemental.</li>
                    <li>Mão Espalmada para dominar o combate desarmado.</li>
                    <li>Misericórdia para curar ou ferir com um toque.</li>
                    <li>Sombras para utilizar sombras em estratagemas.</li>
                </ul>
            </div>
            <hr />
            <div>Paladino. Destrua inimigos e proteja aliados com poder divino e marcial. Em seguida, faça o Juramento d...
                <ul>
                    <li>Anciões para preservar a vida, a alegria e a natureza.</li>
                    <li>Devoção para se comportar como os anjos da justiça.</li>
                    <li>Glória para alcançar os picos do heroísmo.</li>
                    <li>Vingança para perseguir os malfeitores.</li>
                </ul>
            </div>
        </div>
    );
}

export default Classes;
