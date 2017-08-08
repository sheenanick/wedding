import React, { Component } from "react";
import { browserHistory } from 'react-router';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import { WEDDING_INFO } from '../../constants.js';
import ceremonyPic from '../../img/ceremony.jpg';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">
        <Header date={WEDDING_INFO.date} />
        <h2 id='welcome-message'>Please join us as we celebrate our wedding on February 17th, 2018 in Whistler, British Columbia!</h2>
        <Details id='ceremony' details={WEDDING_INFO.ceremony} img={ceremonyPic} />
      </div>
    );
  }
}
