//import {combineReducers,createStore} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer,drawerReducer} from '../reducers/Reducers';

export var configureStore = (initialState = {}) =>{
  var reducer= redux.combineReducers({
    authReducer: authReducer,
    drawerReducer: drawerReducer
  });

  var store = redux.createStore(
      reducer,
      initialState,
      redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f
      )
  );

  return store;
};
