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
    websiteInput: React.createRef(),

    nameInputBox: React.createRef(),
    emailInputBox: React.createRef(),
    usernameInputBox: React.createRef(),
    passwordInputBox: React.createRef(),
    confirmPasswordInputBox: React.createRef(),
    websiteInputBox: React.createRef(),
    
    nameLabelText: React.createRef(),
    emailLabelText: React.createRef(),
    usernameLabelText: React.createRef(),
    passwordLabelText: React.createRef(),
    confirmPasswordLabelText: React.createRef(),
    websiteLabelText: React.createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault();


    if (validator.isAlpha(this.state.name)) {
      this.setState({
        nameVal: true
      })
      var nameSuccess = this.state.nameInput.current;
      nameSuccess.className = 'hidden';
      var nameInputBoxSuccess = this.state.nameInputBox.current;
      var nameLabelTextSuccess = this.state.nameLabelText.current;
      nameInputBoxSuccess.className = '';
      nameLabelTextSuccess.className = '';
    } else {
      var nameErr = this.state.nameInput.current;
      nameErr.className = '';
      var nameInputBoxErr = this.state.nameInputBox.current;
      var nameLabelTextErr = this.state.nameLabelText.current;
      nameInputBoxErr.className = 'red-border';
      nameLabelTextErr.className = 'red-font';
    }

    if (validator.isEmail(this.state.email)) {
      this.setState({
        emailVal: true
      })
      var emailSuccess = this.state.emailInput.current;
      emailSuccess.className = 'hidden';
      var emailInputBoxSuccess = this.state.emailInputBox.current;
      var emailLabelTextSuccess = this.state.emailLabelText.current;
      emailInputBoxSuccess.className = '';
      emailLabelTextSuccess.className = '';
    } else {
      var emailErr = this.state.emailInput.current;
      emailErr.className = '';
      var emailInputBoxErr = this.state.emailInputBox.current;
      var emailLabelTextErr = this.state.emailLabelText.current;
      emailInputBoxErr.className = 'red-border';
      emailLabelTextErr.className = 'red-font';
    }

    if (validator.isAlphanumeric(this.state.username)) {
      this.setState({
        usernameVal: true
      })
      var usernameSuccess = this.state.usernameInput.current;
      usernameSuccess.className = 'hidden';
      var usernameInputBoxSuccess = this.state.usernameInputBox.current;
      var usernameLabelTextSuccess = this.state.usernameLabelText.current;
      usernameInputBoxSuccess.className = '';
      usernameLabelTextSuccess.className = '';
    } else {
      var usernameErr = this.state.usernameInput.current;
      usernameErr.className = '';
      var usernameInputBoxErr = this.state.usernameInputBox.current;
      var usernameLabelTextErr = this.state.usernameLabelText.current;
      usernameInputBoxErr.className = 'red-border';
      usernameLabelTextErr.className = 'red-font';
    }

    if (validator.isAlphanumeric(this.state.password)) {
      this.setState({
        passwordVal: true
      })
      var passwordSuccess = this.state.passwordInput.current;
      passwordSuccess.className = 'hidden';
      var passwordInputBoxSuccess = this.state.passwordInputBox.current;
      var passwordLabelTextSuccess = this.state.passwordLabelText.current;
      passwordInputBoxSuccess.className = '';
      passwordLabelTextSuccess.className = '';
    } else {
      var passwordErr = this.state.passwordInput.current;
      passwordErr.className = '';
      var passwordInputBoxErr = this.state.passwordInputBox.current;
      var passwordLabelTextErr = this.state.passwordLabelText.current;
      passwordInputBoxErr.className = 'red-border';
      passwordLabelTextErr.className = 'red-font';
    }

    if (validator.isAlphanumeric(this.state.confirmPassword)) {
      var confirmPasswordSuccess = this.state.confirmPasswordInput.current;
      confirmPasswordSuccess.className = 'hidden';
      if ((this.state.password) === (this.state.confirmPassword)) {
        this.setState({
          confirmPasswordVal: true
        })
        var confirmPasswordSuccessMatch = this.state.confirmPasswordInputMatch.current;
        confirmPasswordSuccessMatch.className = 'hidden';
        var confirmPasswordInputBoxSuccess = this.state.confirmPasswordInputBox.current;
        var confirmPasswordLabelTextSuccess = this.state.confirmPasswordLabelText.current;
        confirmPasswordInputBoxSuccess.className = '';
        confirmPasswordLabelTextSuccess.className = '';
      } else {
        var confirmPasswordErrorMatch = this.state.confirmPasswordInputMatch.current;
        confirmPasswordErrorMatch.className = '';
        var confirmPasswordInputBoxErr = this.state.confirmPasswordInputBox.current;
        var confirmPasswordLabelTextErr = this.state.confirmPasswordLabelText.current;
        confirmPasswordInputBoxErr.className = 'red-border';
        confirmPasswordLabelTextErr.className = 'red-font';
      }
    } else {
      var confirmPasswordErr = this.state.confirmPasswordInput.current;
      confirmPasswordErr.className = '';
      var confirmPasswordErrMatch = this.state.confirmPasswordInputMatch.current;
      confirmPasswordErrMatch.className = 'hidden';
      var confirmPasswordInputBoxErr = this.state.confirmPasswordInputBox.current;
      var confirmPasswordLabelTextErr = this.state.confirmPasswordLabelText.current;
      confirmPasswordInputBoxErr.className = 'red-border';
      confirmPasswordLabelTextErr.className = 'red-font';
    }

    if (validator.isURL(this.state.website)) {
      this.setState({
        websiteVal: true
      })
      var websiteSuccess = this.state.websiteInput.current;
      websiteSuccess.className = 'hidden';
      var websiteInputBoxSuccess = this.state.websiteInputBox.current;
      var websiteLabelTextSuccess = this.state.websiteLabelText.current;
      websiteInputBoxSuccess.className = '';
      websiteLabelTextSuccess.className = '';
    } else {
      var websiteErr = this.state.websiteInput.current;
      websiteErr.className = '';
      var websiteInputBoxErr = this.state.websiteInputBox.current;
      var websiteLabelTextErr = this.state.websiteLabelText.current;
      websiteInputBoxErr.className = 'red-border';
      websiteLabelTextErr.className = 'red-font';
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
              <label htmlFor="name" ref={this.state.nameLabelText}>Name <span ref={this.state.nameInput} className="hidden" >- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="text" id="name" name="name" placeholder="Name - Cannot be blank" value={this.state.name} ref={this.state.nameInputBox} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="email" ref={this.state.emailLabelText}>Email <span ref={this.state.emailInput} className="hidden">- Please enter a valid email</span></label>
              <input onChange={this.handleChange} type="email" id="email" name="email" placeholder="Email - Please enter a valid email" value={this.state.email} ref={this.state.emailInputBox} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="username" ref={this.state.usernameLabelText}>Username <span ref={this.state.usernameInput} className="hidden">- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="text" id="username" name="username" placeholder="Username - Cannot be blank" value={this.state.username} ref={this.state.usernameInputBox} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="password" ref={this.state.passwordLabelText}>Password <span ref={this.state.passwordInput} className="hidden">- Cannot be blank</span></label>
              <input onChange={this.handleChange} type="password" id="password" name="password" placeholder="Password - Cannot be blank" value={this.state.password} ref={this.state.passwordInputBox} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="confirmPassword" ref={this.state.confirmPasswordLabelText}>Confirm Password <span ref={this.state.confirmPasswordInput} className="hidden">- Cannot be blank </span><span ref={this.state.confirmPasswordInputMatch} className="hidden-match">- Must match password</span></label>
              <input onChange={this.handleChange} type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password - Cannot be blank" value={this.state.confirmPassword} ref={this.state.confirmPasswordInputBox} />
            </div>
            <div className="flex-column inputContainer">
              <label htmlFor="website" ref={this.state.websiteLabelText}>Website <span ref={this.state.websiteInput} className="hidden">- Please enter a valid url</span></label>
              <input onChange={this.handleChange} type="url" id="website" name="website" placeholder="Please enter a valid url" value={this.state.website} ref={this.state.websiteInputBox} />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;