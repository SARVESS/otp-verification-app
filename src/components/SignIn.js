import React from 'react';

// Dropdown Component to select direction
const SignIn = (props) => {
  return (
    <div className="signin-div">
     
      <div className="logo-div">
      </div>
      <div className="welcome-div">
        <p className="welcome-back-para">Welcome Back</p>
        <p className="welcome-sign-para">Please sign in to your account</p>
      </div>
     
      <div className="input-div">
        <input className="inp-tag">
        </input>
      </div>
      

      <div className="terms-para"> <p>We will send you a one time SMS meassage.</p> Charges may apply. </div>

      <div className="btn-div">
        <p className="span-btn">Sign in with OTP </p>    
      </div>
    </div>
  );
};

export default SignIn;
