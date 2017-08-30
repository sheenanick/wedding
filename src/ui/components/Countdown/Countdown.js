import React, { Component } from 'react';
import moment from 'moment';
import Spinner from '../Spinner/Spinner';
import './Countdown.scss';

class Countdown extends Component {
  render() {
    return (
      <div className='Countdown'>
        <div className='column'>
          {
            this.props.loading ?
            <Spinner />
            :
            <p className='number'>{this.props.date.days}</p>
          }
          <p className='label'>days</p>
        </div>
        <div className='column'>
          {
            this.props.loading ?
            <Spinner />
            :
            <p className='number'>{this.props.date.hours}</p>
          }
          <p className='label'>hours</p>
        </div>
        <div className='column'>
          {
            this.props.loading ?
            <Spinner />
            :
            <p className='number'>{this.props.date.minutes}</p>
          }
          <p className='label'>minutes</p>
        </div>
        <div className='column'>
          {
            this.props.loading ?
            <Spinner />
            :
            <p className='number'>{this.props.date.seconds}</p>
          }
          <p className='label'>seconds</p>
        </div>
      </div>
    );
  }
}

export default Countdown;
