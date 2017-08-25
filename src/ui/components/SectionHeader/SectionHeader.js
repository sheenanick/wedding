import React, { Component } from 'react';
import './SectionHeader.scss';

class SectionHeader extends Component {
  render() {
    return (
      <div className='SectionHeader' style={{backgroundImage: `url(${this.props.img})`}}>
        <div className='overlay'>
          <h1 className='title'>{this.props.title}</h1>
          <h4 className='subtitle'>{this.props.subtitle}</h4>
        </div>
      </div>
    );
  }
}

SectionHeader.defaultProps = {
  subtitle: '',
};

export default SectionHeader;
