import React, { Fragment, useState, useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import { toast } from 'react-toastify';

//components

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

// import Login from './Login';
// import Register from './Register'
// import Dashboard from './Dashboard';

import Login from './Login';
import Register from './Register'
import Dashboard from './Dashboard';
import About from './about';
import Policy from './policy';
import FAQ from './FAQ';



toast.configure();

function App() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
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
              path='/dashboard/'
              render={props =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to='/login' />
                )
              }
            />
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
        <Route path = '/about' component={About} />
        <Route path = '/policy' component={Policy} />
        <Route path = '/faq' component={FAQ} />
        <Route component ={PageNotFound}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}


export default App;
