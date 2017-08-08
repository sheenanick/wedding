import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleMenu } from '../../actions/navActions';
import { countdown } from '../../actions/countdownActions';

import Nav from '../components/Nav/Nav';
import Menu from '../components/Menu/Menu';
import menuIcon from '../../img/menu-button.png';
import closeIcon from '../../img/close-button.png';
import '../../stylesheets/app.scss';

class App extends Component {
  componentWillMount() {
    this.timerID = setInterval(
      () => this.props.countdown(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _toggle() {
    this.props.toggleMenu();
  }

  render() {
    return (
      <div className='App'>
        {
          this.props.showMenu ?
            <Menu toggleMenu={() => this._toggle()}/>
          :
            <div>
              <Nav toggleMenu={() => this._toggle()}/>
              {this.props.children}
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.navState.showMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
    countdown: function() { dispatch(countdown()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
