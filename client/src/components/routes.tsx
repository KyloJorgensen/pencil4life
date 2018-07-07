'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as Loadable from 'react-loadable';

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

class Routes extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login/" component={LoginPage} />
            <Route path="/signup/" component={SignupPage} />
            <Route path="/event/" component={EventSwitch} />
            <Route path="/news/" component={NewsSwitch} />
          </Switch>
      </div>
    );
  }
}

export default Routes;