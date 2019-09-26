import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Loading from '../components/Loading';

/* layouts */
import Header from '../layout/Header';
import Socials from '../layout/Socials'

/* routers */
import Routes from '../routes';

function App() {
  return (
    <div>
      <Router>

        <Header />        
        <div class="box-sized">
          <Socials />

          <Routes />

        </div>

        <div>
          <Loading />
        </div>
      </Router>
    </div>
  );
}

export default App;
