import React, { Component } from "react";
import SectionHeader from '../components/SectionHeader/SectionHeader';
import travelPic from '../../img/travel/travel.jpg';

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      attending: true,
      message: '',
      submitted: false,
      emailError: false,
      nameError: false,
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    const target = event.target;
    const { value, name } = target;

    this.setState({
      [name]: value
    });
  }

  _handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    //TODO show loading
    const { email, firstName, lastName } = this.state;
    const errors = {
      emailError: this._validateEmail(email),
      nameError: firstName === '' || lastName === '',
    }
    this.setState(errors);

    const valid = Object.keys(errors).every((key) => { return !errors[key] });
    if (valid) {
      this.setState({ submitted: true });
      //TODO if valid, upload to Firebase & hide loading
    }

  }

  _validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return !re.test(email);
  }

  render() {
    return (
      <div className='Rsvp'>
        <SectionHeader img={travelPic} title='RSVP' subtitle='Kindly respond by Jan 1, 2018' />
        {
          this.state.submitted ?
          <h3>Thank you for your RSVP!</h3>
          :
          <div className='content'>
            <form className='form' onSubmit={this._handleSubmit}>
              <div className='form-item'>
                {
                  this.state.emailError ?
                  <p className='errorMessage'>Valid Email Address is required</p>
                  : null
                }
                <label>Email Address*</label>
                <input className={this.state.emailError ? 'input form-box error-box' : 'input form-box'} name='email' type='email' value={this.state.email} onChange={this._handleChange} />
              </div>
              <div className='form-item'>
                {
                  this.state.nameError ?
                  <p className='errorMessage'>Name is required</p>
                  : null
                }
                <div className='name-container'>
                  <div className='name-field'>
                    <label>First Name*</label>
                    <input className={this.state.nameError ? 'name error-box' : 'name form-box'} name='firstName' type='text' value={this.state.firstName} onChange={this._handleChange} />
                  </div>
                  <div className='name-field'>
                    <label>Last Name*</label>
                    <input className={this.state.nameError ? 'name error-box' : 'name form-box'} name='lastName' type='text' value={this.state.lastName} onChange={this._handleChange} />
                  </div>
                </div>
              </div>
              <div className='radio form-item'>
                <label>Will you be attending?*</label>
                <input name='attending' type='radio' value={true} checked={this.state.attending} onChange={this._handleChange} />
                <label>Yes</label>
                <input name='attending' type='radio' value={false} onChange={this._handleChange} />
                <label>No</label>
              </div>
              <div className='message-container form-item'>
                <label>Message</label>
                <textarea className='form-box' id='message' name='message' type='text' value={this.state.message} onChange={this._handleChange} />
              </div>
              <div className='button-container'>
                <button id='submit-button' type='submit' value='submit'>SUBMIT</button>
              </div>
            </form>
          </div>
        }
      </div>
    );
  }
}

export default Rsvp;
