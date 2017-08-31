import { ACTIONS } from '../util/constants';
import * as firebase from 'firebase';

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
