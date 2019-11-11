import React from 'react';

import FormInput from './../formInput/FormInput';
import Button from '../button/Button';
import {auth,signInWithGoogle} from '../../store/firebase';

import './signIn.scss';

export default class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      password : '',
      email : ''
    }
  }

  handleSubmit = async (e)=>{
    e.preventDefault();

    const {email, password} = this.state;

    try{
      await auth.signInWithEmailAndPassword(email,password);
      this.setState(() => {
        return {
          password: "",
          email: ""
        };
      });
    }catch(error){
      console.log(error);
    }
  }

  handleChange = (e)=>{
    const {value,name} = e.target;
    this.setState(()=>{
      return {
        [name]: value
      }
    })
  }

  handleSignInGoogle =(e)=>{
    e.preventDefault();
    signInWithGoogle();
  }

  render(){
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button onClick={this.handleSignInGoogle} isGoogleSignIn >Sign In With Google</Button>
          </div>
        </form>
      </div>
    );
  }
}