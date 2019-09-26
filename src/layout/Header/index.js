import React, {Component} from 'react';
import { Link } from "react-router-dom";

/* styles */
import './index.scss';

/* images */
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
                <Link to="/">Início</Link><span class="bullet"></span>
              </li>

              <li><Link to="/sobre">Sobre</Link><span class="bullet"></span></li>
              
              <li><Link to="/assinatura">Assinatura</Link><span class="bullet"></span></li>
              
              <li>
                <Link to="/cardapio-semanal">Seu cardápio Semanal</Link><span class="bullet"></span>
              </li>
              
              <li><Link to="/sugestoes">Sugestões</Link><span class="bullet"></span></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }

}

export default Header;