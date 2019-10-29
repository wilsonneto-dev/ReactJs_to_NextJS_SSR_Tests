import React, { Component, Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';

class LoadingSuggestions extends Component {
  render() {
    return (
      <>
        {[1, 2, 3].map((item, index) => (
          <Fragment key={index}>
            <div className="item loading">
              <div className="avatar-wrapper">
                <Skeleton height={250} width={250} />
              </div>
              <h3>
                <Skeleton />
              </h3>
              <h4>
                <Skeleton />
              </h4>
              <p>
                <Skeleton count={3} />
              </p>
            </div>
          </Fragment>
        ))}
      </>
    );
  }
}

export default LoadingSuggestions;
