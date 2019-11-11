import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/pages/homePage/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import SignInPage from './components/pages/signIn-signUp/SignInPage';
import NotFound from './components/404/NotFound';
import {auth,createUserProfileDocument} from './store/firebase';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        //Store the userRef to be able to retrieve some data from the user
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({currentUser:userAuth})
      }
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
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
