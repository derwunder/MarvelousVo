import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {auth} from './firebase/constants';

import MainPage from './views/MainPage';
import Home from './views/Home';
import WordBoxes from './views/WordBoxes';
import UserPage from './views/UserPage';
import UserProfile from './views/UserProfile';
import WordList from './views/WordList';
import WordListAll from './views/WordListAll';
import MyLearning from './views/MyLearning';
import FriendList from './views/FriendList';
import FriendBoard from './views/FriendBoard';
import GlobalBoard from './views/GlobalBoard';
import GlobalPage from './views/GlobalPage';
import GlobalBoardWordBox from './views/GlobalBoardWordBox';



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
 }
   next();
};



class Routes extends Component {

  render() {


    return (
      <Router history={hashHistory}>
        <Route path="/" component={MainPage}  //onEnter={requireLogout}
        >
          <IndexRoute component={Home} />
        </Route>
        <Route path="/WordBoxes" component={UserPage} //onEnter={requireLogin}
        >
          <IndexRoute component={WordBoxes}/>
          <Route path="/Profile" component={UserProfile} />
          <Route path="/WordBoxes/:wordListN" component={WordList} />
          <Route path="/AllWords" component={WordListAll}/>
          <Route path="/MyLearning" component={MyLearning}/>
          <Route path="/FriendBoard" component={FriendBoard}/>
          <Route path="/FriendList" component={FriendList}/>
        </Route>
        <Route path="/GlobalBoard" component={GlobalPage} //onEnter={requireLogin}
        >
          <IndexRoute component={GlobalBoard} />
          <Route path="/GlobalBoard/:wordboxId" component={GlobalBoardWordBox} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
