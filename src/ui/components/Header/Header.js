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
              <span className='title cursive'>
                #WinterWondDoland
              </span>
              <p className='subtitle'>
                FEB 17, 2018 | WHISTLER, B.C.
              </p>
              <button className='button'><a href='rsvp'>RSVP</a></button>
              <Countdown date={this.props.date} loading={this.props.loading}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
