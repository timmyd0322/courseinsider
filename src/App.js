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
import COMP_121 from './comp_121';
import COMP_161 from './comp_161';
import COMP_163 from './comp_163';
import COMP_180 from './comp_180';
import COMP_200 from './comp_200';
import COMP_267 from './comp_267';
import COMP_280 from './comp_280';
import COMP_285 from './comp_285';
import COMP_300 from './comp_300';
import COMP_320 from './comp_320';
import COMP_322 from './comp_322';
import COMP_350 from './comp_350';

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
        <Route path = '/comp_121' component={COMP_121} />
        <Route path = '/comp_161' component={COMP_161} />
        <Route path = '/comp_163' component={COMP_163} />
        <Route path = '/comp_180' component={COMP_180} />
        <Route path = '/comp_200' component={COMP_200} />
        <Route path = '/comp_267' component={COMP_267} />
        <Route path = '/comp_280' component={COMP_280} />
        <Route path = '/comp_285' component={COMP_285} />
        <Route path = '/comp_300' component={COMP_300} />
        <Route path = '/comp_320' component={COMP_320} />
        <Route path = '/comp_322' component={COMP_322} />
        <Route path = '/comp_350' component={COMP_350} />
        <Route path = '/computerscience' component={ComputerScience} />
        <Route path = '/architecturalengineering' component={ArchitecturalEngineering} />
        <Route path = '/civilengineering' component={CivilEngineering} />
        <Route path = '/chemicalengineering' component={ChemicalEngineering} />
        <Route path = '/bioengineering' component={BioEngineering} />
        <Route path = '/electcompengineering' component={ElectricalEngineering} />
        <Route path = '/industrialengineering' component={IndustrialEngineering} />
        <Route path = '/mechanicalengineering' component={MechanicalEngineering} />
        <Route component ={PageNotFound}></Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}


export default App;
