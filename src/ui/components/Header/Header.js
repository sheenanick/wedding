import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Countdown from '../Countdown/Countdown';
import { WEDDING_INFO } from '../../../weddingInfo.json';
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
                {moment(WEDDING_INFO.date).format('MMM D, YYYY').toUpperCase()} | {WEDDING_INFO.ceremony.address.cityzip.toUpperCase()}
              </p>
              <button className='button'><Link to='/rsvp'>RSVP</Link></button>
              <Countdown date={this.props.date} loading={this.props.loading}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
