import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';
import Subscription from '../pages/Subscription';

class Routes extends Component {
  render(){
    return (
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/sugestoes" component={ Suggestions } />
          <Route path="/assinatura" component={ Subscription } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
