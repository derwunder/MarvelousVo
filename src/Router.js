import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {auth} from './firebase/constants';

import MainPage from './views/MainPage';
import Home from './views/Home';
import WordBoxes from './views/WordBoxes';
import UserPage from './views/UserPage';
import WordList from './views/WordList';
import MyLearning from './views/MyLearning';
import FriendList from './views/FriendList';
import FriendBoard from './views/FriendBoard';
import GlobalBoard from './views/GlobalBoard';



var requireLogin = (nextState,replace,next)=>{
  console.log("value view: "+auth.currentUser);
 if(!auth.currentUser){
   replace('/');
 }
   next();
};
var requireLogout = (nextState,replace,next)=>{
 console.log("value view: "+auth.currentUser);
 if(auth.currentUser){
   replace('/WordBoxes');
   console.log("value view in: "+auth.currentUser);

 }
   next();
};

class Routes extends Component {

  render() {


    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainPage} >
          <IndexRoute component={Home} />
        </Route>
        <Route path="/WordBoxes" component={UserPage} >
          <IndexRoute component={WordBoxes}/>
          <Route path="/WordBoxes/:wordListN" component={WordList}/>
          <Route path="/MyLearning" component={MyLearning}/>
          <Route path="/FriendBoard" component={FriendBoard}/>
          <Route path="/FriendList" component={FriendList}/>
          <Route path="/GlobalBoard" component={GlobalBoard}/>
        </Route>
      </Router>
    );
  }
}

export default Routes;
