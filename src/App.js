import React from 'react';
import './App.scss';

import Header from './components/header/Header';
import HomePage from './components/Pages/homePage/HomePage';
import ShopPage from './components/Pages/shop/ShopPage';
import SignInPage from './components/Pages/signIn-signUp/SignInPage';
import NotFound from './components/404/NotFound';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
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

export default App;
