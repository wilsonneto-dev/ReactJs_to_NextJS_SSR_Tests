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
    sections: []
  };

  /** props */
  static propTypes = {
    updateGlobalLoading: PropTypes.func
  }

  static defaultProps = {};

  componentDidMount() {
    this.getData();
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

  render(){
    const { loading, sections } = this.state;

    return(
      <>
        <div className="home-wrapper">
          <Billboard />

          {
            loading ? <HomeLoading /> :
            <>
              {sections.map((item, index) => (
                <MoviesList key={index} section={item} />
              ))}
            </>
          }

        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(LoadingActions, dispatch);

const HomeMapped = connect(null, mapDispatchToProps)(Home);

export default HomeMapped;