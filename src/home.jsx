
import React, { Component } from 'react';
import Navigationbar from './navbar';
import Particles from './particles';



const HomePage = () => {
    return (
      
      <div>
        <Navigationbar/>
      <center>
        <h1>Welcome to Course Insider!
        </h1>
        <p>With Course Insider You as a student will be able to browse and view classes and instructors you may have in the future. Course Insider gives you alot of different ways to search for who you are looking for. You can search by instructor or class or even use the navigation Bar to look for whatever you need.</p>
        <input type="text" placeholder="Search by Instructor..."/>

      </center>
      <div>
      <center>
        <h2>
          OR
        </h2>
        <input type="text" placeholder="Search by Course..."/>
      </center>
      
      </div>
      </div>
      

  );
};

export default HomePage;