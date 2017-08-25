import React, { Component } from 'react';
import moment from 'moment';
import './Details.scss';

class Details extends Component {
  render() {
    const { title, date, startTime, address } = this.props.details;
    return (
      <div className='Details' style={this.props.style}>
        <div className='content'>
          <h2>{title}</h2>
          <div className='time'>
            <h3 className='accent'>{moment(date).format('dddd, MMM D, YYYY').toUpperCase()}</h3>
            <h3 className='accent'>{startTime}</h3>
          </div>
          <div className='address'>
            <p>{address.name}</p>
            <p>{address.street}</p>
            <p>{address.cityzip}</p>
          </div>
          <button className='button map-button'><a href='https://www.google.com/maps/place/Nita+Lake+Lodge/@50.0964651,-122.9979783,17z/data=!3m1!4b1!4m5!3m4!1s0x548722d182d467f3:0x914930a812f280ee!8m2!3d50.0964651!4d-122.995795' target='_blank'>VIEW MAP</a></button>
          <div className='section'>
            <p><em>*Underground parking available.</em></p>
            <p><em>*Black tie optional - please dress warmly as ceremony will be outside (covered).</em></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
