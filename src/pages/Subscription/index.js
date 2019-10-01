import React, { Component } from 'react';

import Shared from '../../configs/Shared';

import './index.scss';

class Subscription extends Component {
  componentDidMount() {
    document.title = `Assinatura - ${ Shared.defaultTitle }`;
  }

  componentWillUnmount() {
    document.title = `${ Shared.defaultTitle }`;
  }

  render() {
    return (
      <>
        <div className="wrapper inner">
          <div>
            <h1>
              Assinatura
              <span>ou</span>
              Locação
            </h1>

            <p>
              No <b>Petra Belas Artes À LA CARTE</b>, você 
              tem <b>2</b> opções complementares 
              para assistir aos seus filmes favoritos.
            </p>
          </div>

          <div>
            <div className="box">
              <h1>Assinatura Mensal</h1>
              <div className="valor">
                <span>R$ 9,90</span>
                <span className="small">nove reais e noventa centavos</span>
              </div>
              <p>
                Plano mensal com acesso a até 90%
                dos filmes do canal em 2 dispositivos simultaneamente. 
              </p>
              <a href="/">Clique aqui</a>
            </div><div className="box">
              <h1>Locação</h1>
              <div className="valor">
                <span className="label">catálogo</span>
                <span>R$ 4,90</span>
                <span class="small">quatro reais e noventa centavos</span>
              </div>
              <p className="big">
                especiais e lançamentos com preços variados
              </p>
              <p>
                Locação por filme unitário para assistir
                em um período de 48 horas após a compra.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscription;