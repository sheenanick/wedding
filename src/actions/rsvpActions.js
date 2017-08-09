import { ACTIONS } from '../util/constants';

export function submitRsvp() {
  loading();
  //TODO save to firebase, then:
  return {
    type: ACTIONS.RSVP
  }

}

function loading() {
  return {
    type: ACTIONS.LOADING
  }
}
