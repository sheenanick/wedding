import React, { Component } from "react";
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import moment from 'moment';

import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import { WEDDING_INFO } from '../../weddingInfo.json';
import '../../stylesheets/home.scss';

class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <Header date={this.props.date} loading={this.props.loading}/>
        <div className='home-content'>
          <Details id='ceremony'
            details={WEDDING_INFO.ceremony}/>
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
