import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {auth} from './firebase/constants';
import {configureStore} from './store/ConfigStore';
import {login,logout} from './actions/Actions';
import {startDLWordBoxes} from './actions/ActWordBox';
import {getUserEnableFReq,friendReqList,friendList} from './actions/ActUserBox';
import {hashHistory, location} from 'react-router';

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal600, teal800, tealA700,grey100, grey400, grey500,white, darkBlack} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Router from './Router';

var initialState ={
  regularReducer:{
    wbFavorite:false,
    wbGBoard:false,
    wbFBoard:false,
    wbSortBy:'aZ',
    wbSearch:'',
    wbgSortBy:'wordbox/boxName',
    wiBookmark:false,
    loginStat:false,
    userDataSearchable:false,
    userSearch:[],
    friendReq:[],
    friendList:[],
    w8Global:false,
    w8GlobalMore:false,
    numIGlobal:false
  }
};
var store = configureStore(initialState);


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal600,
    primary2Color: teal800,
    primary3Color: grey400,
    accent1Color: tealA700,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white
  }
});

//var userData ={uid:'user.uid',email:'user.email'};
//store.dispatch(login(userData));
 auth.onAuthStateChanged(function(user){
   var auxPhoto="https://firebasestorage.googleapis.com/v0/b/thamcook.appspot.com/o/images%2FScreenshot_20170302-203202.png?alt=media&token=3c589ec6-cab6-43ec-b4b4-38d502d8c079";

   var location=(window.location.href);
   var indexLoc=location.indexOf('/#/') ;
   var routeLoc=location.substring(indexLoc);

  if(user){
    var userData ={uid:user.uid,
        email:user.email,
        displayName:user.displayName!==null?user.displayName:(user.email).substring(0, 9)+"...",
        photoURL:user.photoURL!==null?user.photoURL:auxPhoto,
        provider:user.providerData[0]['providerId']
      };
        console.log(user);
    //console.log(user);
    store.dispatch(login(userData));
    store.dispatch(startDLWordBoxes());
    store.dispatch(getUserEnableFReq());
    store.dispatch(friendReqList());
    store.dispatch(friendList());


    if(routeLoc==='/#/'){
      console.log('u are about to redirect');
      hashHistory.replace('/WordBoxes');
    }
    else{ console.log('u can stay in that route LGon');}


    //store.dispatch(startAddTodos());
    //hashHistory.replace('/WordBoxes'); //this should be an action "Edit Mode"
  }else{
    store.dispatch(logout());
    if(routeLoc!=='/#/'){
      console.log('u are about to redirect');
      hashHistory.replace('/');
    }
    else{ console.log('u can stay in that route LGoff');}
    //hashHistory.replace('/');  //this should be an action "Exit Edit Mode"
  }
});


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}><Router/></MuiThemeProvider>
</Provider>,
  document.getElementById('root')
);
