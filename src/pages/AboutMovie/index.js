import React, { Component } from 'react';

import './index.scss';

class AboutMovie extends Component {
  render(){
    return (
      <>
        <div classname="about-movie-wrapper">
          <header>
            <h1>
              À La<br />
              Carte
            </h1>
          </header>
          <div className="text-blocks">
            <p>
              Uma nova maneira de ver filmes em casa: 
              com programação especial, como a do Cine Belas Artes.
            </p>
            <p>
              Aqui você encontra um acervo com curadoria, pensado para você, 
              que ama uma programação de qualidade.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMovie;
