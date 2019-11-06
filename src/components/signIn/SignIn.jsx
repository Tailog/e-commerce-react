import React from 'react';

import FormInput from './../formInput/FormInput';
import Button from '../button/Button';

import './signIn.scss';

export default class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      password : '',
      email : ''
    }
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.setState(()=>{
      return {
        password:'',
        email:''
      }
    })
  }

  handleChange = (e)=>{
    const {value,name} = e.target;
    this.setState(()=>{
      return {
        [name]: value
      }
    })
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
          <Button type="submit">
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}