'use strict';

import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import * as Loadable from 'react-loadable';
// import EventListener from './event-listener/event-listener';
import UserWrapper from './user/user-provider'
import ImageWrapper from './image/image-provider'
// import Header from './header/header';
// import Footer from './footer/footer';
import '../css/index.less';
import Routes from './routes';
import { NewsWrapper } from './news/news-provider';
import styled from 'styled-components';

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

const PageLayout = styled.div`
  height: 100%;
  width: 100%;
  > div {
    display: grid;
    grid-template-rows: auto auto 1fr;
    height: 100%;
  }
`;

class App extends React.Component {
  render() {
    return (
      <NewsWrapper>
        <UserWrapper>
          <ImageWrapper>
            <Router>
              <PageLayout>
                <Logo/>
                <Header/>
                <Routes/>
                <Footer/>
                <FooterBar/>
              </PageLayout>
            </Router>
          </ImageWrapper>
        </UserWrapper>      
     </NewsWrapper>
    );
  }
}

export default App;
