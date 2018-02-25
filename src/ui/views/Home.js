import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import { WEDDING_INFO } from '../../weddingInfo.js';
import '../../styles/home.css';

class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }

  renderSnow() {
    const positions = [];
    // determine size of positions array based on window width
    const values = window.innerWidth / 15;
    // add random position values from 1 to 97 %
    for (var i = 0; i < values; i++) {
      positions[i] = Math.floor(Math.random() * 97 + 1);
    }
    return (
      //render a snowflake at every position with random animation and image
      positions.map((position, index) => {
        const style = {
          left: `${position}%`,
          animationDuration: `${Math.floor(Math.random() * 35 + 20)}s`,
          animationDelay: `${Math.floor(Math.random() * 30)}s`
        }
        return(
          <img className='snowflake' src={require(`../../img/icons/snowflake${Math.floor(Math.random() * 4 + 1)}.png`)} alt='snowflake' style={style} key={index} />
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderSnow()}
        <Header details={WEDDING_INFO.ceremony}/>
        <div className='home-content'>
          <Details id='ceremony'
            details={WEDDING_INFO.ceremony}/>
        </div>
      </div>
    );
  }
}

export default Home;
