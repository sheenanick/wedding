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
            <h2>{title}</h2>
          </div>
          <div className='time'>
            <p>{startTime} - {endTime}</p>
          </div>
          <div className='address'>
            <p>{address.name}</p>
            <p>{address.street}</p>
            <p>{address.cityzip}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
