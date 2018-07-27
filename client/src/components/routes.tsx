'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as Loadable from 'react-loadable';
// import CommingSoon from './comming-soon';
import NoMatch from './no-match';

import { LoadingSpinner } from './utilities/loading';
import styled from 'styled-components';
const Loading = () => <LoadingSpinner/>;

const HomePage = Loadable({
  loader: () => import('./home/homepage'),
  loading: Loading,
});

const LoginPage = Loadable({
  loader: () => import('./login/login-page'),
  loading: Loading,
});

const SignupPage = Loadable({
  loader: () => import('./signup/signup-page'),
  loading: Loading,
});

const EventSwitch = Loadable({
  loader: () => import('./event/event-switch'),
  loading: Loading,
});

const NewsSwitch = Loadable({
  loader: () => import('./news/news-switch'),
  loading: Loading,
});

const ProjectSwitch = Loadable({
  loader: () => import('./project/project-switch'),
  loading: Loading,
});

const DoodleSwitch = Loadable({
  loader: () => import('./doodle/doodle-switch'),
  loading: Loading,
});

const ComicsSwitch = Loadable({
  loader: () => import('./comics/comics-switch'),
  loading: Loading,
});

const SoundboardSwitch = Loadable({
  loader: () => import('./soundboard/soundboard-switch'),
  loading: Loading,
});

const ShopSwitch = Loadable({
  loader: () => import('./shop/shop-switch'),
  loading: Loading,
});

const CommissionSwitch = Loadable({
  loader: () => import('./commission/commission-switch'),
  loading: Loading,
});

const AboutSwitch = Loadable({
  loader: () => import('./about/about-switch'),
  loading: Loading,
});

const ContactSwitch = Loadable({
  loader: () => import('./contact/contact-switch'),
  loading: Loading,
});

const ProfilePage = Loadable({
  loader: () => import('./profile/profile-switch'),
  loading: Loading,
});

const ImageSwitch = Loadable({
  loader: () => import('./image/image-switch'),
  loading: Loading,
});

const RoutesWrapper = styled.div`
  padding-bottom: 3em;
  margin: 5px;
`;

class Routes extends React.Component {
  render() {
    return (
      <RoutesWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/event" component={EventSwitch} />
            <Route path="/project" component={ProjectSwitch} />
            <Route path="/doodle" component={DoodleSwitch} />
            <Route path="/comics" component={ComicsSwitch} />
            <Route path="/soundboard" component={SoundboardSwitch} />
            <Route path="/shop" component={ShopSwitch} />
            <Route path="/commission" component={CommissionSwitch} />
            <Route path="/about" component={AboutSwitch} />
            <Route path="/contact" component={ContactSwitch} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup/" component={SignupPage} />
            <Route path="/news" component={NewsSwitch} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/image" component={ImageSwitch} />
            <Route component={NoMatch}/>
          </Switch>
      </RoutesWrapper>
    );
  }
}

export default Routes;