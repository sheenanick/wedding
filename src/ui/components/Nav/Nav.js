import React, { Component } from 'react';
import { Link } from 'react-router';
import menuIcon from '../../../img/menu-button.png';
import { MENU } from '../../../util/constants';
import './Nav.scss';

export default class Nav extends Component {
  _isActive(key) {
    if (this.props.location.pathname === key) {
      return 'active';
    }
  }

  _renderItems() {
    return (
      Object.keys(MENU).map((key) => (
        <Link to={MENU[key]['path']} key={key}>
          <p className={this._isActive(MENU[key]['path'])}>
            {MENU[key]['label']}
          </p>
        </Link>
      ))
    );
  }

  render() {
    return (
      <div className='Nav'>
        <div id='mobile-menu'>
          <div className='icon-container'>
            <img className='icon' src={menuIcon} onClick={this.props.toggleMenu}/>
          </div>
          <Link to='/' id='sheenatrong'><p>Sheena & Trong</p></Link>
        </div>
        <div className='navbar'>
          <div>
            <Link to='/'><p>Sheena & Trong</p></Link>
          </div>
          <div className='navbar-items'>
            {this._renderItems()}
          </div>
        </div>
      </div>
    );
  }
}
