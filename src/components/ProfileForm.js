import React, { Component } from 'react';
import validator from 'validator';

class ProfileForm extends Component {
  state = {
    name: '',
    nameVal: false,
    nameInput: React.createRef(),
    email: '',
    emailVal: false,
    emailInput: React.createRef(),
    username: '',
    usernameVal: false,
    usernameInput: React.createRef(),
    password: '',
    passwordVal: false,
    passwordInput: React.createRef(),
    confirmPassword: '',
    confirmPasswordVal: false,
    confirmPasswordInput: React.createRef(),
    confirmPasswordInputMatch: React.createRef(),
    website: '',
    websiteVal: false,
    websiteInput: React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault();


    if (validator.isAlpha(this.state.name)) {
      this.setState({
        nameVal: true
      })
      var nameSuccess = this.state.nameInput.current;
      nameSuccess.className = 'hidden';
    } else {
      var nameErr = this.state.nameInput.current;
      nameErr.className = '';
    }

    if (validator.isEmail(this.state.email)) {
      this.setState({
        emailVal: true
      })
      var emailSuccess = this.state.emailInput.current;
      emailSuccess.className = 'hidden';
    } else {
      var emailErr = this.state.emailInput.current;
      emailErr.className = '';
    }

    if (validator.isAlphanumeric(this.state.username)) {
      this.setState({
        usernameVal: true
      })
      var usernameSuccess = this.state.usernameInput.current;
      usernameSuccess.className = 'hidden';
    } else {
      var usernameErr = this.state.usernameInput.current;
      usernameErr.className = '';
    }

    if (validator.isAlphanumeric(this.state.password)) {
      this.setState({
        passwordVal: true
      })
      var passwordSuccess = this.state.passwordInput.current;
      passwordSuccess.className = 'hidden';
    } else {
      var passwordErr = this.state.passwordInput.current;
      passwordErr.className = '';
    }

    if (validator.isAlphanumeric(this.state.confirmPassword)) {
      var confirmPasswordErr = this.state.confirmPasswordInput.current;
      confirmPasswordErr.className = 'hidden';
      if ((this.state.password) === (this.state.confirmPassword)) {
        this.setState({
          confirmPasswordVal: true
        })
        var confirmPasswordErr2 = this.state.confirmPasswordInputMatch.current;
        confirmPasswordErr2.className = 'hidden';
      } else {
        var confirmPasswordErr2 = this.state.confirmPasswordInputMatch.current;
        confirmPasswordErr2.className = '';
      }
    } else {
      var confirmPasswordErr = this.state.confirmPasswordInput.current;
      confirmPasswordErr.className = '';
    }

    if (validator.isURL(this.state.website)) {
      this.setState({
        websiteVal: true
      })
      var websiteSuccess = this.state.websiteInput.current;
      websiteSuccess.className = 'hidden';
    } else {
      var websiteErr = this.state.websiteInput.current;
      websiteErr.className = '';
    }

    if (this.state.nameVal && this.state.emailVal && this.state.usernameVal && this.state.passwordVal && this.state.confirmPasswordVal && this.state.websiteVal) {
      this.props.history.push("/thankYou/");
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div id="profileFormContainer" className="flex-column">
        <form id="profileForm" className="flex-column" onSubmit={this.handleSubmit}>
          <div id="profileFormInner">
            <div>
              <h3>Profile Form - All fields required</h3>
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="name">Name <span ref={this.state.nameInput} className="hidden" >- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="text" id="name" name="name" placeholder="Name - Cannot be blank" value={this.state.name} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="email">Email <span ref={this.state.emailInput} className="hidden">- Please enter a valid email</span></label>
              <input onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email - Please enter a valid email" value={this.state.email} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="username">Username <span ref={this.state.usernameInput} className="hidden">- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="text" id="username" name="username" placeholder="Username - Cannot be blank" value={this.state.username} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="password">Password <span ref={this.state.passwordInput} className="hidden">- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password - Cannot be blank" value={this.state.password} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="confirmPassword">Confirm Password <span ref={this.state.confirmPasswordInput} className="hidden">- Cannot be blank </span><span ref={this.state.confirmPasswordInputMatch} className="hidden-match">- Must match password</span></label>
              <input onChange={this.handleChange} type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password - Cannot be blank" value={this.state.confirmPassword} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="website">Website <span ref={this.state.websiteInput} className="hidden">- Please enter a valid url</span></label>
              <input onChange={this.handleChange} type="url" id="website" name="website" placeholder="Please enter a valid url" value={this.state.website} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;