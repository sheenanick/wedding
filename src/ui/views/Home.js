import React, { Component } from "react";
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import moment from 'moment';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import ceremonyPic from '../../img/ceremony.jpg';
import { WEDDING_INFO } from '../../weddingInfo.json';
import '../../stylesheets/home.scss';

class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div id="home">
        <Header date={this.props.date} loading={this.props.loading}/>
        <div className='content'>
          <h2 id='welcome-message'>Please join us as we celebrate our wedding on {moment(WEDDING_INFO.date).format('MMMM Do, YYYY')} in Whistler, British Columbia!</h2>
          <Details id='ceremony' details={WEDDING_INFO.ceremony} img={ceremonyPic} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    date: state.countdownState.date,
    loading: state.countdownState.loading,
  }
}

export default connect(mapStateToProps)(Home);
