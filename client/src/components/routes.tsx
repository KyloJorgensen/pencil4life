'use strict';

import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Main = Loadable({
  loader: () => import('./main/main'),
  loading: Loading,
});

const LoginPage = Loadable({
  loader: () => import('./login/login-page'),
  loading: Loading,
});

class Routes extends React.Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login/" component={LoginPage} />
          </Switch>
      </div>
    );
  }
}

export default Routes;