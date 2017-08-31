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
      message: '',
      submitted: false,
      emailError: false,
      nameError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { email, firstName, lastName, attending, message } = this.state;
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
        message
      }
      this.props.submitRsvp(rsvp);
    }
  }

  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return !re.test(email);
  }

  render() {
    return (
      <div className='Rsvp'>
        <SectionHeader img={rsvpPic} title='RSVP'/>
        <div className='content'>
          {
            this.state.submitted ?
            <h3 className='section'>Thank you for your RSVP!</h3>
            :
            <div id='formSection'>
              <h4>KINDLY RESPOND BY JAN 1, 2018</h4>
              <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-item'>
                  {
                    this.state.emailError ?
                    <p className='errorMessage'>Valid Email Address is required</p>
                    : null
                  }
                  <label>Email Address*</label>
                  <input className={this.state.emailError ? 'input form-box error-box' : 'input form-box'} name='email' type='email' value={this.state.email} onChange={this.handleChange} />
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
                      <input className={this.state.nameError ? 'name error-box' : 'name form-box'} name='firstName' type='text' value={this.state.firstName} onChange={this.handleChange} />
                    </div>
                    <div className='name-field'>
                      <label>Last Name*</label>
                      <input className={this.state.nameError ? 'name error-box' : 'name form-box'} name='lastName' type='text' value={this.state.lastName} onChange={this.handleChange} />
                    </div>
                  </div>
                </div>
                <div className='radio form-item'>
                  <label>Will you be attending?*</label>
                  <input name='attending' type='radio' value='true' checked={this.state.attending === 'true'} onChange={this.handleChange} />
                  <label>Yes</label>
                  <input name='attending' type='radio' value='false' checked={this.state.attending === 'false'}  onChange={this.handleChange} />
                  <label>No</label>
                </div>
                <div className='message-container form-item'>
                  <label>Message</label>
                  <textarea className='form-box' id='message' name='message' type='text' value={this.state.message} onChange={this.handleChange} />
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
  return {
    loading: state.rsvpState.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitRsvp: function(rsvp) { dispatch(submitRsvp(rsvp)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);
