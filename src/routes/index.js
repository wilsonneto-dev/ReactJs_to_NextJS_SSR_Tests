import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';

class Routes extends Component {
  render(){
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/sugestoes" component={ Suggestions } />
      </Switch>
    );
  }
}

export default Routes;
