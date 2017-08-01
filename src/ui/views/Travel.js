import React, { Component } from 'react';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import travelPic from '../../img/travel/travel.jpg';
import stayPic from '../../img/travel/village.jpg';
import doPic from '../../img/travel/snowmobile.jpg';
import map from '../../img/travel/map.jpg';

class Travel extends Component {
  render() {
    return (
      <div className='Travel'>
        <SectionHeader img={travelPic} title='Travel' subtitle='Whistler, Canada' />
        <div className='content'>
          <div className='section'>
            <h2>Directions</h2>
            <p>Located in the original Whistler now known as “Creekside”, Nita Lake Lodge is a 90-minute drive north of Vancouver.</p>
          </div>
          <div className='section'>
            <h3 className='accentTitle'>BY AIR</h3>
            <p>The closest international airport is Vancouver International Airport (YVR), approximately 2 - 2.5 hours away by car. There are a variety of convenient transfer options available including coaches like <a href='http://www.pacificcoach.com/bus-vancouver-to-whistler/'>Pacific Coach</a>.</p>
          </div>
          <div className='section'>
            <h3 className='accentTitle'>BY CAR</h3>
            <p className='directions-subtitle'>Driving Directions from Seattle</p>
            <ul>
              <li>Take Interstate 5 to the Canadian Border.</li>
              <li>Once through Canadian customs, take HWY 99 to Vancouver</li>
              <li>HWY 99 becomes Oak Street after crossing Oak Street Bridge</li>
              <li>Stay on Oak Street to Broadway</li>
              <li>Turn right on Broadway</li>
              <li>Turn left onto Cambie Street</li>
              <li>Cross Cambie Street Bridge</li>
              <li>Cambie Street become Smithe Street</li>
              <li>Stay on Smithe until Seymour</li>
              <li>Turn right on Seymour, turn left onto West Georgia</li>
              <li>Follow West Georgia to Stanley Park Causeway</li>
              <li>Follow directions from Vancouver below</li>
            </ul>
            <p className='directions-subtitle'>Driving Directions from Vancouver</p>
            <ul>
              <li>Start at Georgia and Burrard Streets</li>
              <li>Head northwest on West Georgia St. toward Thurlow Street</li>
              <li>Continue on Stanley Park Causeway</li>
              <li>Cross the Lions Gate Bridge and follow HWY 1A / HWY 99</li>
              <li>Take the exit toward Grouse Mountain/North Vancouver / Capilano Canyon</li>
              <li>Merge right onto Marine Drive</li>
              <li>Turn left at Capilano Road</li>
              <li>Slight right onto the Route 1 Westbound ramp</li>
              <li>Keep right at the fork to continue toward HWY-1 West / Trans Canada Hwy West and merge onto HWY 1 West / Trans Canada Hwy West</li>
              <li>Take the HWY 99 North exit toward Whistler / Squamish</li>
              <li>Merge onto HWY 99 / Sea to Sky Hwy</li>
              <li>Follow HWY 99 through Squamish and continue toward Whistler</li>
              <li>Turn left at Lake Placid Rd. shortly after arriving in Whistler</li>
            </ul>
          </div>
        </div>
        <SectionHeader img={stayPic} title='Where to Stay' subtitle='Hotels & Guesthouses' />
        <div className='content'>
          <div className='section'>
            <p>There are 3 different areas of Whistler Blackcomb: Whistler Village, Upper Village, and Creekside.</p>
            <p>We have rooms blocked off for wedding guests at Nita Lake Lodge, which is located in Creekside. There is a courtesy shuttle to Whistler Village available from the hotel. Mention the Do wedding when you book.</p>
          </div>
          <div className='lodging'>
            <p className='accentTitle'>NITA LAKE LODGE</p>
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
        <SectionHeader img={doPic} title='What to Do' subtitle='Activities in the Whistler Area' />
        <div className='content'>
          <p className='section'><em>More info coming soon... !</em></p>
        </div>
      </div>
    );
  }
}

export default Travel;
