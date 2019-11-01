import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api, { servicesAPIs, defaultConfigAPIs } from '../../services/api';
import Shared from '../../configs/Shared';

/** Components */
import Billboard from '../../components/Billboard';
import MoviesList from '../../components/MoviesList';
import MoviesListLoading from '../../components/MoviesListLoading';
import HomeLoading from './components/HomeLoading';

import BannerFixo from '../../images/0-BannerAssinarura.jpg';

/** redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

/** styles */
import './index.scss';

class Home extends Component {
  state = {
    loading: true,
    sections: [],
    bannersLoading: true,
    banners: [],
    numItensOnSlider: 4
  };

  /** props */
  static propTypes = {
    updateGlobalLoading: PropTypes.func
  };

  static defaultProps = {};

  componentDidMount() {
    this.getData();
    this.getDataBanner();
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const { innerWidth: width } = window;
    console.log(width);

    if (width > 1000) {
      this.setState({ numItensOnSlider: 4 });
    } else if (width > 500) {
      this.setState({ numItensOnSlider: 3 });
    } else {
      this.setState({ numItensOnSlider: 2 });
    }
  }

  async getData() {
    this.props.updateGlobalLoading(true);

    const response = await api.post(
      servicesAPIs.homeLists,
      servicesAPIs.homeCredentials,
      servicesAPIs.homeConfig
    );

    const sections = response.data.ListSectionResult.Sections;

    this.setState({
      loading: false,
      sections
    });

    this.props.updateGlobalLoading(false);
  }

  async getDataBanner() {
    const { homeBannersUrl, homeBannersReqBody, homeConfig } = servicesAPIs;
    const response = await api.post(
      homeBannersUrl,
      homeBannersReqBody,
      homeConfig
    );
    const banners = response.data.ListBannerResult.Banners.map(item => ({
      id: item.Id,
      image: item.ImageURL,
      link: item.UniqueName
    }));

    banners.unshift({
      id: 0,
      link: '/assinatura',
      image: BannerFixo
    });

    this.setState({ banners, bannersLoading: false });
  }

  render() {
    const {
      loading,
      sections,
      banners,
      bannersLoading,
      numItensOnSlider
    } = this.state;

    return (
      <>
        <div className="home-wrapper">
          <Billboard list={banners} requestLoading={bannersLoading} />

          {loading || 1 ? (
            <>
              <MoviesListLoading />
              <MoviesListLoading />
              <MoviesListLoading />
            </>
          ) : (
            <>
              {sections.map((item, index) => (
                <MoviesList
                  numItensSekeleton={numItensOnSlider}
                  key={index}
                  section={item}
                />
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}

/*
  <HomeLoading numItensOnSlider={numItensOnSlider} />
*/

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoadingActions, dispatch);

const HomeMapped = connect(
  null,
  mapDispatchToProps
)(Home);

export default HomeMapped;
