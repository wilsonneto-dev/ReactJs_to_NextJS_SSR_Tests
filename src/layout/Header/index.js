import React, { Component } from 'react';
import clsx from 'clsx';
import { Link, withRouter } from 'react-router-dom';

import Search from '../../components/Search';

/* styles */
import './index.scss';

/* images */
import imageLogo from '../../images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { activeLink: 'home' };
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <>
        <header className="main-header box-sized">
          <input id="mobile-navbar-check" type="checkbox" />

          <div className="mobile-menu">
            <label htmlFor="mobile-navbar-check">
              <span className="hamburger">
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </span>
            </label>
          </div>
          <div className="logo">
            <img src={imageLogo} alt="Petra Belas Artes" />
          </div>
          <nav>
            <ul>
              <li className={clsx(pathname === '/' && 'active')}>
                <Link to="/">Início</Link>
                <span className="bullet"></span>
              </li>
              <li
                className={clsx(
                  (pathname === '/sobre' || pathname === '/sobre-texto') &&
                    'active'
                )}
              >
                <Link to="/sobre">Sobre</Link>
                <span className="bullet"></span>
              </li>
              <li className={clsx(pathname === '/assinatura' && 'active')}>
                <Link to="/assinatura">Assinatura</Link>
                <span className="bullet"></span>
              </li>
              <li
                className={clsx(pathname === '/cardapio-semanal' && 'active')}
              >
                <Link to="/cardapio-semanal">Seu Cardápio Semanal</Link>
                <span className="bullet"></span>
              </li>
              <li className={clsx(pathname === '/sugestoes' && 'active')}>
                <Link to="/sugestoes">Sugestões</Link>
                <span className="bullet"></span>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default withRouter(Header);
