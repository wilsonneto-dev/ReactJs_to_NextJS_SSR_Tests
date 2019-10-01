import React, { Component } from 'react';
import api, { servicesAPIs } from '../../services/api';
import LoadingSuggestions from "./components/LoadingSuggestions";
import { SkeletonTheme } from 'react-loading-skeleton';

import Shared from '../../configs/Shared';

import './index.scss';

/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

class Suggestions extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      suggestions : []
    };

    this.getData = this.getData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount()
  {
    document.title = `Sugestões - ${ Shared.defaultTitle }`;
    this.getData();
  }

  componentWillUnmount() {
    document.title = `${ Shared.defaultTitle }`;
  }

  async getData(){
    this.props.updateGlobalLoading(true);
    
    api.get( servicesAPIs.suggestions )
    .then( response => {
      this.setState({ suggestions : response.data });
      this.props.updateGlobalLoading(false);
    })
    .catch(error => {})
    .finally( () => {});
  }

  render() {
    const { suggestions } = this.state;

    return (
      <div className="inner">
        <section className="header">
          <h1>Sugestões { this.props.loading && '...' }</h1>
          <p>
            Nossa equipe escolheu a dedo filmes incríveis do nosso catálogo para você assistir!
          </p>
        </section>
        
        <SkeletonTheme className="skeleton" color="#ff7748" highlightColor="#f45728">
          <section className="suggestions">
            { 
              suggestions.length === 0 ? <LoadingSuggestions /> :
              suggestions.map(item => (
                <div className="item" key={ item.id }>
                  <div className="avatar-wrapper">
                    <img src={ item.imageUrl } alt={ item.name } />
                  </div>
                  <h3>{ item.name }</h3>
                  <h4>{ item.movieTitle }</h4>
                  <p>{ item.description }</p>
                </div>
              ))
            }
          </section>
        </SkeletonTheme>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(LoadingActions, dispatch);

export default connect(null, mapDispatchToProps)(Suggestions);