import * as React from 'react';
import { render } from 'react-dom';
// import App from './components/app';

import * as Loadable from 'react-loadable';
import { LoadingSpinner } from './components/utilities/loading';
const Loading = () => <LoadingSpinner/>;

const App = Loadable({
  loader: () => import('./components/app'),
  loading: Loading,
});

render(<App />, document.getElementById('app'));