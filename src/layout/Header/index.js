import React, {Component} from 'react';

import './index.scss';
import './responsive.scss';

import imageLogo from '../../images/logo.png'; 

class Header extends Component {
  state = {}

  render(){
    return (
      <>
        <header class="main-header box-sized">
          

          <div class="logo">
            <img src={ imageLogo } alt="Petra Belas Artes" />
          </div>
          <nav>
            <ul>
              <li class="active">
                <a href="/">Início</a><span class="bullet"></span>
              </li>
              <li><a href="/">Sobre</a><span class="bullet"></span></li>
              <li><a href="/">Assinatura</a><span class="bullet"></span></li>
              <li>
                <a href="/">Seu cardápio Semanal</a><span class="bullet"></span>
              </li>
              <li><a href="/">Sugestões</a><span class="bullet"></span></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }

}

export default Header;