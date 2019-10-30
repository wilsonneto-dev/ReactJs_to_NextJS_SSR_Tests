import React, { Component } from 'react';
import api, { servicesAPIs } from '../../services/api';
import LoadingSuggestions from './components/LoadingSuggestions';
import { SkeletonTheme } from 'react-loading-skeleton';

import Shared from '../../configs/Shared';

import background from '../../utils/background';
import imageBackground from '../../images/bg-suggestions.png';

import LazyImage from '../../components/LazyImage';

import './index.scss';

/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

class Suggestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    };
  }

  componentDidMount() {
    document.title = `Sugestões - ${Shared.defaultTitle}`;
    background.set(imageBackground);
    this.getData();
  }

  componentWillUnmount() {
    document.title = `${Shared.defaultTitle}`;
    background.clear(imageBackground);
  }

  async getData() {
    this.props.updateGlobalLoading(true);

    api.get(servicesAPIs.suggestions).then(response => {
      this.setState({ suggestions: response.data });
      this.props.updateGlobalLoading(false);
    });
  }

  render() {
    const { suggestions } = this.state;

    return (
      <div className="inner">
        <section className="header">
          <h1>Sugestões {this.props.loading && '...'}</h1>
          <p>
            Nossa equipe escolheu a dedo
            <br /> filmes incríveis do nosso catálogo
            <br /> para você assistir!
          </p>
        </section>

        <SkeletonTheme
          className="skeleton"
          color="#ff7748"
          highlightColor="#f45728"
        >
          <section className="suggestions">
            {suggestions.length === 0 ? (
              <LoadingSuggestions />
            ) : (
              suggestions.map(item => (
                <div className="item" key={item.id}>
                  <div className="avatar-wrapper">
                    <LazyImage src={item.imageUrl} alt={item.name} />
                  </div>
                  <h3>{item.name}</h3>
                  {item.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h4>{link.title}</h4>
                    </a>
                  ))}
                  <p>{item.description}</p>
                </div>
              ))
            )}
          </section>
        </SkeletonTheme>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoadingActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Suggestions);

/*
  <a
    key={index}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h4>{link.title}</h4>
  </a>
*/
