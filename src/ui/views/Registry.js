import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import registryPic from '../../img/gifts.jpg';
import amazonLogo from '../../img/icons/amazon.png';
import '../../stylesheets/registry.scss';

class Registry extends Component {
  render() {
    return (
      <div className='Registry'>
        <SectionHeader img={registryPic} title='REGISTRY'/>
        <div className='content'>
          <p>
            We don't need you to bring us gifts – we know plane tickets are expensive and your presence at the wedding is enough! If you really want to give us something, a contribution to our honeymoon fund would be awesome. Or there's Amazon.
          </p>
          <a href='https://www.amazon.com/wedding/share/trongandsheena' target='_blank'><img src={amazonLogo} alt='Amazon Logo' /></a>
        </div>
      </div>
    );
  }
}

export default Registry;
