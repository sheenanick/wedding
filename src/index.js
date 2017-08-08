import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

let store = createStore(appReducer);

render (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} id='router' />
  </Provider>,
  document.querySelector('#app')
);
