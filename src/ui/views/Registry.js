import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import travelPic from '../../img/travel/travel.jpg';

class Registry extends Component {
  render() {
    return (
      <div className='Registry'>
        <SectionHeader img={travelPic} title='Registry' subtitle='' />
        <div className='section'>
          <p>
            We don't need you to bring us gifts – we know plane tickets are expensive and your presence at the wedding is enough! If you really want to give us something, a contribution to our honeymoon fund would be awesome.
          </p>
        </div>
      </div>
    );
  }
}

export default Registry;
