import React, { Component } from 'react';
import moment from 'moment';
import './Countdown.scss';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.timerID = setInterval(
      () => this._calculateCountdown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _calculateCountdown() {
    const sec = moment(this.props.date, 'YYYYMMDD hh:mm:ss').diff(moment()) / 1000;
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

    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  render() {
    return (
      <div className='Countdown'>
        <div className='column'>
          <p className='number'>{this.state.days}</p>
          <p className='label'>days</p>
        </div>
        <div className='column'>
          <p className='number'>{this.state.hours}</p>
          <p className='label'>hours</p>
        </div>
        <div className='column'>
          <p className='number'>{this.state.minutes}</p>
          <p className='label'>minutes</p>
        </div>
        <div className='column'>
          <p className='number'>{this.state.seconds}</p>
          <p className='label'>seconds</p>
        </div>
      </div>
    );
  }

}

export default Countdown;
