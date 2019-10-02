import React, { Component } from 'react';

import './index.scss';

class Billboard extends Component {
  render()
  {
    return (
      <aside className="billboard inner">
        <div>
          <hgroup>

            <h3>
              <span id="billboard-country">França</span>
              <span id="billboard-year" className="bold">1956</span>
              <span id="billboard-duration">95 min.</span>
              <span id="billboard-genre" className="bold">Drama</span>
              <span>
                Direção
                <span id="billboard-director" className="bold">Roger Vadim</span>
              </span>
            </h3>

            <h1>
              E Deus criou a mulher...
            </h1>
          </hgroup>

          <span className="play">
            <span></span>
          </span>
        </div>
      </aside>
    );
  }
}

export default Billboard;
