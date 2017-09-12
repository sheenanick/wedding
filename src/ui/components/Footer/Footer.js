import React, { Component } from 'react';
import moment from 'moment';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <p id='footer'>&copy;{moment().format('YYYY')} Sheena & Trong</p>
      </div>
    );
  }
}

export default Footer;
