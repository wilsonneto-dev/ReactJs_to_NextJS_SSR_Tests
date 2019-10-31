import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import preloadImage from '../../utils/preloadImage';

import api from '../../services/api';
import apiSettings from './api-settings';
import Shared from '../../configs/Shared';

import Loading from './components/Loading';

import './index.scss';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      loading: true,
      trailerView: false
    };
    this.bgImage = createRef();
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const { id, slug } = this.props.match.params;

    const criteria = { MediaType: 10, MediaId: id };
    const apiAuthTicket = { AuthenticationTicket: Shared.AuthenticationTicket };

    const response = await api.post(
      apiSettings.url,
      {
        ...apiAuthTicket,
        ...apiSettings.filter,
        Criteria: criteria
      },
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    const movies = response.data.FindMediaResult.Movies.map(item => ({
      id: item.Id,
      title: item.FullTitle,
      image: item.Images.find(image => image.TypeId == -2).Url,
      imageLarger: item.Images.find(image => image.TypeId == 4001).Url,
      url: item.Metadata.UniqueUrl,
      actors: item.Metadata.Actors.map(actor => actor.Name).join(', '),
      country: item.Metadata.Country,
      text: item.Metadata.Synopsis,
      curiosities: item.Metadata.Description,
      direction: item.Metadata.Directors.map(actor => actor.Name).join(', '),
      genre: item.Metadata.Genres.map(actor => actor.Name).join(', '),
      year: item.Metadata.Year,
      duration: item.FileInfo.Duration,
      trailer: item.Metadata.TrailerUrl
    }));

    const [movie] = movies;
    console.log(movie);

    this.setState({
      loading: false,
      movie
    });

    preloadImage(movie.imageLarger, success => {
      if (this.bgImage.current != null) {
        this.bgImage.current.style.backgroundImage = `url('${movie.imageLarger}')`;
        this.bgImage.current.style.opacity = 1;
      }
    });
  }

  historyBack = () => {
    const { history } = this.props;
    if (history.length < 4) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  render() {
    const modal = true;
    const { loading, movie, trailerView } = this.state;

    return (
      <div className="movie-details modal">
        <div className="content">
          <div ref={this.bgImage} className="bg-image"></div>
          <div className="bg-layer">
            <div className="btn-close" onClick={this.historyBack}>
              x
            </div>

            <div className="inner-content">
              {loading ? (
                <Loading />
              ) : (
                <>
                  {!trailerView ? (
                    <>
                      <span className="infos">
                        {movie.country} <strong>{movie.year}</strong>{' '}
                        {movie.duration}
                        min. &nbsp;
                        <strong>{movie.genre}</strong> &nbsp; Direção
                        <strong>{movie.direction}</strong>
                      </span>

                      <h1>{movie.title}</h1>

                      <p>{movie.text}</p>
                      <p className="curiosities">
                        <span className="title">Curiosidades: </span>
                        {movie.curiosities}
                      </p>

                      <div className="plays">
                        <a
                          href={`${Shared.platformHost}/History/Play?d=0&m=${movie.id}&RedirectUrl=/subscription/belasartes`}
                        >
                          <div className="play-wrapper btn-wrapper">
                            <div className="play">
                              <span></span>
                            </div>
                            <span>Assista agora</span>
                          </div>
                        </a>

                        <div
                          className="play-wrapper btn-wrapper"
                          onClick={() => {
                            this.setState({ trailerView: true });
                          }}
                        >
                          <div className="play">
                            <span></span>
                          </div>
                          <span>Por que assistir?</span>
                        </div>
                      </div>

                      <div className="actors">
                        <strong>Elenco: </strong>
                        <span>{movie.actors}</span>
                      </div>
                    </>
                  ) : (
                    <div ref={this.trailerWrap} className="trailer-wrap">
                      <div
                        className="btn-close"
                        onClick={() => this.setState({ trailerView: false })}
                      >
                        x
                      </div>
                      <video src={movie.trailer} autoPlay controls></video>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
