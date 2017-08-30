import wedding from '../img/icons/home.png';
import travel from '../img/icons/plane.png';
import registry from '../img/icons/gift.png';
import rsvp from '../img/icons/mail.png';

export const ACTIONS = {
  TOGGLE_MENU: 'TOGGLE_MENU',
  TOGGLE_AUDIO: 'TOGGLE_AUDIO',
  COUNTDOWN: 'COUNTDOWN',
  LOADING: 'LOADING',
  RSVP: 'RSVP'
}

export const MENU = {
  HOME: {
    path: '/',
    label: 'wedding',
    img: wedding
  },
  TRAVEL: {
    path: '/travel',
    label: 'travel',
    img: travel
  },
  REGISTRY: {
    path: '/registry',
    label: 'registry',
    img: registry
  },
  RSVP: {
    path: '/rsvp',
    label: 'rsvp',
    img: rsvp
  },
}
