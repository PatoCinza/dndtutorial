import React from 'react';
import { LinkFicha } from '../../components/Links/LinkFicha';
import AlignmentChart from '../../assets/alignment-chart.png'
import ExperienceTable from '../../assets/experience-table.png'
import StatsTable from '../../assets/stats-table.png'
import { LinkLivroJogador } from '../../components/Links/LinkLivroJogador';
import './TutorialFicha.css'

function TutorialFicha() {
  return (
    <div>
        <section className='downloads'>
            <label>Você pode baixar a ficha aqui: <LinkFicha /></label>
        </section>

        <section className='sheet-header'>
            <p className='area'>Vamos começar pelo cabeçalho da ficha</p>
            <ul>
                <li>
                    <p>Nome do Personagem: Mais autoexplicativo impossível</p>
                </li>
                <li>
                    <p>Classe e nível: A classe é a profissão do seu personagem podendo ser escolhido entre ''classes'' e o nível será importante para sabermos quais habilidades dessa classe seu personagem já desbloqueou </p>
                    <p className='ref-book'>A lista de classes vai da página 46 à 121 no <LinkLivroJogador />, mas eventualmente eu vou escrever aqui</p>
                </li>
                <li>
                    <p>Raça: Representa a raça do seu personagem, podendo ser escolhido dentre: ''raças'', não tem regras pra escolha de raça, mas cada raça oferece suas características ao personagem</p>
                    <p className='ref-book'>A lista de raças vai da página 17 à 43 no <LinkLivroJogador />, mas eu vou escrever aqui tbm</p>
                </li>
                <li>
                    <p>Antecedente: Toda história tem um início. Os antecedentes de seus personagens revela de onde eles vieram, como se tornaram aventureiros e seu lugar no mundo. Escolher um antecedente fornece a você importantes pistas sobre a identidade de seu personagem. A questão mais importante a ser respondida pelo seu antecedente é o que mudou? Por que você parou de fazer algo do seu antecedente e começou a se aventurar? Aonde você conseguiu recursos para comprar seu equipamento inicial, ou, caso você possua um antecedente que indique riqueza, porque você não tem mais os recursos? Como você aprendeu as perícias que compõem sua classe? O que o separa das pessoas ordinárias que compartilham do seu mesmo antecedente?</p>
                    <p>Os exemplos de antecedentes do livro concedem a você tanto benefícios concretos (características, proficiências e idiomas), quanto sugestões de interpretação.</p>
                    <p className='ref-book'>A lista de antecedentes está na página 127 do <LinkLivroJogador /></p>
                </li>
                <li>
                    <p className='text-top'>Alinhamento: <img src={AlignmentChart} className="alignment-img" alt="diagrama de alinhamentos" /></p>
                </li>
                <li>
                    <p>Nome do jogador: Pra ninguém roubar o personagem do colega</p>
                </li>
                <li>
                    <p>Pontos de experiência: Esse conceito é novo ein</p>
                    <p className='ref-book'>Página 15 tem a tabela no <LinkLivroJogador /> mas tem aqui tbm</p>
                    <img src={ExperienceTable} className="alignment-img" alt="tabela de experiencia" />
                </li>
            </ul>
        </section>

        <section className='sheet-status'>
            <p className='area'>Agora vamos preencher os status, aqui temos duas maneiras de prosseguir</p>
            <ul>
                <li>
                    <p>Jogando dados: Você joga seis vezes (uma para cada status) 4d6 e tira o menor número, aquele é o seu valor no status </p>
                </li>
                <li>
                    <p>Comprando status: A critério do Mestre, você pode usar esta variação para determinar seus valores de habilidade. O método descrito aqui permite que você crie um personagem com um conjunto de valores de habilidade escolhido individualmente. Você tem 27 pontos para gastar em seus valores de habilidade. O custo de cada valor de habilidade é mostrado na tabela Custo de Pontos de Habilidades. Por exemplo, um valor 14 custa 7 pontos. Usando este método, 15 será o valor de habilidade mais alto que você pode conseguir inicialmente, antes de aplicar as melhorias raciais.
                    <br />Você não pode ter uma habilidade menor que 8.</p>
                    <p className='ref-book'>a tabela tá na página 13 do <LinkLivroJogador /></p>
                    <img src={StatsTable} className="alignment-img" alt="tabela de Status" />
                </li>
            </ul>

        </section>
    </div>
  );
}

export default TutorialFicha;
