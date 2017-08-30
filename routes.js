import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './ui/views/App';
import Home from './ui/views/Home';
import Travel from './ui/views/Travel';
import Registry from './ui/views/Registry';
import Rsvp from './ui/views/Rsvp';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='travel' component={Travel} />
    <Route path='registry' component={Registry} />
    <Route path='rsvp' component={Rsvp} />
    <Route path='*' component={Home} />
  </Route>
);
