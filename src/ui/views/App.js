import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleMenu, toggleAudio, setActiveMenu } from '../../actions/navActions';
import { countdown } from '../../actions/countdownActions';
import LoveSong from '../../LoveSong.m4a';
import Nav from '../components/Nav/Nav';
import Menu from '../components/Menu/Menu';
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

  toggle() {
    this.props.toggleMenu();
  }

  toggleAudio() {
    this.props.toggleAudio();
  }

  render() {
    const { showMenu, play, location, activeMenu, children } = this.props;
    return (
      <div className={`App ${showMenu ? 'disable-scroll' : ''}`}>
        <audio id='bgm' src={LoveSong} autoPlay muted={!play} loop />
        <div>
          <Menu
            location={location}
            showMenu={showMenu}
            toggleMenu={() => this.toggle()}/>
          <div
            className={`app-content ${showMenu ? 'slide-content' : ''}`}>
            <Nav
              location={location}
              activeMenu={activeMenu}
              play={play}
              toggleMenu={() => this.toggle()}
              toggleAudio={() => this.toggleAudio()}
              onClick={() => this.props.setActiveMenu()}
            />
            <div onClick={showMenu ? () => this.toggle() : null}>
            {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMenu: state.navState.showMenu,
    play: state.navState.play,
    activeMenu: state.navState.activeMenu
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
    toggleAudio: function() { dispatch(toggleAudio()); },
    countdown: function() { dispatch(countdown()); },
    setActiveMenu: function(activeMenu) { dispatch(setActiveMenu()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
