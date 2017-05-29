import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {auth} from './firebase/constants';
import {configureStore} from './store/ConfigStore';
import {login,logout} from './actions/Actions';
import {startDLWordBoxes} from './actions/ActWordBox';
import {hashHistory} from 'react-router';

import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal600, teal800, tealA700,grey100, grey400, grey500,white, darkBlack} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Router from './Router';

var store = configureStore({regularReducer:{wordBoxEditorOpen:false}});


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
  if(user){
    var userData ={uid:user.uid,
        email:user.email,
        displayName:user.displayName,
        photoURL:user.photoURL};
    //console.log("User UID: "+JSON.stringify(user));
    store.dispatch(login(userData));
    store.dispatch(startDLWordBoxes());
    //store.dispatch(startAddTodos());
    //hashHistory.replace('/WordBoxes'); //this should be an action "Edit Mode"
  }else{
    store.dispatch(logout());
    //hashHistory.replace('/');  //this should be an action "Exit Edit Mode"
  }
});


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}><Router/></MuiThemeProvider>
</Provider>,
  document.getElementById('root')
);
