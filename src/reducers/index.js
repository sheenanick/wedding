import { combineReducers } from 'redux';
import countdownReducer from './countdownReducer';
import navReducer from './navReducer';
import rsvpReducer from './rsvpReducer';

const appReducer = combineReducers({
  countdownState: countdownReducer,
  navState: navReducer,
  rsvpState: rsvpReducer
});

export default appReducer;
