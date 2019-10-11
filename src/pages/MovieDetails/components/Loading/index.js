import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

class Loading extends Component {
  render() {
    return (
      <SkeletonTheme color="#4e4b49" highlightColor="#3e3b39">
        <span className="infos">
          <Skeleton />
        </span>

        <h1>
          <Skeleton width={300} />
        </h1>

        <p>
          <Skeleton count={4} />
          <br />
          <br />
          <Skeleton count={5} />
        </p>

        <div className="plays">
          <div style={{ opacity: 0.5 }} className="play-wrapper">
            <div className="play">
              <span></span>
            </div>
            <span>
              <Skeleton width={150} />
            </span>
          </div>
          <div style={{ opacity: 0.5 }} className="play-wrapper">
            <div className="play">
              <span></span>
            </div>
            <span>
              <Skeleton width={150} />
            </span>
          </div>
        </div>

        <div className="actors">
          <Skeleton width={300} />
        </div>
      </SkeletonTheme>
    );
  }
}

export default Loading;
