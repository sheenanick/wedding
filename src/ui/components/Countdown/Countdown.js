import React, { Component } from 'react';
import { connect } from 'react-redux'
import Spinner from '../Spinner/Spinner';
import './Countdown.css';

class Countdown extends Component {
  render() {
    const { loading, date } = this.props;
    return (
      <div className='Countdown'>
        <div className='column'>
          {
            loading ?
            <Spinner />
            :
            <p className='number'>{date.days}</p>
          }
          <p className='label'>days</p>
        </div>
        <div className='column'>
          {
            loading ?
            <Spinner />
            :
            <p className='number'>{date.hours}</p>
          }
          <p className='label'>hours</p>
        </div>
        <div className='column'>
          {
            loading ?
            <Spinner />
            :
            <p className='number'>{date.minutes}</p>
          }
          <p className='label'>minutes</p>
        </div>
        <div className='column'>
          {
            loading ?
            <Spinner />
            :
            <p className='number'>{date.seconds}</p>
          }
          <p className='label'>seconds</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.countdownState.date,
    loading: state.countdownState.loading,
  }
}

export default connect(mapStateToProps)(Countdown);
