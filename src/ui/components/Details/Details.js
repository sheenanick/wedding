import React, { Component } from 'react';
import './Details.scss';

class Details extends Component {
  render() {
    const { title, startTime, endTime, address } = this.props.details;
    return (
      <div className='Details' style={this.props.style}>
        <img className='img' src={this.props.img} />
        <div className='text'>
          <div>
            <h2 className='details-title'>{title}</h2>
          </div>
          <div className='time'>
            <h3 className='accent'>{startTime}</h3>
          </div>
          <div className='address'>
            <p>{address.name}</p>
            <p>{address.street}</p>
            <p>{address.cityzip}</p>
          </div>
          <p className='section'><em>Reception to follow.</em></p>
        </div>
      </div>
    );
  }
}

export default Details;
