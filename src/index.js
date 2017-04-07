import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {configureStore} from './store/ConfigStore';
import {login} from './actions/Actions';

//import App from './App';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { teal600, teal800, tealA700,
  grey100, grey400, grey500,
  white, darkBlack} from 'material-ui/styles/colors';

import Router from './Router';

var store = configureStore();

//store.dispatch(action()); to Initial some
var userData ={uid:'user.uid',email:'user.email'};

store.dispatch(login(userData));

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

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}><Router/></MuiThemeProvider>
</Provider>,
  document.getElementById('root')
);
