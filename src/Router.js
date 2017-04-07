import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import MainPage from './views/MainPage';
import Home from './views/Home';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
