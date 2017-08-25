import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import travelPic from '../../img/travel/travel.jpg';
import stayPic from '../../img/travel/village.jpg';
import doPic from '../../img/travel/snowmobile.jpg';
import map from '../../img/travel/map.jpg';
import plane from '../../img/icons/plane.png';
import car from '../../img/icons/car.png';
import '../../stylesheets/travel.scss';

class Travel extends Component {
  render() {
    return (
      <div className='Travel'>
        <SectionHeader id='travel-header' img={travelPic} title='TRAVEL'/>
        <div className='content'>
          <h2>Directions</h2>
          <div className='directions-container'>
            <div className='section directions-section'>
              <img src={car} id='car' className='travel-icons'/>
              <p>Located in the original Whistler now known as “Creekside”, Nita Lake Lodge is a 90-minute drive north of Vancouver, or 4-hour drive from Seattle.</p>
            </div>
            <div className='section directions-section'>
              <img src={plane} id='plane' className='travel-icons'/>
              <p>Vancouver International Airport (YVR) is approximately 2 - 2.5 hours away by car. There are many buses and shuttles from YVR -> Whistler.</p>
            </div>
          </div>
        </div>
        <SectionHeader img={stayPic} title='WHERE TO STAY'/>
        <div className='content'>
          <h2>Accommodations</h2>
          <div  className='section'>
            <p>A group rate is available, but availability of rooms may be limited.</p>
            <p><em>*3 night minimum stay required*</em></p>
          </div>
          <div className='section lodging'>
            <a id='nita' href='http://www.nitalakelodge.com/'><p className='accent'>NITA LAKE LODGE</p></a>
            <p>2131 Lake Placid Road</p>
            <p>Whistler, British Columbia</p>
            <p>Canada V0N 1B2</p>
          </div>
          <div className='section'>
            <img id='map' src={map} />
          </div>
          <p id='options' className='section'>
            <em>Check out <a href='https://www.airbnb.com/' target='_blank'>Airbnb</a> and <a href='https://www.vrbo.com/' target='_blank'>VRBO</a> for more options!</em>
          </p>
        </div>
        <SectionHeader img={doPic} title='WHAT TO DO'/>
        <div className='content'>
          <p className='section'><em>More info coming soon... !</em></p>
        </div>
        <ScrollTop />
      </div>
    );
  }
}

export default Travel;
