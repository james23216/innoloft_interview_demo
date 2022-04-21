import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from '../App';
import Home from '../components/Home';
import Product from '../components/Product';

import store, {history} from '../stores/index';

var routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/product" component={Product}></Route>
      </Route>
    </Router>
  </Provider>
)

export default routes;
