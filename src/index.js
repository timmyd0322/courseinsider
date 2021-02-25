import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Pages

import HomePage from './home';

import CoursePage from './course';
import TeacherPage from './teacher';
import PageNotFound from './404';
import { Login, Register } from './components/login/index';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        
        <Route exact path = '/login' component={ Login, Register}/>
        <Route path = "/home" component={HomePage} />
        <Route path = "/teacher" component={TeacherPage} />
        <Route path = "/course" component={CoursePage} />
        <Route component ={PageNotFound}></Route>
      </Switch>
    </Router>
    
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
