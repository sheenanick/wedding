import moment from 'moment';
import { ACTIONS } from '../util/constants';
import { WEDDING_INFO } from '../weddingInfo.js';

export function countdown() {
  let sec = moment(WEDDING_INFO.date, 'YYYYMMDD hh:mm:ss').diff(moment()) / 1000;
  if (sec < 0){
    sec = 0;
  }
  const SEC_PER_DAY = 86400;
  const SEC_PER_HOUR = 3600;
  const SEC_PER_MIN = 60;

  const days = Math.floor(sec / SEC_PER_DAY);
  var remainder = sec % SEC_PER_DAY;

  const hours = Math.floor(remainder / SEC_PER_HOUR);
  remainder = remainder % SEC_PER_HOUR;

  const minutes = Math.floor(remainder / SEC_PER_MIN);
  remainder = remainder % SEC_PER_MIN;

  const seconds = Math.floor(remainder);

  const time = {
    days,
    hours,
    minutes,
    seconds,
  }

  return {
    type: ACTIONS.COUNTDOWN,
    time,
  }
}
