import React, { Component } from 'react';

import Shared from '../../configs/Shared';

import './index.scss';

class Channel extends Component {
  componentDidMount() {
    document.title = `Seu Cardápio Semanal - ${ Shared.defaultTitle }`;
  }

  componentWillUnmount() {
    document.title = `${ Shared.defaultTitle }`;
  }

  
  
  render() {
    return (
      <div className="channel-wrapper inner featured">
        <div className="side">
          <div className="vide-wrapper embed-container">
            <iframe src="https://www.youtube.com/embed/-n5sssemLDc" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        
        <div className="side">
          <div className="vide-wrapper embed-container">
            <iframe src="https://www.youtube.com/embed/-n5sssemLDc" frameborder="0" allowfullscreen></iframe>
          </div>
          
          <div className="vide-wrapper embed-container">
            <iframe src="https://www.youtube.com/embed/-n5sssemLDc" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>  
      </div>
    );
  }
}

export default Channel;