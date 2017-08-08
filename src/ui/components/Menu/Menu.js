import React, { Component } from 'react';
import closeIcon from '../../../img/close-button.png';
import './Menu.scss';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Menu'>
        <div className='icon-container'>
          <img className='icon' src={closeIcon} onClick={this.props.toggleMenu}/>
        </div>
        <div className='menu-items'>
          <a href='/'><h1>Wedding</h1></a>
          <a href='travel'><h1>Location</h1></a>
          <a href='registry'><h1>Registry</h1></a>
          <a href='rsvp'><h1>RSVP</h1></a>
        </div>
      </div>
    );
  }
}
