import React, { Component } from 'react';
import up from '../../../img/icons/up.png';
import './ScrollTop.css';

class ScrollTop extends Component {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className='ScrollTop'>
        <button className='button top-button' onClick={() => this.scrollToTop()}>
          <img id='arrow' src={up} alt='up arrow'/>
          <p id='top'>TOP</p>
        </button>
      </div>
    );
  }
}

export default ScrollTop;
