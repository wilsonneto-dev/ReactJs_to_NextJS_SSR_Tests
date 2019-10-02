import React, { Component } from 'react';

/** Components */
import Billboard from '../../components/Billboard';
import MoviesList from '../../components/MoviesList';

import './index.scss';

class Home extends Component {
  render(){
    return(
      <>
        <Billboard />

        <MoviesList />
      </>
    );
  }
}

export default Home;