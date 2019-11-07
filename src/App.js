import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/pages/homePage/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import SignInPage from './components/pages/signIn-signUp/SignInPage';
import NotFound from './components/404/NotFound';
import {auth} from './store/firebase';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
