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
        <header className="main-header box-sized">
          <input id="mobile-navbar-check" type="checkbox" />

            <div className="mobile-menu">
              <label for="mobile-navbar-check">
                <span className="hamburger">
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </span>
              </label>
            </div>


          <div className="logo">
            <img src={ imageLogo } alt="Petra Belas Artes" />
          </div>
          <nav>
            <ul>
              <li className="active">
                <Link to="/">Início</Link><span className="bullet"></span>
              </li>

              <li><Link to="/sobre">Sobre</Link><span className="bullet"></span></li>
              
              <li><Link to="/assinatura">Assinatura</Link><span className="bullet"></span></li>
              
              <li>
                <Link to="/cardapio-semanal">Seu cardápio Semanal</Link><span className="bullet"></span>
              </li>
              
              <li><Link to="/sugestoes">Sugestões</Link><span className="bullet"></span></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }

}

export default Header;