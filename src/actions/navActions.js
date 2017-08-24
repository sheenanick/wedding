import { ACTIONS } from '../util/constants';

export function toggleMenu() {
  return {
    type: ACTIONS.TOGGLE_MENU,
  }
}

export function toggleAudio() {
  return {
    type: ACTIONS.TOGGLE_AUDIO,
  }
}
