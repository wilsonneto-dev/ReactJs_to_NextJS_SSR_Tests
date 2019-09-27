import React, { Component } from 'react';

/* redux */
import { connect } from 'react-redux';
// GlobalLoading

/* style */
import './index.scss';

class Loading extends Component {
  render() {
    const { loading } = this.props;
    
    return (
      <>
        { loading && <div className="loader"></div> } 
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.GlobalLoading.loading
});

export default connect(mapStateToProps)(Loading);