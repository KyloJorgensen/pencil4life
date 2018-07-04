'use strict';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import EventListener from './event-listener/event-listener';
import UserWrapper from './user/user-provider'
import Header from './header/header';
import Footer from './footer/footer';
import Routes from './routes';

class App extends React.Component {
  render() {
    return (
      <UserWrapper>
        <EventListener>
          <Router>
            <div>
            <Header/>
            <Routes/>
            <Footer/>
            </div>
          </Router>
        </EventListener>
    </UserWrapper>      
    );
  }
}

export default App;
