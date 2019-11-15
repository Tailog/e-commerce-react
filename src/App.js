import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/pages/homePage/HomePage';
import ShopPage from './components/pages/shop/ShopPage';
import SignInPage from './components/pages/signIn-signUp/SignInPage';
import NotFound from './components/404/NotFound';
import {auth,createUserProfileDocument} from './store/firebase';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userAction';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        //Store the userRef to be able to retrieve some data from the user
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot)=>{
          setCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        setCurrentUser(userAuth);
      }
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    const {currentUser} = this.props;
    return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route 
            exact 
            path="/signin" 
            render={()=>
              currentUser ? (
                  <Redirect to='/'/>
                ) : (
                  <SignInPage/>
                )
            }/>
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  currentUser : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
