import { ACTIONS } from '../util/constants';

const initialState = {
  showMenu: false,
  play: false,
}

function navReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU:
      return Object.assign({}, state, {
        showMenu: !state.showMenu
      });
    case ACTIONS.TOGGLE_AUDIO:
      return Object.assign({}, state, {
        play: !state.play
      });
    default:
      return state
  }
}

export default navReducer;
