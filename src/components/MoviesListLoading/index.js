import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Items from './Items';

import './index.scss';

class MoviesListLoading extends Component {
  render() {
    return (
      <section className="movies-list loading inner">
        <SkeletonTheme
          className="skeleton"
          color="#ff7748"
          highlightColor="#f45728"
        >
          <header>
            <Skeleton width={250} />
          </header>
          <Items />
        </SkeletonTheme>
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
