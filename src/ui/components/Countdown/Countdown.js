import React, { Component } from 'react';
import moment from 'moment';
import spinner from '../../../img/snowspinner.gif';
import './Countdown.scss';

class Countdown extends Component {
  render() {
    return (
      <div className='Countdown'>
        <div className='column'>
          <div className='column-items'>
            {
              this.props.loading ?
              <div className='spinner-container'>
                <img className='spinner' src={spinner}/>
              </div>
              :
              <p className='number'>{this.props.date.days}</p>
            }
            <p className='label'>days</p>
          </div>
        </div>
        <div className='column'>
          <div className='column-items'>
            {
              this.props.loading ?
              <div className='spinner-container'>
                <img className='spinner' src={spinner}/>
              </div>
              :
              <p className='number'>{this.props.date.hours}</p>
            }
            <p className='label'>hours</p>
          </div>
        </div>
        <div className='column'>
          <div className='column-items'>
            {
              this.props.loading ?
              <div className='spinner-container'>
                <img className='spinner' src={spinner}/>
              </div>
              :
              <p className='number'>{this.props.date.minutes}</p>
            }
            <p className='label'>minutes</p>
          </div>
        </div>
        <div className='column'>
          <div className='column-items'>
            {
              this.props.loading ?
              <div className='spinner-container'>
                <img className='spinner' src={spinner}/>
              </div>
              :
              <p className='number'>{this.props.date.seconds}</p>
            }
            <p className='label'>seconds</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
