'use strict';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import EventListener from './event-listener/event-listener';
import UserWrapper from './user/user-provider'
import ImageWrapper from './image/image-provider'
// import Header from './header/header';
// import Footer from './footer/footer';
import '../css/index.less';
import Routes from './routes';
import { NewsWrapper } from './news/news-provider';

const Loading = () => <div>Loading...</div>;

const Logo = Loadable({
  loader: () => import('./header/logo'),
  loading: Loading,
});

const Header = Loadable({
  loader: () => import('./header/header'),
  loading: Loading,
});

const Footer = Loadable({
  loader: () => import('./footer/footer'),
  loading: Loading,
});

const FooterBar = Loadable({
  loader: () => import('./footer/footer-bar'),
  loading: Loading,
});

class App extends React.Component {
  render() {
    return (
      <NewsWrapper>
        <UserWrapper>
          <ImageWrapper>
            <Router>
              <EventListener>
                <Logo/>
                <Header/>
                <Routes/>
                <Footer/>
                <FooterBar/>
              </EventListener>
            </Router>
          </ImageWrapper>
        </UserWrapper>      
     </NewsWrapper>
    );
  }
}

export default App;
