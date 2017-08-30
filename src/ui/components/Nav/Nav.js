import React, { Component } from 'react';
import { Link } from 'react-router';
import menuIcon from '../../../img/icons/menu-button.png';
import muteIcon from '../../../img/icons/mute.png';
import audioIcon from '../../../img/icons/play.png';
import { isActive } from '../../../util/util';
import { MENU } from '../../../util/constants';
import './Nav.scss';

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
    return (
      <div className='Nav'>
        <div id='mobile-menu'>
          <div>
            <img className='icon menu-icon'
              src={menuIcon}
              onClick={this.props.toggleMenu}
            />
          </div>
          <div className='center-vertical'>
            <Link to='/' id='sheenatrong'>
              <p>Sheena & Trong</p>
            </Link>
          </div>
          <div>
            <img className='icon audio-icon'
              src={this.props.play ? audioIcon : muteIcon}
              onClick={this.props.toggleAudio}
            />
          </div>
        </div>
        <div className='navbar'>
          <div className='center-vertical'>
            <Link to='/'>
              <p>Sheena & Trong</p>
            </Link>
          </div>
          <div className='navbar-items'>
            <div id='audio'>
              <img className='icon audio-icon'
                src={this.props.play ? audioIcon : muteIcon}
                onClick={this.props.toggleAudio}
              />
            </div>
            <div className='center-vertical'>
              {this.renderItems()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
