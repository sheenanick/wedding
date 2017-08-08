import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import navReducer from './reducers/navReducer';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let store = createStore(navReducer)

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} id='router' />
  </Provider>,
  document.querySelector('#app')
);
