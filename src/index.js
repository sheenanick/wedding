import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from './reducers';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import './index.css';

const config = {
  apiKey: "AIzaSyBYoZ5RrEsZVY_LqzWPkg-XZfxdsrlLhk0",
  authDomain: "wondoland-ff841.firebaseapp.com",
  databaseURL: "https://wondoland-ff841.firebaseio.com",
  projectId: "wondoland-ff841",
  storageBucket: "wondoland-ff841.appspot.com",
  messagingSenderId: "31262030174"
};

firebase.initializeApp(config);

let store = createStore(appReducer);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} id='router' />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
