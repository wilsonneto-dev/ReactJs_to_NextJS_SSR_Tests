import React, { Component, createRef } from 'react';
import clsx from 'clsx';

import imageTeste from '../../images/bg-test-01.jpg';
import imageTeste2 from '../../images/banner-guide.jpg';

import './index.scss';

class Billboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesLoading: true,
      currentIndex: 1,
      hasLink: true,
      interval: null
    };

    this.elementBanner = createRef();
    this.elementLink = createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentDidUpdate() {
    const { list, requestLoading } = this.props;
    const { imagesLoading } = this.state;

    if (!requestLoading && imagesLoading) {
      if (list.length > 0) {
        const [firstBanner] = list;
        this.preLoadImage(firstBanner.image, success => {
          this.elementBanner.current.style.backgroundImage = `url(${
            /*firstBanner.image*/ imageTeste
          })`;
          this.setState({ imagesLoading: false }, () => {
            this.setState({ hasLink: firstBanner.link != '' });
            this.elementLink.current.href = firstBanner.link;
          });
          this.initPreloadingImages();
          this.initTimer();
        });
        console.log(firstBanner);
      }
    }
  }

  componentWillUnmount() {
    const { interval } = this.state;
    if (interval != null) {
      window.clearInterval(interval);
    }

    window.removeEventListener('scroll', this.listenToScroll);
  }

  preLoadImage(image, callback) {
    const htmlImageTemp = document.createElement('img');
    htmlImageTemp.addEventListener('load', () => {
      callback(true);
    });
    htmlImageTemp.addEventListener('error', () => {
      callback(false);
    });
    htmlImageTemp.src = image;
  }

  initPreloadingImages() {
    const { list } = this.props;
    list.forEach(item => {
      this.preLoadImage(item.image, () => {});
    });
  }

  changeBannerIndex(index) {
    const banner = this.props.list[index];
    const hasLink = banner.link != '';
    this.setState({ hasLink });

    if (hasLink) {
      this.elementLink.current.href = banner.link;
    }
  }

  initTimer() {
    const { list } = this.props;
    const maxIndex = list.length - 1;

    const interval = window.setInterval(() => {
      let { currentIndex } = this.state;
      let nextIndex = currentIndex + 1;

      if (nextIndex > maxIndex) nextIndex = 0;

      this.setState({ currentIndex: nextIndex });
      this.changeBannerIndex(nextIndex);
    }, 3000);

    this.setState({ interval });
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const hiddenBanner = winScroll > 150;

    const opacity = hiddenBanner ? 0 : 1;
    this.elementBanner.current.style.opacity = opacity;
  };

  render() {
    const { requestLoading, list } = this.props;
    const { imagesLoading, currentIndex, hasLink } = this.state;

    return (
      <>
        <aside className="billboard">
          <div className="click-area">
            {hasLink && !imagesLoading && (
              <a ref={this.elementLink} href="#"></a>
            )}
          </div>
        </aside>
        <div
          ref={this.elementBanner}
          className={clsx('billboard-background', !imagesLoading && 'loaded')}
        ></div>
      </>
    );
  }
}

export default Billboard;
