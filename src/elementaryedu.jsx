import React, { Component } from 'react';
import Navigationbar from './navbar';


import './elementaryedu.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const ElementaryEducation = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">ELED 121</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 216</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 300</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 310</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 312</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 313</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 404</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 444</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ELED 612</Dropdown.Item>
  <Dropdown.Divider />

</DropdownButton>

      </div>
</div>
<div class="split right">
  <div class="centered">
  <ul>
      <li>Looking for an Instructor? Press the Dropdown Menu Below.</li>
      
      </ul>
  <DropdownButton id="dropdown-button2" title="Instructors" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">Tyrette S. Carter</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">LaKisha B Roseborough </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ayesha Coleman Swinton</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kellee D Watkins</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Nakeshia N Williams</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Cheryl Thompkins Horton</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Gerrelyn Chunn Patterson</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Stephanie L Ruffin </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jared Neil Webb </Dropdown.Item>
  <Dropdown.Divider />
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default ElementaryEducation;