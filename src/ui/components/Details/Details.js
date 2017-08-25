import React, { Component } from 'react';
import moment from 'moment';
import './Details.scss';

class Details extends Component {
  render() {
    const { title, date, startTime, address } = this.props.details;
    return (
      <div className='Details' style={this.props.style}>
        <div className='text'>
          <div>
            <h2 className='details-title'>{title}</h2>
          </div>
          <div className='time'>
            <h3 className='accent'>{moment(date).format('dddd, MMM D, YYYY').toUpperCase()}</h3>
            <h3 className='accent'>{startTime}</h3>
          </div>
          <div className='address'>
            <p>{address.name}</p>
            <p>{address.street}</p>
            <p>{address.cityzip}</p>
          </div>
          <p className='section'><em>Underground parking available at hotel</em></p>
        </div>
      </div>
    );
  }
}

export default Details;
