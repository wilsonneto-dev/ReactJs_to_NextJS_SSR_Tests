import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';

class Routes extends Component {
  render(){
    return (
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/sugestoes" component={ Suggestions } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
