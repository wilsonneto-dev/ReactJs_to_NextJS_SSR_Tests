import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Loading from '../components/Loading';

/* layouts */
import Header from '../layout/Header';
import Socials from '../layout/Socials'

/* routers */
import Routes from '../routes';

function App() {
  let [state] = useState({ loading: false });
  
  return (
    <div>
      <Router>
        
        <Header />        
        <div className="box-sized mobile-margin-top">
          <Socials />

          <Routes />

        </div>

        <div>
          { state.loading && <Loading /> }
        </div>
      </Router>
    </div>
  );
}

export default App;
