import React, { Component } from 'react';
import moment from 'moment';
import Countdown from '../Countdown/Countdown';
import './Header.css';

class Header extends Component {
  render() {
    const { date, loading, details } = this.props;
    return (
      <div className='Header'>
        <div className='header-overlay'>
          <div className='header-content'>
            <div className='title-container'>
              <div className='header-title cursive'>
                Sheena
              </div>
              <div className='header-title cursive'>
                &
              </div>
              <div className='header-title cursive'>
                Trong
              </div>
            </div>
            <h3 id='header-sub'>{moment(details.date).format('MMM D, YYYY').toUpperCase()} / WHISTLER, B.C. / CANADA</h3>
            <Countdown date={date} loading={loading}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
