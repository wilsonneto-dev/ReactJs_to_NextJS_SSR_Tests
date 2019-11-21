import React, { Component, createRef } from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';

import iconSearch from '../../images/ic-search.png';

import './index.scss';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { open: true };
    this.refInput = createRef();
  }

  handleSearch() {
    const { onSearch } = this.props;
    const history = this.props.history;
    const textToSearch = encodeURI(this.refInput.current.value);

    if (textToSearch) {
      const url = `/search/${textToSearch}`;
      if (onSearch) onSearch();
      history.push(url);
    }
  }

  render() {
    return (
      <span
        className={clsx('header-search', this.state.open && 'closed')}
        onClick={e => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          placeholder="Busca, filmes..."
          type="text"
          ref={this.refInput}
          id="header-search-field"
          onKeyDown={e => {
            if (e.key === 'Enter' && this.refInput.current.value.length > 0)
              this.handleSearch();
          }}
        />
        <img
          className="icon"
          src={iconSearch}
          onClick={() => {
            this.handleSearch();
          }}
        />
      </span>
    );
  }
}

export default withRouter(Search);
