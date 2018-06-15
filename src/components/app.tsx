'use strict';

import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <HashRouter>
          <Routes/>
        </HashRouter>
      </div>    
    );
  }
}

export default App;
