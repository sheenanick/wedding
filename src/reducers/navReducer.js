import { ACTIONS } from '../util/constants';

const initialState = {
  showMenu: false,
}

function navReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU:
      return Object.assign({}, state, {
        showMenu: !state.showMenu
      });
    default:
      return state
  }
}

export default navReducer;
