import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './bioengin.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const BioEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">BIOE 121</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">BIOE 216</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 320</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 332</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 350</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 423</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 424</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 425</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 490</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">BIOE 496</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Niroj Aryal </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Laurent M Ahiablame </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Lijun Wang </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Abolghasem Shahbazi </Dropdown.Item>
  <Dropdown.Divider />
  
 
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default BioEngineering;