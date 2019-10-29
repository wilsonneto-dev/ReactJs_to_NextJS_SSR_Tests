import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './index.scss';

class MoviesListLoading extends Component {
  render() {
    const { numItensOnSlider } = this.props;
    let arrLoadingItems = [];
    for (let index = 0; index < numItensOnSlider; index++)
      arrLoadingItems.push(index);

    return (
      <section className="movies-list loading inner">
        <header>
          <Skeleton width={250} />
        </header>
        <div className="movies-slider loading">
          {arrLoadingItems.map((item, index) => (
            <div key={index} className="item">
              <center>
                <div className="image-wrapper">
                  <div className="img-loading"></div>
                </div>
              </center>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default MoviesListLoading;

/*
        <SkeletonTheme
          className="skeleton"
          color="#ff7748"
          highlightColor="#f45728"
        >
          <section className="movies-list loading inner">
            <header>
              <Skeleton width={250} />
            </header>
            <div className="movies-slider loading-skeleton loading">
              {arrLoadingItems.map((item, index) => (
                <div key={index} className="item">
                  <div className="image-wrapper">
                    <Skeleton height={200} width={300} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SkeletonTheme>
*/
