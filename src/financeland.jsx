import React, { Component } from 'react';
import Navigationbar from './navbar';


import './financeland.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const Finance = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">FIN 279</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">FIN 343</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">FIN 355</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">FIN 356</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">FIN 451</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">FIN 485</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Stephen T Peoples </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Eunho Cho </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Nazmul Hasan Bhuyan</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Collins Emeka Okafor </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Geoffrey A Vanderpal </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jennifer N Williams </Dropdown.Item>
  <Dropdown.Divider />
  
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default Finance;