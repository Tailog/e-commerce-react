import React from 'react';

import './signinpage.scss';

import SignIn from './../../signIn/SignIn';
import SignUp from './../../signup/SignUp';

const SignInPage = ()=>{
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInPage;