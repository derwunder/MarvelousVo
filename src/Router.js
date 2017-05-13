import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import MainPage from './views/MainPage';
import Home from './views/Home';
import WordBoxes from './views/WordBoxes';
import UserPage from './views/UserPage';

class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainPage}>
          <IndexRoute component={Home}/>
        </Route>
        <Route path="/WordBoxes" component={UserPage}>
          <IndexRoute component={WordBoxes}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
