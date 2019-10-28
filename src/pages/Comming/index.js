import React, { Component, createRef } from 'react';

import Shared from '../../configs/Shared';

import './index.scss';

class Comming extends Component {
  componentDidMount() {
    document.title = `Em Breve - ${Shared.defaultTitle}`;
  }

  componentWillUnmount() {
    document.title = `${Shared.defaultTitle}`;
  }

  render() {
    return (
      <>
        <div className="wrapper-about inner">
          <header>
            <h1>Em Breve</h1>
          </header>
        </div>
      </>
    );
  }
}

export default Comming;
