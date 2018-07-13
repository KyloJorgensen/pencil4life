import * as React from 'react';
import { render } from 'react-dom';
// import App from './components/app';

import * as Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;

const App = Loadable({
  loader: () => import('./components/app'),
  loading: Loading,
});

render(<App />, document.getElementById('app'));