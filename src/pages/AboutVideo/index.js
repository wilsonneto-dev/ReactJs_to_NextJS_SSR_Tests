import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Shared from '../../configs/Shared';

import './index.scss';

import background from '../../utils/background';
import imageBackground from '../../images/bg-about.png';

import iconArrowDown from '../../images/arrow-down.png';

class AboutVideo extends Component {
  componentDidMount() {
    document.title = `Á La Carte - ${Shared.defaultTitle}`;
    // background.set(imageBackground);
  }

  componentWillUnmount() {
    document.title = `${Shared.defaultTitle}`;
    // background.clear();
  }

  render() {
    return (
      <>
        <div className="about-movie-wrapper inner">
          <div className="side">
            <header>
              <h1>À La Carte</h1>
            </header>
            <div className="text-blocks">
              <p>
                Uma nova maneira de ver filmes em casa: <br />
                com programação especial, como a do
                <br />
                Cine Belas Artes.
              </p>
              <p>
                Aqui você encontra um acervo com <strong>curadoria</strong>,
                <br />
                pensado para você, que ama uma
                <br />
                programação de qualidade.
              </p>
            </div>
          </div>
          <div className="side">
            <div className="video-wrapper">
              <video
                controls
                autoPlay={true}
                src="http://belasartesalacarte.com.br/video/video.mp4"
              ></video>
            </div>
          </div>
        </div>

        <div className="about-movie-wrapper inner arrow-wrapper">
          <Link to="/sobre-texto">
            <img src={iconArrowDown} alt="próxima página" />
          </Link>
        </div>
      </>
    );
  }
}

export default AboutVideo;
