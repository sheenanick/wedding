import React, { Component } from 'react';
import { Link } from 'react-router';
import closeIcon from '../../../img/icons/close-button.png';
import { MENU } from '../../../util/constants';
import './Menu.scss';

export default class Menu extends Component {
  _renderItems() {
    return (
      Object.keys(MENU).map((key) => (
        <Link to={MENU[key]['path']} onClick={this.props.toggleMenu} key={key}>
          <h1>{MENU[key]['label']}</h1>
        </Link>
      ))
    );
  }

  render() {
    return (
      <div className='Menu'>
        <div className='icon-container'>
          <img className='icon' src={closeIcon} onClick={this.props.toggleMenu}/>
        </div>
        <div className='menu-items'>
          {this._renderItems()}
        </div>
      </div>
    );
  }
}
