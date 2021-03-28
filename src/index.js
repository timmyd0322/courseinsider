import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


//Pages

import HomePage from './home';

import CoursePage from './course';
import TeacherPage from './teacher';
import PageNotFound from './404';

import ComputerScience from './compscilanding';
import ArchitecturalEngineering from './architecenginland';
import CivilEngineering from './civilenginland';
import ChemicalEngineering from './chemenginland';
import BioEngineering from './bioengin';
import ElectricalEngineering from './electricengin';
import IndustrialEngineering from './indusengin';
import MechanicalEngineering from './mechanengin';

import Login from './Login';
import Register from './Register'
import Dashboard from './Dashboard';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router>
     <Switch>
     <Route path = '/home' component={HomePage} />
        <Route path = '/teacher' component={TeacherPage} />
        <Route path = '/course' component={CoursePage} />
        <Route path = '/computerscience' component={ComputerScience} />
        <Route path = '/architecturalengineering' component={ArchitecturalEngineering} />
        <Route path = '/civilengineering' component={CivilEngineering} />
        <Route path = '/chemicalengineering' component={ChemicalEngineering} />
        <Route path = '/bioengineering' component={BioEngineering} />
        <Route path = '/electcompengineering' component={ElectricalEngineering} />
        <Route path = '/industrialengineering' component={IndustrialEngineering} />
        <Route path = '/mechanicalengineering' component={MechanicalEngineering} />

        <Route
              exact
              path='/login'
              render={props =>
                !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/dashboard' />
                )
              }
            />
            <Route
              exact
              path='/register'
              render={props =>
                !isAuthenticated ? (
                  <Register {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/dashboard' />
                )
              }
            />
            <Route
              exact
              path='/dashboard'
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />

        <Route component ={PageNotFound}></Route>
     </Switch>
    </Router> */}
    <App/>
    
  </React.StrictMode>,
  
//<Switch>
//<Route path="/home" render={() => <HomePage />} />
//</Switch>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
