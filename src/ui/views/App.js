import React, { Component } from 'react';
import menuIcon from '../../img/menu-button.png';
import closeIcon from '../../img/close-button.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
    this._toggleMenu = this._toggleMenu.bind(this);
  }

  _toggleMenu() {
    this.setState({menu: !this.state.menu});
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.menu ?
            <div className='menu-div'>
              <div className='icon-container'>
                <img className='icon' src={closeIcon} onClick={this._toggleMenu}/>
              </div>
              <div className='menu-items'>
                <a href='/'><h1>Wedding</h1></a>
                <a href='travel'><h1>Location</h1></a>
                <a href='registry'><h1>Registry</h1></a>
                <a href='rsvp'><h1>RSVP</h1></a>
              </div>
            </div>
          :
            <div className='app-content'>
              <div id='mobile-menu'>
                <div className='icon-container'>
                  <img className='icon' src={menuIcon} onClick={this._toggleMenu}/>
                </div>
                <div className='name-container'>
                  <a href='/' id='sheenatrong'><p>Sheena & Trong</p></a>
                </div>
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
              {this.props.children}
            </div>
        }
      </div>
    );
  }
}
