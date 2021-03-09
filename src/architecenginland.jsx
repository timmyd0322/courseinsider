import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './architecenginland.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const ArchitecturalEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">AREN 112</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">AREN 281</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 344</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 363</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 364</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 387</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 467</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">AREN 486</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Madhuri Siddula</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Iris Ben-Gal </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Robert L Powell</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ahmed C Megri</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Raymond Charles Tesiero</Dropdown.Item>
  <Dropdown.Divider />
 
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default ArchitecturalEngineering;