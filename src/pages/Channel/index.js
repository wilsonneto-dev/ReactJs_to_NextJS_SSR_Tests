import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api, { servicesAPIs } from '../../services/api';
import Shared from '../../configs/Shared';

/* redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

/* style */
import './index.scss';

/* resources */
import iconArrowDown from '../../images/arrow-down.png';

class Channel extends Component {
  constructor(props) {
    super(props);

    this.state = { channelVideos: [] };
  }

  componentDidMount() {
    document.title = `Seu Cardápio Semanal - ${ Shared.defaultTitle }`;
    this.getData();
  }

  componentWillUnmount() {
    document.title = `${ Shared.defaultTitle }`;
  }

  getData() {
    this.props.updateGlobalLoading(true);

    api.get(servicesAPIs.channelVideos)
      .then(res => {

        // get videos from youtube
        const channelVideos = res.data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumb: item.snippet.thumbnails.high
        }));

        // update state
        this.setState({ channelVideos });

        this.props.updateGlobalLoading(false);
      });
  }
  
  render() {
    const { channelVideos } = this.state; 

    return (
      <>
        <div className="channel-wrapper inner featured">
          <div className="side">
            <div className="video-wrapper embed-container animated-background">
              { 
                channelVideos[0] && 
                <iframe src={ `https://www.youtube.com/embed/${channelVideos[0].id}` } frameBorder="0" allowFullScreen></iframe>
              }
            </div>
          </div>
          
          <div className="side">
              <div className="video-wrapper">
                <div className="embed-container animated-background">
                  { 
                    channelVideos[1] && 
                    <iframe src={ `https://www.youtube.com/embed/${channelVideos[1].id}` } frameBorder="0" allowFullScreen></iframe>
                  }
                </div>
              </div>
            
              <div className="video-wrapper">
                <div className="embed-container animated-background">
                  { 
                    channelVideos[2] && 
                    <iframe src={ `https://www.youtube.com/embed/${channelVideos[2].id}` } frameBorder="0" allowFullScreen></iframe>
                  }
                </div>
              </div>
          </div>  
        </div>
        <div className="channer-wrapper arrow-wrapper inner">
          <Link to="/cardapio-lista">
            <img src={ iconArrowDown } alt="Ver lista completa" />
          </Link>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(LoadingActions, dispatch);

export default connect(null, mapDispatchToProps)(Channel);