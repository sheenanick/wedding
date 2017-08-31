import React, { Component } from 'react';
import { Link } from 'react-router';
import { isActive } from '../../../util/util';
import { MENU } from '../../../util/constants';
import './Menu.css';

export default class Menu extends Component {
  renderItems() {
    let location = this.props.location.pathname;
    return (
      Object.keys(MENU).map((key) => (
        <div className='' key={key}>
          <Link
            className={`menu-item ${isActive(location, MENU[key]['path'])}`}
            to={MENU[key]['path']}
            onClick={this.props.toggleMenu}>
            <img className='menu-icon icon' src={MENU[key]['img']} alt={`${MENU[key]['label']} icon`}/>
            <h4>{MENU[key]['label'].toUpperCase()}</h4>
          </Link>
          <div className='divider'/>
        </div>
      ))
    );
  }

  render() {
    return (
      <div className={`Menu ${this.props.showMenu ? 'show-menu' : ''}`}>
        <div className='menu-items'>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}
