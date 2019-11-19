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
    const history = this.props.history;

    const textToSearch = encodeURI(this.refInput.current.value);
    const url = `/search/${textToSearch}`;
    history.push(url);
  }

  render() {
    return (
      <span className={clsx('header-search', this.state.open && 'closed')}>
        <input
          className="input"
          placeholder="Pesquisa..."
          type="text"
          ref={this.refInput}
          onKeyDown={e => {
            if (e.key === 'Enter' && this.refInput.current.value.length > 0)
              this.handleSearch();
          }}
        />
        <img
          className="icon"
          src={iconSearch}
          onClick={() => {
            this.setState({ open: !this.state.open });
          }}
        />
      </span>
    );
  }
}

export default withRouter(Search);
