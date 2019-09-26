import React, { Component } from 'react';
import api, { servicesAPIs } from '../../services/api';

import './index.scss';

class Suggestions extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      suggestions : []
    };

    this.getData = this.getData.bind(this);
  }

  async getData(){
    api.get( servicesAPIs.suggestions )
    .then( response => {
      this.setState({ suggestions : response.data });
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {});
  }

  componentDidMount()
  {
    this.getData();
  }

  render() {
    const { suggestions } = this.state;

    return (
      <>
        <section>
          <h1>Sugestões</h1>
          <p>
            Nossa equipe escolheu a dedo filmes do nosso catálogo para você assistir!
          </p>
        </section>
        {
          suggestions.map(item => (
            <div key={ item.id }>
              <div className="avatar-wrapper">
                <img src={ item.imageUrl } alt={ item.name } />
              </div>
              <h3>{ item.name }</h3>
              <h4>{ item.movieTitle }</h4>
              <p>{ item.description }</p>
            </div>
          ))
        }
      </>
    );
  }
}

export default Suggestions;