import React, { Component } from 'react';
import { Link } from 'react-router';
import menuIcon from '../../../img/icons/menu-button.png';
import muteIcon from '../../../img/icons/mute.png';
import audioIcon from '../../../img/icons/play.png';
import { isActive } from '../../../util/util';
import { MENU } from '../../../util/constants';
import './Nav.css';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
  }

  renderItems() {
    let location = this.props.location.pathname;
    return (
      Object.keys(MENU).map((key) => (
        <Link
          className={isActive(location, MENU[key]['path'])}
          to={MENU[key]['path']}
          key={key}>
          <p>{MENU[key]['label'].toUpperCase()}</p>
        </Link>
      ))
    );
  }

  render() {
    const { toggleMenu, toggleAudio, play } = this.props;
    return (
      <div className='Nav'>
        <div id='mobile-menu'>
          <div className='icon center-vertical'>
            <img className='menu-icon'
              src={menuIcon}
              onClick={toggleMenu}
              alt='menu icon'
            />
          </div>
          <Link to='/'>
            <p>Trong & Sheena</p>
          </Link>
          <div className='icon center-vertical'>
            <img
              className='menu-icon'
              src={play ? audioIcon : muteIcon}
              onClick={toggleAudio}
              alt='audio icon'
            />
          </div>
        </div>
        <div className='navbar'>
          <div className='navbar-items'>
            {this.renderItems()}
            <img
              className='menu-icon'
              src={play ? audioIcon : muteIcon}
              onClick={toggleAudio}
              alt='audio icon'
            />
          </div>
        </div>
      </div>
    );
  }
}
