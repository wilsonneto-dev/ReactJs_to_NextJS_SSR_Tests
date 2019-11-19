import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Suggestions from '../pages/Suggestions';
import Subscription from '../pages/Subscription';
import AboutText from '../pages/AboutText';
import AboutVideo from '../pages/AboutVideo';
import Channel from '../pages/Channel';
import ChannelList from '../pages/ChannelList';
import MovieDetails from '../pages/MovieDetails';
import Comming from '../pages/Comming';
import Search from '../pages/Search';

class SwitchRoutes extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.props;

    let isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div className="main-content">
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path="/" component={Home} />
          <Route path="/detalhes" component={Home} />
          <Route exact path="/home" component={Home} />

          <Route path="/sugestoes" component={Suggestions} />
          <Route path="/assinatura" component={Subscription} />
          <Route path="/sobre" component={AboutVideo} />
          <Route path="/sobre-texto" component={AboutText} />
          <Route path="/cardapio-semanal" component={Comming} />
          <Route path="/cardapio-lista" component={Comming} />
          <Route path="/search/:search" component={Search} />
        </Switch>
        <Route path="/detalhes/:id/:slug" component={MovieDetails} />
      </div>
    );
  }
}

export default SwitchRoutes;
