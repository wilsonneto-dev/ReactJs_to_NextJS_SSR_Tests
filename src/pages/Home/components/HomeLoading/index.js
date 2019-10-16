import React, { Component } from 'react';

import MoviesListLoading from '../../../../components/MoviesListLoading';

class HomeLoading extends Component {
  render() {
    return (
      <>
        {[1, 2, 3].map((_, i) => (
          <MoviesListLoading key={i} {...this.props} />
        ))}
      </>
    );
  }
}

export default HomeLoading;
