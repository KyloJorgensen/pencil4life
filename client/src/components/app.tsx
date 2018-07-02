'use strict';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Event from './event-listener/event-listener';
import UserWrapper from './user/user-provider'
import Header from './header/header';
import Footer from './footer/footer';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <UserWrapper>
        <Event>
          <Router>
            <div>
            <Header/>
            <Routes/>
            <Footer/>
            </div>
          </Router>
        </Event>
    </UserWrapper>      
    );
  }
}

export default App;
