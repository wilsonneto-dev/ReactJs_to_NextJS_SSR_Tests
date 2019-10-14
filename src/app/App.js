import React from 'react';
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

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
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
