'use strict';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import EventListener from './event-listener/event-listener';
import UserWrapper from './user/user-provider'
import Header from './header/header';
import Footer from './footer/footer';
import Routes from './routes';
import { NewsWrapper } from './news/news-provider';

class App extends React.Component {
  render() {
    return (
      <NewsWrapper>
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
    </NewsWrapper>
    );
  }
}

export default App;
