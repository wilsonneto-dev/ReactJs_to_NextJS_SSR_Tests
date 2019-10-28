import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';

import Shared from '../../configs/Shared';

import './index.scss';

import background from '../../utils/background';
import imageBackground from '../../images/bg-about.png';

import iconArrowUp from '../../images/arrow-up.png';

class AboutText extends Component {
  componentDidMount() {
    document.title = `À La Carte - ${Shared.defaultTitle}`;
    background.set(imageBackground);
  }

  componentWillUnmount() {
    document.title = `${Shared.defaultTitle}`;
    background.clear(imageBackground);
  }

  render() {
    return (
      <>
        <div className="wrapper-about inner arrow-wrapper">
          <Link to="/sobre">
            <img src={iconArrowUp} alt="Página Anterior" />
          </Link>
        </div>
        <div className="wrapper-about inner">
          <header>
            <h1>
              <span>Sobre o</span>
              Cine Belas Artes
            </h1>
          </header>

          <p>
            Poucos cinemas possuem a alma paulistana como o Cine Belas Artes.
            Inaugurado em
            <br />
            14 de julho de 1956 como Cine Trianon, a esquina da Avenida Paulista
            com a Rua da
            <br />
            Consolação, se transforma em um dos principais pontos de atração da
            cidade. Hoje,
            <br />
            62 anos depois, é considerado um dos cartões-postais de São Paulo. É
            um patrimônio
            <br />
            cultural dos paulistanos, local referência de encontro dos amantes
            do cinema.
          </p>

          <h3>História</h3>
          <p>
            O local se destina à exibição de filmes desde 1956. Como Cine Belas
            Artes foi inaugurado
            <br /> em julho de 1967 com o filme de abertura “Os Russos Estão
            Chegando”, programado pela
            <br /> Sociedade Amigos da Cinemateca. Em 1980 ganhou a divisão de
            seis salas, existente até
            <br />
            hoje, batizadas cada uma com o nome de um artista brasileiro:
            Villa-Lobos, Candido
            <br />
            Portinari, Oscar Niemeyer, Aleijadinho, Mario de Andrade e Carmen
            Miranda. Devido a<br /> sua programação especial, mesclando filmes
            de nacionalidades diversas e mantendo
            <br />
            alguns filmes por longo período em cartaz, o Cine Belas Artes
            tornou-se um dos mais
            <br />
            importantes pontos de encontro intelectual e artístico da cidade.
            <br />
            Desde Maio de 2019, o cinema é patrocinado pela cerveja Petra, do
            Grupo Petrópolis,
            <br /> se tornando Petra Belas Artes.
          </p>

          <div className="link">
            <a
              target="_blank"
              href="https://www.cinebelasartes.com.br/programacao-regular/"
            >
              <div>Confira a programação do cinema</div>
              <div>+</div>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default AboutText;
