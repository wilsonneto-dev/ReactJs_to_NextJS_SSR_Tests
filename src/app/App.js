import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* redux */
import { Provider } from 'react-redux';
import store from '../store';

import Loading from '../components/Loading';

/* layouts */
import Header from '../layout/Header';
import Socials from '../layout/Socials';

/* routers */
import SwitchRoutes from '../routes';

/* images to preload */
import imageBackgroundSuggestions from '../images/bg-suggestions.png';
import imageBackgroundSubscription from '../images/bg-subscription.png';
import imageBackgroundAbout from '../images/bg-about.png';

import preloadImage from '../utils/preloadImage';

function App() {
  useEffect(() => {
    /* page backgrounds preloading */
    preloadImage(imageBackgroundSuggestions, () => {});
    preloadImage(imageBackgroundSubscription, () => {});
    preloadImage(imageBackgroundAbout, () => {});
  }, []);

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <div id="body-fix-background-layer"></div>
          <div id="body-fix-background-layer-gradient"></div>
          <div className="box-sized mobile-margin-top">
            <Socials />

            <Route component={SwitchRoutes} />
          </div>

          <div>
            <Loading />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
