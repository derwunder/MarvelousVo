//import {combineReducers,createStore} from 'redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import {authReducer,regularReducer,wordBoxesReducer,gWordBoxesReducer} from '../reducers/Reducers';

import { createStore, applyMiddleware, compose } from 'redux';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxPromise)));

export var configureStore = (initialState = {}) =>{
  var reducer= redux.combineReducers({
    authReducer: authReducer,
    regularReducer: regularReducer,
    wordBoxesReducer: wordBoxesReducer,
    gWordBoxesReducer:gWordBoxesReducer
  });

  /*var store = redux.createStore(
      reducer,
      initialState,
      redux.compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(): f=>f,
        redux.applyMiddleware(thunk)
      )
  );*/

  var store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  //var store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};

/*import { createStore, applyMiddleware } from 'redux';
 import { createStore, applyMiddleware, compose } from 'redux';

 const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxPromise)));

 <Provider store={createStoreWithMiddleware(reducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}> <Router history = {browserHistory} routes={routes}/> </Provider>
<Provider store={store}> <Router history = {browserHistory} routes={routes}/> </Provider>

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);

export const store = createStoreWithMiddleware(reducer);*/
