import React, { Component } from 'react';

import './index.scss';

class MoviesList extends Component {
  render() {
    return (
      <>
        <section className="movies-list inner">
          <header>
            <h2>Medo e Pavor</h2>
          </header>
          <div className="movies-slider">

            {
              [1,2,3,4,5,6,7,8].map((item, index) => (
                <div key={index} className="item">
                  <div className="wrapper">
                    <img src="" alt="" />
                  </div>
                </div>
              ))
            }

          </div>
        </section>
      </>
    );
  }
}

export default MoviesList;