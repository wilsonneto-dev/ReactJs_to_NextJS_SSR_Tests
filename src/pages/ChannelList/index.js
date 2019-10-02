import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

import api, { servicesAPIs } from '../../services/api';
import Shared from '../../configs/Shared';

/** redux */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoadingActions } from '../../store/ducks/loading';

import Loading from './components/Loading';

import './index.scss';

import iconArrowUp from '../../images/arrow-up.png';

class ChannelList extends Component {
  constructor(props) {
    super(props);

    this.state = { items : [] };
  }

  componentDidMount() {
    document.title = `Seu Cardápio Semanal - ${ Shared.defaultTitle }`;
    this.getData();
  }

  componentWillUnmount() {
    document.title = `${ Shared.defaultTitle }`;
  }

  async getData() {
    this.props.updateGlobalLoading(true);

    api.get(servicesAPIs.channelVideosList)
      .then(res => {
        const items = res.data.items.map( item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumb: item.snippet.thumbnails.high.url
        }));

        items.pop();
        this.setState({ items });

        this.props.updateGlobalLoading(false);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <SkeletonTheme className="skeleton" color="#ff7748" highlightColor="#f45728">
       <div className="channel-list-wrapper inner arrow">
          <Link to="/cardapio-semanal">
            <img src={ iconArrowUp } alt="Voltar" />
          </Link>
        </div>
        <div className="channel-list-wrapper inner">
          <ul>

            {
              items.length == 0 ? 
              <Loading /> :
              items.map((item, i) => (
                <li key={ i }>
                  <div className="video-wrapper">
                    <div className="image-wrapper">
                      <a target="_blank" rel="noopener noreferrer" href={ `https://www.youtube.com/watch?v=${item.id}` }>
                        <img alt={ item } src={ `https://img.youtube.com/vi/${item.id}/mqdefault.jpg` } />
                      </a>
                    </div>
                    <div className="text">
                      <h3>
                        <a target="_blank" rel="noopener noreferrer" href={ `https://www.youtube.com/watch?v=${item.id}` }>
                          { item.title }
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
      </SkeletonTheme>
    );
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(LoadingActions, dispatch);

export default connect(null, mapDispatchToProps)(ChannelList);