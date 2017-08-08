import React from 'react';
import ReactDom from 'react-dom';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./stylesheets/app.scss');
require('./stylesheets/home.scss');
require('./stylesheets/travel.scss');
require('./stylesheets/registry.scss');
require('./stylesheets/rsvp.scss');

ReactDom.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#app')
);
