import React, { Component, createRef } from 'react';

import './index.scss';

import preloadImage from '../../utils/preloadImage';

class LazyImage extends Component {
  constructor(props) {
    super(props);

    this.refImg = createRef();
  }

  componentDidMount() {
    const { src } = this.props;
    if (src != null) {
      preloadImage(src, success => {
        if (success) {
          if (this.refImg.current != null) {
            this.refImg.current.src = src;
            this.refImg.current.style.opacity = '1';
          }
        }
      });
    }
  }

  render() {
    return (
      <>
        <img ref={this.refImg} className="lazy-image" {...this.props} />
      </>
    );
  }
}

export default LazyImage;
