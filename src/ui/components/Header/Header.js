import React, { Component } from 'react';
import Countdown from '../Countdown/Countdown';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='header-div'>
          <div className='header-content'>
            <div>
              <p className='title'>
                SHEENA & TRONG
              </p>
              <p className='subtitle'>
                FEB 10, 2018 | WHISTLER, CANADA
              </p>
              <button className='button'><a href='rsvp'>RSVP</a></button>
              <Countdown date={this.props.date}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
