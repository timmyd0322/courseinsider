import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './chemenginland.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const ChemicalEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">CHEN 121</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">CHEN 200</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 218</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 226</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 300</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 312</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 320</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 330</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 340</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 410</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 440</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 448</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">CHEN 465</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Omar M Basha</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Yusuf G Adewuyi  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kennita Adrian Johnson </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jianzhong Lou </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">John P Kizito</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Vinayak N Kabadi </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Mohammad A Azad</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Omar M Basha</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Shamsuddin Ilias</Dropdown.Item>
  <Dropdown.Divider />
 
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default ChemicalEngineering;