import { ACTIONS } from '../util/constants';

const countdownState = {
  date: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  },
  loading: true
}

function countdownReducer(state = countdownState, action) {
  switch (action.type) {
    case ACTIONS.COUNTDOWN:
      return Object.assign({}, state, {
        date: action.time,
        loading: false
      });
    default:
      return state
  }
}

export default countdownReducer;
