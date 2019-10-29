import React, { Component } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

/* slick slider */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import sliderSettings from './slick-slider-config';

import MoviesListLoadingItems from '../MoviesListLoading/Items';

import LazyImage from '../LazyImage';

import api, { servicesAPIs } from '../../services/api';

import './index.scss';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const {
      homeSectionMovies,
      homeSectionMoviesFilter,
      homeConfig
    } = servicesAPIs;

    const criteriaFilter = {
      Criteria: {
        MediaType: homeSectionMoviesFilter.Criteria.MediaType,
        SectionId: this.props.section.Id
      }
    };

    const response = await api.post(
      homeSectionMovies,
      { ...homeSectionMoviesFilter, ...criteriaFilter },
      homeConfig
    );

    const movies = response.data.FindMediaResult.Movies.map(item => ({
      id: item.Id,
      title: item.FullTitle,
      image: item.Images.find(image => image.TypeId == 1010),
      imdbId: item.ImdbId,
      url: item.Metadata.UniqueUrl,
      price: item.RentPrice
    }));

    this.setState({ loading: false, movies });
  }

  render() {
    const { numItensSekeleton } = this.props;
    const { Id: id, Name: name, Url: url } = this.props.section;
    const { loading, movies } = this.state;

    // skeleton items array
    let arrItemsSkeleton = [];
    for (let index = 0; index < numItensSekeleton; index++) {
      arrItemsSkeleton.push(index);
    }

    return (
      <>
        <section className="movies-list inner">
          <header>
            <h2 data-section-id={id}>{name}</h2>
          </header>
          <SkeletonTheme
            className="skeleton"
            color="#ff7748"
            highlightColor="#f45728"
          >
            {!loading ? (
              <Slider
                className={clsx('movies-slider', loading && 'loading')}
                {...sliderSettings}
              >
                {movies.map((item, index) => (
                  <div key={index} className="item">
                    <center>
                      <Link
                        to={{
                          pathname: `/detalhes/${item.id}/${item.url}`,
                          state: {
                            modal: true
                          }
                        }}
                      >
                        <div className="image-wrapper">
                          <LazyImage src={item.image.Url} alt={item.title} />
                        </div>
                      </Link>
                    </center>
                  </div>
                ))}
              </Slider>
            ) : (
              <MoviesListLoadingItems />
            )}
          </SkeletonTheme>
        </section>
      </>
    );
  }
}

export default MoviesList;
