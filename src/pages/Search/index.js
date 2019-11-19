import React, { Component } from 'react';

import api, { servicesAPIs, defaultConfigAPIs } from '../../services/api';
import Shared from '../../configs/Shared';

/** redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

/** styles */
import './index.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: []
    };
  }

  componentDidMount() {}

  componentWillMount() {}

  async getData() {
    this.props.updateGlobalLoading(true);

    const response = await api.post(
      servicesAPIs.homeLists,
      servicesAPIs.homeCredentials,
      servicesAPIs.homeConfig
    );

    const sections = response.data.FindMediaResult.Movies;

    this.setState({
      loading: false,
      sections
    });

    this.props.updateGlobalLoading(false);
  }

  render() {
    const { loading, movies } = this.state;

    return <>Search...</>;
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoadingActions, dispatch);

const SearchMapped = connect(
  null,
  mapDispatchToProps
)(Search);

export default SearchMapped;
