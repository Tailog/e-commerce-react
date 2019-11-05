import React from 'react';
import './App.css';

import HomePage from './components/Pages/HomePage/HomePage';
import NotFound from './components/404/NotFound';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='*' component={NotFound} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
