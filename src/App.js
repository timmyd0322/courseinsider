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
import COMP_360 from './comp_360';
import COMP_361 from './comp_361';
import COMP_365 from './comp_365';
import COMP_385 from './comp_385';
import COMP_390 from './comp_390';
import COMP_397 from './comp_397';
import COMP_476 from './comp_476';
import COMP_485 from './comp_485';
import COMP_495 from './comp_495';
import COMP_496 from './comp_496';

import prof_siddula from './prof_siddula';
import prof_cho from './prof_cho';
import prof_leflore from './prof_leflore';
import prof_carr from './prof_carr';
import prof_bryant from './prof_bryant';
import prof_kim from './prof_kim';
import prof_xu from './prof_xu';
import prof_yu from './prof_yu';
import prof_esterline from './prof_esterline';
import prof_khorsandroo from './prof_khorsandroo';
import prof_nowaczyk_pioro from './prof_nowaczyk_pioro';
import prof_hinton from './prof_hinton';
import prof_qingge from './prof_qingge';

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
      const res = await fetch("http://localhost:4000/authentication/verify", {
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
        <Route path = '/comp_360' component={COMP_360} />
        <Route path = '/comp_361' component={COMP_361} />
        <Route path = '/comp_365' component={COMP_365} />
        <Route path = '/comp_385' component={COMP_385} />
        <Route path = '/comp_390' component={COMP_390} />
        <Route path = '/comp_397' component={COMP_397} />
        <Route path = '/comp_476' component={COMP_476} />
        <Route path = '/comp_485' component={COMP_485} />
        <Route path = '/comp_495' component={COMP_495} />
        <Route path = '/comp_496' component={COMP_496} />

        <Route path = '/prof_siddula' component={prof_siddula} />
        <Route path = '/prof_leflore' component={prof_leflore} />
        <Route path = '/prof_cho' component={prof_cho} />
        <Route path = '/prof_carr' component={prof_carr} />
        <Route path = '/prof_kim' component={prof_kim} />
        <Route path = '/prof_xu' component={prof_xu} />
        <Route path = '/prof_yu' component={prof_yu} />
        <Route path = '/prof_bryant' component={prof_bryant} />
        <Route path = '/prof_esterline' component={prof_esterline} />
        <Route path = '/prof_khorsandroo' component={prof_khorsandroo} />
        <Route path = '/prof_nowaczyk_pioro' component={prof_nowaczyk_pioro} />
        <Route path = '/prof_hinton' component={prof_hinton} />
        <Route path = '/prof_qingge' component={prof_qingge} />

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
