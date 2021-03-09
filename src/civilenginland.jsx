import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './civilenginland.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const CivilEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">CIEN 281</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">CIEN 310</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 311</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 320</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 364</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 405</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 453</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 483</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CIEN 484</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Joshua D Robbins </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Renzun Zhao </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Tameka D Coly</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Miguel Picornell-Darder</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Salah Mohamed Amer</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Manoj Kumar Jha </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Dale B McKinney </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Juhann C Waller</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sameer A Hamoush </Dropdown.Item>
  <Dropdown.Divider />
 
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default CivilEngineering;