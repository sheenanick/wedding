import React, { Component } from 'react';
import menuIcon from '../../../img/menu-button.png';
import './Nav.scss';

export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Nav'>
        <div id='mobile-menu'>
          <div className='icon-container'>
            <img className='icon' src={menuIcon} onClick={this.props.toggleMenu}/>
          </div>
          <a href='/' id='sheenatrong'><p>Sheena & Trong</p></a>
        </div>
        <div className='navbar'>
          <div>
            <a href='/'><p>Sheena & Trong</p></a>
          </div>
          <div className='navbar-items'>
            <a href='/'><p>WEDDING</p></a>
            <a href='travel'><p>LOCATION</p></a>
            <a href='registry'><p>REGISTRY</p></a>
            <a href='rsvp'><p>RSVP</p></a>
          </div>
        </div>
      </div>
    );
  }
}
