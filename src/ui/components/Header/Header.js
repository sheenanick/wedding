import React, { Component } from 'react';
import Countdown from '../Countdown/Countdown';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <div className='header-overlay'>
          <div className='header-content'>
            <div className='title-container'>
              <div className='header-title cursive'>
                #Winter
              </div>
              <div className='header-title cursive'>
                WonDo
              </div>
              <div className='header-title cursive'>
                land
              </div>
            </div>
            <Countdown date={this.props.date} loading={this.props.loading}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
