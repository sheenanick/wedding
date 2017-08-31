import { ACTIONS } from '../util/constants';

const initialState = {
  loading: false,
}

function rsvpReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return Object.assign({}, state, {
        loading: true
      });
    case ACTIONS.RSVP:
      return Object.assign({}, state, {
        loading: false
      });
    default:
      return state
  }
}

export default rsvpReducer;
