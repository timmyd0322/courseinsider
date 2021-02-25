import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Login from "./components/Login";
import HomePage from './components/Home';


<Route path="/login">
  <Login />
  <Route exact path = "/home" component={HomePage}/>
</Route>