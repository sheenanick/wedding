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
  apiKey: "AIzaSyCdR5ueh6h6GoszbaJBk1iwY4caFsKjqbY",
  authDomain: "rsvp-c7982.firebaseapp.com",
  databaseURL: "https://rsvp-c7982.firebaseio.com",
  projectId: "rsvp-c7982",
  storageBucket: "rsvp-c7982.appspot.com",
  messagingSenderId: "386937487109"
};

firebase.initializeApp(config);

let store = createStore(appReducer);

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} id='router' />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
