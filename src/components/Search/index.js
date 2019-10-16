import React, { Component, createRef } from 'react';

import { withRouter } from 'react-router-dom';

import './index.scss';

import iconSearch from '../../images/ic-search.png';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { textSearch: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { history } = this.props;
    const { textSearch } = this.state;
    e.preventDefault();

    const nextPage = `/search/${encodeURIComponent(textSearch)}`;
    history.push(nextPage);
  }

  render() {
    const { textSearch } = this.state;

    return <></>;
    /*
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            onChange={e => {
              this.setState({ textSearch: e.target.value });
            }}
            value={textSearch}
            type="text"
            placeholder="Filme, diretor, ator..."
            required
          />
          <input className="img" type="image" src={iconSearch} />
        </form>
      </>
    );
    */
  }
}

export default withRouter(Search);
