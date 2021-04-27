import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './compscilanding.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const ComputerScience = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/comp_121">COMP 121</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_161">COMP 161</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_163">COMP 163</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_180">COMP 180</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_200">COMP 200</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_267">COMP 267</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_280">COMP 280</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_285">COMP 285</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_300">COMP 300</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_320">COMP 320</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_322">COMP 322</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_350">COMP 350</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_360">COMP 360</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_361">COMP 361</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_365">COMP 365</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_385">COMP 385</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_390">COMP 390</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_397">COMP 397</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_476">COMP 476</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_485">COMP 485</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_494">COMP 494</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_495">COMP 495</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/comp_496">COMP 496</Dropdown.Item>
</DropdownButton>

      </div>
</div>
<div class="split right">
  <div class="centered">
  <ul>
      <li>Looking for an Instructor? Press the Dropdown Menu Below.</li>
      
      </ul>
  <DropdownButton id="dropdown-button2" title="Instructors" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">Madhuri Siddula</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Isaac Cho </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Derrick A Leflore</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Edward Corwith Carr</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kelvin S. Bryant</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jung Hee Kim </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jinsheng Xu</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Huiming A Yu</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Albert C Esterline </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sajad Khorsandroo</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Barbara T Nowaczyk-Pioro </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Cornelius Marlow Hinton</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Letu Qingge</Dropdown.Item>
  <Dropdown.Divider />
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default ComputerScience;