import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api, { servicesAPIs, defaultConfigAPIs } from '../../services/api';
import Shared from '../../configs/Shared';

/** Components */
import Billboard from '../../components/Billboard';
import MoviesList from '../../components/MoviesList';
import HomeLoading from './components/HomeLoading';

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
    banners: []
  };

  /** props */
  static propTypes = {
    updateGlobalLoading: PropTypes.func
  };

  static defaultProps = {};

  componentDidMount() {
    this.getData();
    this.getDataBanner();
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
    this.setState({ banners, bannersLoading: false });
  }

  render() {
    const { loading, sections, banners, bannersLoading } = this.state;

    return (
      <>
        <div className="home-wrapper">
          <Billboard list={banners} requestLoading={bannersLoading} />

          {loading ? (
            <HomeLoading />
          ) : (
            <>
              {sections.map((item, index) => (
                <MoviesList key={index} section={item} />
              ))}
            </>
          )}
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoadingActions, dispatch);

const HomeMapped = connect(
  null,
  mapDispatchToProps
)(Home);

export default HomeMapped;
