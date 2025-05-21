import React from "react";
import { NavLink } from "react-router-dom";
import { CollapsableTable } from "../../components/CollapsableTable";
import {
  abilityCheckTable,
  advantageDisadvantageTable,
  coverTable,
  damageTypesTable,
  exhaustionTable,
  healingTable,
  movementTable,
  visionTable,
} from "./Tables";
import "./ComoJogar.css";

function ComoJogar() {
  return (
    <div className="tutorial-sheet">
      <h1>Capítulo 1 - Jogando o Jogo</h1>

      <section>
        <h2>O Básico</h2>
        <p>
          A imaginação é essencial em Dungeons & Dragons, um jogo cooperativo onde os personagens que você interpreta embarcam juntos em aventuras em mundos de fantasia repletos de monstros e magia.
        </p>
        <p>
          Em D&D, a ação ocorre na imaginação dos jogadores e é narrada coletivamente. Aqui está um vislumbre de como isso acontece:
        </p>
        <div className="example-dialog">
          <p><strong>Jairo (como Mestre):</strong> Após sua longa jornada, o Castelo Ravenloft se ergue diante de vocês. Torres de pedra em ruínas — talvez antigas guaritas — se aproximam. Além delas, um abismo profundo se estende, envolto em uma névoa densa. Uma ponte levadiça abaixada atravessa o abismo, suas correntes rangendo ao vento. Gárgulas de pedra observam das altas paredes, e uma luz pálida ilumina o pátio através das portas abertas do castelo.</p>
          <p><strong>Felipe (como Gareth):</strong> Eu analiso as gárgulas. Tenho a sensação de que não são apenas estátuas!</p>
          <p><strong>Eva (como Mirabella):</strong> Eu quero avaliar a resistência da ponte levadiça. Será que conseguimos atravessá-la, ou ela vai desmoronar sob o nosso peso?</p>
        </div>
        <p>
          O jogo se desenvolve seguindo um padrão básico:
        </p>
        <ol>
          <li>O Mestre Descreve uma Cena</li>
          <li>Os Jogadores Descrevem as Ações de Seus Personagens</li>
          <li>O Mestre Narra os Resultados das Ações dos Aventureiros</li>
        </ol>
        <p>
          Esse padrão se repete durante toda a sessão de jogo, seja enquanto os aventureiros dialogam com um nobre, exploram ruínas ou enfrentam um dragão.
        </p>
      </section>

      <section>
        <h2>Jogador ou Mestre?</h2>
        <h3>Sendo um Jogador</h3>
        <p>Se quer ser um dos protagonistas das aventuras do seu grupo, considere ser um jogador. Veja o que os jogadores fazem:</p>
        <ul>
          <li><strong>Crie um Personagem.</strong> Seu personagem é seu alter ego no mundo de fantasia do jogo.</li>
          <li><strong>Forme Uma Equipe.</strong> Seu personagem se une aos outros jogadores para formar um grupo de aventureiros.</li>
          <li><strong>Aventure-se.</strong> O grupo do seu personagem explora locais e eventos apresentados pelo Mestre.</li>
        </ul>

        <h3>Sendo um Mestre</h3>
        <p>Se você deseja ser a mente pensante por trás do jogo, considere ser o Mestre. Veja o que os Mestres fazem:</p>
        <ul>
          <li><strong>Construa Aventuras.</strong> Você prepara as aventuras que os jogadores vivenciam.</li>
          <li><strong>Guie a História.</strong> Você narra a maior parte da ação, descrevendo os locais e criaturas.</li>
          <li><strong>Arbitre as Regras.</strong> Você supervisiona a aplicação das regras do jogo pelo grupo.</li>
        </ul>
      </section>

      <section>
        <h2>Ritmo do Jogo</h2>
        <p>
          Os três pilares fundamentais de D&D são a interação social, a exploração e o combate. Independentemente da experiência do jogador, o jogo se desenvolve seguindo esse padrão básico:
        </p>
        <ol>
          <li><strong>O Mestre Descreve uma Cena.</strong> O Mestre informa aos jogadores a localização de seus aventureiros e o que os rodeia.</li>
          <li><strong>Os Jogadores Descrevem as Ações de Seus Personagens.</strong> Os aventureiros permanecem juntos enquanto exploram.</li>
          <li><strong>O Mestre Narra os Resultados das Ações dos Aventureiros.</strong> Às vezes, a resolução de uma tarefa é simples, mas outras vezes pode ser mais complexa.</li>
        </ol>
        <p>
          <strong>Exceções Sobrepõe Regras Gerais</strong><br />
          Regras gerais norteiam cada aspecto do jogo. Por exemplo, as regras de combate determinam que ataques corpo a corpo utilizam Força, enquanto ataques à distância utilizam Destreza. Essa é uma regra geral, e ela se aplica desde que nada no jogo indique explicitamente o contrário.
        </p>
      </section>

      <section>
        <h2>Um Jogo Contínuo</h2>
        <p>
          Às vezes, uma sessão de D&D é um jogo completo em si (frequentemente chamada de "one-shot"), onde você participa de uma aventura curta que dura apenas uma sessão. No entanto, frequentemente as sessões de D&D estão interligadas em uma aventura mais longa que leva várias sessões para ser concluída, e essas aventuras podem ser encadeadas em uma narrativa mais ampla chamada campanha.
        </p>
        <h3>Aventuras</h3>
        <p>
          Uma aventura pode ser criada pelo Mestre ou adquirida. Em ambos os casos, uma aventura apresenta um cenário fantástico, como uma masmorra subterrânea, uma selva deslumbrante ou uma cidade repleta de magia.
        </p>
        <h3>Campanhas</h3>
        <p>
          Uma campanha é uma série de aventuras com um grupo consistente de aventureiros seguindo a narrativa. Algumas campanhas são episódicas, onde cada aventura é uma história independente, e apenas os personagens dos jogadores as conectam à próxima.
        </p>
      </section>

      <section>
        <h2>Dados</h2>
        <p>
          Os dados adicionam aleatoriedade ao jogo. Eles ajudam a determinar se personagens e monstros são bem-sucedidos nas coisas que tentam.
        </p>
        <h3>Notação de Dados</h3>
        <p>
          Os dados utilizados em D&D são identificados pela letra d seguida pelo número de lados do dado: d4, d6, d8, d10, d12 e d20. Por exemplo, um d6 é um dado de seis lados.
        </p>
        <h3>Dados de Porcentagem</h3>
        <p>
          As regras às vezes mencionam um d100. Embora esses dados existam, a forma comum de jogar 1d100 utiliza um par de dados de dez lados numerados de 0 a 9, conhecidos como dados de porcentagem.
        </p>
        <h3>Para que Servem os Dados?</h3>
        <ul>
          <li><strong>Teste de D20:</strong> O dado de 20 lados (d20) é o mais importante no jogo, sendo central para a mecânica principal.</li>
          <li><strong>Dano:</strong> O uso mais comum de dados diferentes do d20 é para determinar o dano.</li>
          <li><strong>Tabelas Aleatórias:</strong> Ocasionalmente, você encontrará uma tabela que utiliza uma jogada de dados para gerar um resultado aleatório.</li>
          <li><strong>Probabilidade Percentual:</strong> Às vezes, você pode encontrar uma regra que descreve a probabilidade percentual de algo ocorrer.</li>
        </ul>
      </section>

      <section>
        <h2>Os Seis Atributos</h2>
        <p>
          Todas as criaturas — tanto personagens quanto monstros — possuem seis atributos que avaliam características físicas e mentais:
        </p>
        <ul>
          <li><strong>Força:</strong> Potência física</li>
          <li><strong>Destreza:</strong> Agilidade, reflexos e equilíbrio</li>
          <li><strong>Constituição:</strong> Saúde e resistência</li>
          <li><strong>Inteligência:</strong> Raciocínio e memória</li>
          <li><strong>Sabedoria:</strong> Perceptividade e fortaleza mental</li>
          <li><strong>Carisma:</strong> Confiança, equilíbrio e charme</li>
        </ul>
        <h3>Valores de Atributo</h3>
        <p>
          Cada atributo possui um valor que varia de 1 a 20, embora alguns monstros possam ter um valor tão alto quanto 30. Esse valor representa a magnitude de um atributo.
        </p>
        <h3>Modificadores de Atributo</h3>
        <p>
          Cada atributo possui um modificador que você aplica sempre que faz um Teste de D20 com esse atributo. Um modificador de atributo é derivado de seu valor.
        </p>
      </section>

      <section>
        <h2>Testes de D20</h2>
        <p>
          Quando o resultado de uma ação é incerto, o jogo utiliza um teste de d20 para determinar o sucesso ou fracasso. Essas jogadas são conhecidas como Testes de D20 e se dividem em três tipos: testes de atributo, salvaguardas e jogadas de ataque.
        </p>
        <CollapsableTable
          data={abilityCheckTable}
          title="Classes de Dificuldade"
        />
        <p>
          Vantagem e desvantagem são mecânicas importantes que podem afetar seus testes. Quando uma jogada tem Vantagem ou Desvantagem, jogue um segundo d20. Utilize a maior das duas jogadas se tem Vantagem e a menor se tem Desvantagem.
        </p>
        <CollapsableTable
          data={advantageDisadvantageTable}
          title="Vantagem e Desvantagem"
        />
      </section>

      <section>
        <h2>Combate</h2>
        <p>
          O combate em D&D é dividido em rodadas, onde cada participante tem um turno. A ordem dos turnos é determinada pela iniciativa. Cada rodada corresponde a aproximadamente 6 segundos no mundo do jogo.
        </p>
        <h3>Passo a Passo do Combate</h3>
        <ol>
          <li><strong>Determine as Posições.</strong> O Mestre estabelece a localização de todos os personagens e monstros.</li>
          <li><strong>Jogue a Iniciativa.</strong> Todos os envolvidos no combate jogam a Iniciativa para definir a ordem dos turnos.</li>
          <li><strong>Realize os Turnos.</strong> Cada participante realiza um turno na ordem de Iniciativa durante o combate.</li>
        </ol>
        <h3>Cobertura</h3>
        <p>
          Paredes, árvores, criaturas e outros obstáculos podem proporcionar cobertura durante o combate, tornando um alvo mais difícil de ser atingido.
        </p>
        <CollapsableTable
          data={coverTable}
          title="Cobertura"
        />
        <h3>Tipos de Dano</h3>
        <p>
          Diferentes ataques, armas mágicas e outras fontes de dano infligem diferentes tipos de dano. Algumas criaturas podem ter resistência ou vulnerabilidade a certos tipos de dano.
        </p>
        <CollapsableTable
          data={damageTypesTable}
          title="Tipos de Dano"
        />
      </section>

      <section>
        <h2>Movimento e Posição</h2>
        <p>
          No seu turno, você pode se mover uma distância igual ou menor que o seu Deslocamento, ou optar por não se mover. Seu movimento pode incluir escalar, nadar, rastejar e saltar.
        </p>
        <p>
          Combatentes geralmente enfrentam desaceleração em Terreno Difícil. Exemplos incluem entulhos, escadas íngremes, móveis baixos, neve, pântanos rasos e vegetação densa.
        </p>
        <CollapsableTable
          data={movementTable}
          title="Movimento"
        />
      </section>

      <section>
        <h2>Interação Social</h2>
        <p>
          Durante suas aventuras, os personagens dos jogadores encontram diversas pessoas e enfrentam alguns monstros que preferem dialogar a lutar. Nessas situações, é o momento da interação social.
        </p>
        <p>
          A interação social progride de duas formas: através de interpretação e de testes de atributo. A interpretação é o ato de desempenhar um papel, decidindo como seu personagem pensa, age e fala.
        </p>
        <h3>Interpretação</h3>
        <p>
          A interpretação é, literalmente, o ato de desempenhar um papel. Nesse contexto, é você, como jogador, quem decide como seu personagem pensa, age e fala. A interpretação permeia todos os aspectos do jogo e se destaca durante as interações sociais.
        </p>
        <h3>Testes de Atributo</h3>
        <p>
          Os testes de atributo podem ser essenciais para determinar o resultado de uma interação social. Seus esforços de interpretação podem modificar a atitude de um PNJ, mas ainda pode haver um elemento de sorte se o Mestre optar por jogar dados para influenciar a resposta de um PNJ a você.
        </p>
      </section>

      <section>
        <h2>Exploração</h2>
        <p>
          Exploração envolve a investigação de locais perigosos e enigmáticos. Os aventureiros podem utilizar seu equipamento de diversas maneiras durante a exploração.
        </p>
        <h3>Equipamento de Aventura</h3>
        <p>
          Os aventureiros podem utilizar seu equipamento de diversas maneiras durante a exploração. Uma Escada os transporta a locais de difícil acesso, uma Tocha ou fonte de luz revela detalhes ocultos, Ferramentas de Ladrão auxiliam na abertura de portas e recipientes trancados, e Estrepes criam obstáculos para perseguidores.
        </p>
        <h3>Visão e Luz</h3>
        <p>
          A visão e a luz são cruciais para a exploração. Uma área pode estar Parcial ou Totalmente Obscurecida, afetando a capacidade dos personagens de perceber seu ambiente.
        </p>
        <CollapsableTable
          data={visionTable}
          title="Visão"
        />
      </section>

      <section>
        <h2>Descanso</h2>
        <p>
          Aventureiros não podem passar o tempo todo se aventurando e precisam de descanso entre as aventuras. Todas as criaturas podem realizar um Descanso Curto de uma hora e um Descanso Longo de 8 horas.
        </p>
        <CollapsableTable
          data={healingTable}
          title="Cura e Recuperação"
        />
        <h3>Exaustão</h3>
        <p>
          Algumas atividades especiais e perigos ambientais podem levar a um estado de exaustão. A exaustão tem seis níveis, cada um com efeitos mais severos.
        </p>
        <CollapsableTable
          data={exhaustionTable}
          title="Níveis de Exaustão"
        />
      </section>

      <section>
        <h2>Entre Aventuras</h2>
        <p>
          Entre aventuras, os personagens podem se recuperar, treinar, criar itens mágicos, realizar pesquisas ou simplesmente descansar. Este tempo também pode ser usado para desenvolver a história do personagem e suas conexões com o mundo.
        </p>
      </section>
    </div>
  );
}

export default ComoJogar;
