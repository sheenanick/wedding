import React, { Component } from "react";
import { connect } from 'react-redux'
import { submitRsvp } from '../../actions/rsvpActions';
import SectionHeader from '../components/SectionHeader/SectionHeader';
import rsvpPic from '../../img/rsvp.jpg';
import '../../styles/rsvp.css';

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      attending: 'true',
      food: '',
      message: '',
      submitted: true,
      emailError: false,
      nameError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //validate form inputs
    const { email, firstName, lastName, attending, food, message } = this.state;
    const errors = {
      emailError: this.validateEmail(email),
      nameError: firstName === '' || lastName === '',
    }
    this.setState(errors);

    //if no errors, dispatch action to save to firebase
    const valid = Object.keys(errors).every((key) => { return !errors[key] });
    if (valid) {
      this.setState({ submitted: true });
      const rsvp = {
        email,
        firstName,
        lastName,
        attending,
        food,
        message
      }
      this.props.submitRsvp(rsvp);
    } else {
      //focus on input with error
      if (errors.emailError) {
        this.refs.emailError.focus();
      } else if(!firstName) {
        this.refs.firstName.focus();
      } else {
        this.refs.lastName.focus();
      }
    }
  }

  handleReset() {
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      attending: 'true',
      food: '',
      message: '',
      submitted: false,
      emailError: false,
      nameError: false,
    });
  }

  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return !re.test(email);
  }

  render() {
    const { submitted, emailError, email, nameError, firstName, lastName, message, attending, food  } = this.state;
    return (
      <div className='Rsvp'>
        <SectionHeader img={rsvpPic} title='RSVP'/>
        <div className='content center'>
          {
            submitted ?
            <div className='section'>
              <h3>Thank you for your RSVP!</h3>
              <h3>We are so excited to celebrate with all of you!! :)</h3>
            </div>
            :
            <div id='formSection'>
              <h4>KINDLY RESPOND BY DEC 15, 2017</h4>
              <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-item'>
                  {
                    emailError ?
                    <p className='errorMessage'>Valid Email Address is required</p>
                    : null
                  }
                  <label>Email Address*</label>
                  <input className={emailError ? 'input form-box error-box' : 'input form-box'} ref='emailError' name='email' type='email' value={email} onChange={this.handleChange} />
                </div>
                <div className='form-item'>
                  {
                    nameError ?
                    <p className='errorMessage'>Name is required</p>
                    : null
                  }
                  <div className='name-container'>
                    <div className='name-field'>
                      <label>First Name*</label>
                      <input className={nameError ? 'name error-box' : 'name form-box'} ref='firstName' name='firstName' type='text' value={firstName} onChange={this.handleChange} />
                    </div>
                    <div className='name-field'>
                      <label>Last Name*</label>
                      <input className={nameError ? 'name error-box' : 'name form-box'} ref='lastName' name='lastName' type='text' value={lastName} onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
                <div className='radio form-item'>
                  <label>Will you be attending?*</label>
                  <input name='attending' type='radio' value='true' checked={attending === 'true'} onChange={this.handleChange} />
                  <label>Yes</label>
                  <input name='attending' type='radio' value='false' checked={attending === 'false'} onChange={this.handleChange} />
                  <label>No</label>
                </div>
                <div className='form-item'>
                  <label>Food Allergies/Dietary Restrictions</label>
                  <textarea className='form-box text-area' name='food' type='text' value={food} onChange={this.handleChange} />
                </div>
                <div className='form-item'>
                  <label>Message</label>
                  <textarea className='form-box text-area' name='message' type='text' value={message} onChange={this.handleChange} />
                </div>
                <div className='button-container'>
                  <button id='submit-button' className='black-button' type='submit' value='submit'>SUBMIT</button>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitRsvp: function(rsvp) { dispatch(submitRsvp(rsvp)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
