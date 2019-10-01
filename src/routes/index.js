import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';
import Subscription from '../pages/Subscription';
import AboutText from '../pages/AboutText';
import AboutMovie from '../pages/AboutMovie';
import Channel from '../pages/Channel';

class Routes extends Component {
  render(){
    return (
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/sugestoes" component={ Suggestions } />
          <Route path="/assinatura" component={ Subscription } />
          <Route path="/sobre" component={ AboutMovie } />
          <Route path="/sobre-texto" component={ AboutText } />
          <Route path="/cardapio-semanal" component={ Channel } />
        </Switch>
      </div>
    );
  }
}

export default Routes;
