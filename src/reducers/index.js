import { combineReducers } from 'redux';
import countdownReducer from './countdownReducer';
import navReducer from './navReducer';

const appReducer = combineReducers({
  countdownState: countdownReducer,
  navState: navReducer
});

export default appReducer;
