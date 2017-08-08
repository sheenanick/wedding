import React, { Component } from "react";
import { browserHistory } from 'react-router';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import ceremonyPic from '../../img/ceremony.jpg';
import { WEDDING_INFO } from '../../constants.js';
import '../../stylesheets/home.scss';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Header date={WEDDING_INFO.date} />
        <div className='content'>
          <h2 id='welcome-message'>Please join us as we celebrate our wedding on February 17th, 2018 in Whistler, British Columbia!</h2>
          <Details id='ceremony' details={WEDDING_INFO.ceremony} img={ceremonyPic} />
        </div>
      </div>
    );
  }
}
