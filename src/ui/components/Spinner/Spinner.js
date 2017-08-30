import React, { Component } from 'react';
import spinner from '../../../img/icons/snowspinner.gif';
import './Spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div className='Spinner'>
        <img className='spinner' src={spinner}/>
      </div>
    );
  }
}

export default Spinner;
