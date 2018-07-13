'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as Loadable from 'react-loadable';
// import CommingSoon from './comming-soon';
import NoMatch from './no-match';

const Loading = () => <div>Loading...</div>;

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

const DoodlesSwitch = Loadable({
  loader: () => import('./doodles/doodles-switch'),
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

const InfoSwitch = Loadable({
  loader: () => import('./info/info-switch'),
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

class Routes extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/event" component={EventSwitch} />
            <Route path="/project" component={ProjectSwitch} />
            <Route path="/doodles" component={DoodlesSwitch} />
            <Route path="/comics" component={ComicsSwitch} />
            <Route path="/soundboard" component={SoundboardSwitch} />
            <Route path="/shop" component={ShopSwitch} />
            <Route path="/commission" component={CommissionSwitch} />
            <Route path="/info" component={InfoSwitch} />
            <Route path="/contact" component={ContactSwitch} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup/" component={SignupPage} />
            <Route path="/news" component={NewsSwitch} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/image" component={ImageSwitch} />
            <Route component={NoMatch}/>
          </Switch>
      </div>
    );
  }
}

export default Routes;