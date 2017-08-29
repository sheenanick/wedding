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
    return (
      <div className='App'>
        <audio id='bgm' src={LoveSong} autoPlay muted={!this.props.play} loop />
        {
          this.props.showMenu ?
            <Menu toggleMenu={() => this.toggle()}/>
          :
            <div>
              <Nav
                location={this.props.location}
                activeMenu={this.props.activeMenu}
                play={this.props.play}
                toggleMenu={() => this.toggle()}
                toggleAudio={() => this.toggleAudio()}
                onClick={() => this.props.setActiveMenu()}
              />
              {this.props.children}
            </div>
        }
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
