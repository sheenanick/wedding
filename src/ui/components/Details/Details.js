import React, { Component } from 'react';
import moment from 'moment';
import './Details.css';

class Details extends Component {
  render() {
    const { title, date, startTime, endTime, address } = this.props.details;
    return (
      <div className='Details' style={this.props.style}>
        <div className='content'>
          <h2>{title}</h2>
          <div className='time'>
            <h3 className='accent'>{moment(date).format('dddd, MMM D, YYYY').toUpperCase()}</h3>
            <h3 className='accent'>{startTime} - {endTime}</h3>
          </div>
          <div className='address'>
            <p>{address.name}</p>
            <p>{address.street}</p>
            <p>{address.cityzip}</p>
          </div>
          <a href={address.map} target='_blank' rel='noopener noreferrer'>
            <button className='button black-button'>VIEW MAP</button>
          </a>
          <div className='section'>
            <p><em>*Underground parking available.</em></p>
            <p><em>*Ceremony will be held outside at the Porte Cochere.</em></p>
            <p><em>*Reception to follow inside.</em></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
