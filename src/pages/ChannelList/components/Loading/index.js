import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

class Loading extends Component {
  render() {
    return(
      [1,2,3,4,5,6].map((item, index) => (
        <li key={ index }>
          <div className="video-wrapper">
            <div className="image-wrapper">
              <Skeleton height={180} width={320} />
            </div>
            <div className="text">
              <Skeleton count={2} />
            </div>
          </div>
        </li>
      ))
    );
  }
}

export default Loading;