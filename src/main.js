import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import MainLayout from './components/MainLayout';
import Helper from './routes/Helper';
import Option1 from './routes/Option1';
import './style/index';

import hotPatch from '../hot-patch';

// for hot reload
hotPatch(module);

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: MainLayout,
    indexRoute: { onEnter: (nextState, replace) => replace('/helper') },
    childRoutes: [
      Helper,
      Option1,
    ]
  }]
};


ReactDOM.render(
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
  , document.getElementById('main'));

