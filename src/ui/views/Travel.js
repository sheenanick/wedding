import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import ScrollTop from '../components/ScrollTop/ScrollTop';
import travelPic from '../../img/travel/travel.jpg';
import stayPic from '../../img/travel/village.jpg';
import doPic from '../../img/travel/snowmobile.jpg';
import plane from '../../img/icons/plane.png';
import car from '../../img/icons/car.png';
import phone from '../../img/icons/phone.png';
import mail from '../../img/icons/contact.png';
import '../../styles/travel.css';

class Travel extends Component {
  render() {
    return (
      <div className='Travel'>
        <SectionHeader id='travel-header' img={travelPic} title='TRAVEL'/>
        <div className='content center'>
          <h2 className='section-subtitle'>Directions</h2>
          <div className='directions-container'>
            <div className='section directions-section'>
              <img src={car} id='car' alt='car icon'/>
              <p>Located in the original Whistler now known as “Creekside”, Nita Lake Lodge is a 90-minute drive north of Vancouver. Cars on the Sea to Sky Highway are required to have winter tires or carry chains.</p>
            </div>
            <div className='section directions-section'>
              <img src={plane} id='plane' alt='plane icon'/>
              <p>The nearest major airport is Vancouver International Airport (YVR) which is about 2 - 2.5 hours away by car. There are many buses and shuttles frequently available from YVR -> Whistler.</p>
            </div>
          </div>
        </div>
        <SectionHeader img={stayPic} title='WHERE TO STAY'/>
        <div className='content center'>
          <h2 className='section-subtitle'>Accommodations</h2>
          <div className='section'>
            <p className='accommodations'>Group rates are available for reservations made before December 18th, 2017.</p>
          </div>
          <div className='section'>
            <p><em>*3 night minimum stay required*</em></p>
          </div>
          <div className='section lodging'>
            <a id='nita' href='http://www.nitalakelodge.com/'><p className='accent'>NITA LAKE LODGE</p></a>
            <p>2131 Lake Placid Road</p>
            <p>Whistler, B.C. V0N 1B2</p>
            <p>< a href='tel:1-888-755-6482'><img className='address-icon' src={phone} />1-888-755-6482</a></p>
            <p><a href='mailto:info@nitalakelodge.com' target='_top'><img className='address-icon' src={mail} />info@nitalakelodge.com</a></p>
          </div>
        </div>
        <SectionHeader img={doPic} title='WHAT TO DO'/>
        <div className='activities-content'>
          <div className='center'>
            <h3 id='activities-subtitle'>"Whether you're an adrenaline junkie, a foodie, an art-connoisseur or someone who loves to dabble in it all, there's something here for everyone."</h3>
          </div>
          <div className='activities'>
            <div className='activities-column'>
              <h4 className='accent'>EAT, DRINK & SHOP</h4>
              <p>The central neighborhood of the town of Whistler, Whistler Village is located at the base of both Whistler and Blackcomb Mountains. It is divided into several areas - the Village, Village North and Upper Village - all of which are connected by the pedestrian-only Village Stroll. Enjoy beers in a cozy pub, cocktails in a classy lounge or get your groove on in one of six nightclubs. From casual après-ski snacks to fine dining, Whistler's award-winning restaurants offer diverse dining options with many featuring organic, locally sourced ingredients.</p>
            </div>
            <div className='activities-column'>
              <h4 className='accent'>PLAY IN THE SNOW</h4>
              <p>Whistler Blackcomb is one of the largest ski resorts in North America with over 8,100 acres of snow-covered slopes, 16 alpine bowls, 3 glaciers, world-class terrain parks and 200+ marked trails. Definitely make sure to take a ride on the PEAK 2 PEAK Gondola that connects the two mountains. The mountains are accessible from Creekside, Whistler Village, and Upper Village. Besides skiing and snowboarding, the area also offers many other winter activities, such as snowshoeing, dog sledding, and snowmobiling.</p>
            </div>
            <div className='activities-column'>
              <h4 className='accent'>RELAX AT THE SPA</h4>
              <p>Whistler is home to countless spas that can help relax those tired muscles after a long day on the mountain. A popular choice is <a href='https://www.scandinave.com/whistler/en/' target='_blank' rel='noopener noreferrer'>Scandinave Spa Whistler</a>. This spectacular 20,000 sq ft outdoor spa nestled on 3 acres of land and overlooking Whistler’s incredible landscape offers the Scandinavian baths experience, also known as hydrotherapy. Renowned for their energizing and relaxing properties, the baths cleanse the skin, improve physical conditioning and promote a sense of well-being. Add a massage for extra relaxation.</p>
            </div>
          </div>
        </div>
        <ScrollTop />
      </div>
    );
  }
}

export default Travel;
