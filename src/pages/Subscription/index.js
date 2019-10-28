import React, { Component } from 'react';

import Shared from '../../configs/Shared';

import background from '../../utils/background';
import imageBackground from '../../images/bg-subscription.png';

import './index.scss';

class Subscription extends Component {
  componentDidMount() {
    document.title = `Assinatura - ${Shared.defaultTitle}`;
    background.set(imageBackground);
  }

  componentWillUnmount() {
    document.title = `${Shared.defaultTitle}`;
    background.clear();
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
              No <strong>Petra Belas Artes À LA CARTE</strong>,<br />
              você tem <strong>2</strong> opções complementares
              <br />
              para assistir aos seus filmes favoritos.
            </p>
          </div>

          <div>
            <div className="flex">
              <div className="box">
                <h1>Assinatura Mensal</h1>
                <div className="valor">
                  <span>R$ 9,90</span>
                  <span className="small">nove reais e noventa centavos</span>
                </div>
                <p>
                  Plano mensal com acesso a todos os filmes do catálogo (com
                  exceção dos lançamentos especiais), em 2 dispositivos
                  simultâneamente.
                </p>
                <a href="https://www.looke.com.br/Account/Login?ReturnUrl=%2fsubscription%2fbelasartes">
                  Clique aqui
                </a>
              </div>
              <div className="box">
                <h1>Locação</h1>
                <div className="valor">
                  <span className="label">catálogo</span>
                  <span>R$ 4,90</span>
                  <span className="small">quatro reais e noventa centavos</span>
                </div>
                <p className="big">Lançamentos especiais com preços variados</p>
                <p className="margin-bottom-subscription">
                  Locação por filme unitário para assistir em um período de 48
                  horas após a compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Subscription;
