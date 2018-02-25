import React, { Component } from 'react';
import { connect } from 'react-redux'
import { toggleMenu, toggleAudio } from '../../actions/navActions';
import { countdown } from '../../actions/countdownActions';
import LoveSong from '../../LoveSong.m4a';
import Nav from '../components/Nav/Nav';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import '../../styles/app.css';

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

  toggle = () => {
    this.props.toggleMenu();
  }

  toggleAudio = () => {
    this.props.toggleAudio();
  }

  render() {
    const { showMenu, play, location, children } = this.props;
    return (
      <div className={`App ${showMenu ? 'disable-scroll' : ''}`}>
        <audio id='bgm' src={LoveSong} autoPlay muted={!play} loop />
        <Menu
          location={location}
          showMenu={showMenu}
          toggleMenu={this.toggle}/>
        <div
          className={`app-content ${showMenu ? 'slide-content' : ''}`}>
          <Nav
            location={location}
            play={play}
            toggleMenu={this.toggle}
            toggleAudio={this.toggleAudio}
          />
          <div onClick={showMenu ? this.toggle : null}>
            {children}
            <Footer />
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: function() { dispatch(toggleMenu()); },
    toggleAudio: function() { dispatch(toggleAudio()); },
    countdown: function() { dispatch(countdown()); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
