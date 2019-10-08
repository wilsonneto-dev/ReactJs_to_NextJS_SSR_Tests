import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class MoviesListLoading extends Component {
  render() {
    return (      
      <>
        <SkeletonTheme className="skeleton" color="#ff7748" highlightColor="#f45728">
          <section className="movies-list inner">
            <header>
              <Skeleton width={250} />
            </header>
            <div className="movies-slider">

              {
                [1,2,3,4,5,6,7,8].map((item, index) => (
                  <div key={index} className="item">
                    <div className="image-wrapper">
                    <Skeleton height={300} width={200} />
                    </div>
                  </div>
                ))
              }

            </div>
          </section>
        </SkeletonTheme>
      </>
    );
  }
}

export default MoviesListLoading;
