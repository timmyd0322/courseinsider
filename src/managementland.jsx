import React, { Component } from 'react';
import Navigationbar from './navbar';


import './managementland.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const Management = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">MGMT 110</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 201</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 221</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 260</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 303</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 315</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 321</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 322</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 323</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 330</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 343</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 345</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 347</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 349</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 353</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 355</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 373</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 375</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 398</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 427</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 429</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 430</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 485</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 492</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MGMT 495</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Kimberly L Heckstall </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Raymond L Johnson</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Alice C Stewart</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jason J Caldwell  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Antwon D Foreman </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jorge A Gaytan</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Juliet Ogechi Oriaifo </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Anju Mehta</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Christina Devinn Williamson</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Tanya R Beatty</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Se Ho Cho</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Subrata Chakrabarty</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Michael S Lineberry</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Tiffany Fearrington</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Monica F Speight</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Marka B Fleming</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Rhonda L Hensley </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Richard Weldon Monroe</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Shona Davidson Morgan</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Madelle Bish</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Verona Patrice Edmond</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Christina Tupper</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Patricia E Banks </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Isaiah O Ugboro </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Hong Wang  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Patrick R Rogers   </Dropdown.Item>
  <Dropdown.Divider />


  
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default Management;