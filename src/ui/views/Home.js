import React, { Component } from "react";
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import { WEDDING_INFO } from '../../weddingInfo.js';
import '../../styles/home.css';

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
