import { ACTIONS } from '../util/constants';

export function submitRsvp(rsvp) {
  loading();
  firebase.database().ref('rsvp').push(rsvp);
  return {
    type: ACTIONS.RSVP
  }
}

function loading() {
  return {
    type: ACTIONS.LOADING
  }
}
