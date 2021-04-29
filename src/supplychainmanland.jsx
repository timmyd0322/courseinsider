import React, { Component } from 'react';
import Navigationbar from './navbar';


import './supplychainmanland.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const SupplyChainManagement = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">SCMG 240</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 260</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 325</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 331</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 350</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 471</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 473</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 480</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">SCMG 493</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Joseph R Huscroft </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Arim Park </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ahren Johnston </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Amit Sundeep Malhan </Dropdown.Item>
  <Dropdown.Divider />
  
  
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default SupplyChainManagement;