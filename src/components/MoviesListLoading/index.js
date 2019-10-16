import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class MoviesListLoading extends Component {
  render() {
    const { numItensOnSlider } = this.props;
    let arrLoadingItems = [];
    for (let index = 0; index < numItensOnSlider; index++)
      arrLoadingItems.push(index);

    console.log(arrLoadingItems);
    console.log(numItensOnSlider);

    return (
      <>
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
      </>
    );
  }
}

export default MoviesListLoading;
