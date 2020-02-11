
import React, { Alert, Component } from "react";
import LoginModal from "react-login-modal-sm";
const Example = (props) => {
  return (
    <div>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
    </div>
  );
};

export default class Createtutor extends Component {
  state = {
    showModal: false,
    signup:false
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  handleLoginWithFacebook = () => {
    // Do something when 'Login with Facebook' is clicked
    console.log("Login with Facebook...");
  };

  handleSignupByEmail = (email, username, password) => {
    // Do something when 'Signup by email' is clicked
    const data = { 
      name: username,
      email:email,
      password: password
    };
    fetch('http://localhost:3002/addtutor', { 
      method: 'POST', // or 'PUT'
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then((result) => result.json())
      .then((res) => {
      //  alert("A New Tutor created Successfully")
       this.setState({ showModal: false});

      console.log('Success:', res);
      })
      .catch((error) => {
      console.error('Error:', error);
      });

    //.....
    
    //....
      console.log("Sign up by email...");
      };
   
  render() {
    const customUsernameRegex = /^[a-zA-Z0-9_]{5,}/;
    var customProps ={
      loginTitle: "Log in",
      signupTitle: "Create new user",
      forgotTitle: "Reset password",
      loginFacebookButton: "Log in with Facebook",
      loginGoogleButton: "Log in with Google",
      loginEmailButton: "Log in with email",
      signupFacebookButton: "Sign up with Facebook",
      signupGoogleButton: "Sign up with Google",
      signupEmailButton: "Sign up with email",
      forgotButton: "Send new password",
      loginEmailPlaceholder: "Type email",
      loginPasswordPlaceholder: "Type password",
      signupUsernamePlaceholder: "Type username",
      signupLink: "Create new user?",
      loginLink: "Already a user?",
      forgotLink: "Forgot password?",
      orLabel: "or"
    }
if (this.state.signup){
  setTimeout(() => {
    customProps.signupEmailButton="please wait..";
  }, 2000);
}


return (
      <div className="App">
        <LoginModal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          onLoginFacebook={this.handleLoginWithFacebook}
          onSignupEmail={this.handleSignupByEmail}
          usernameRegex={customUsernameRegex}
          labels={customProps}
        />
        <button
          className="test-btn btn btn-primary btn-md"
          onClick={this.toggleModal}
         >
          Teach On Padhlo
        </button>
      {/* {this.showModal ? <Example /> :'chup'} */}
        
      </div>
    );
  }
}