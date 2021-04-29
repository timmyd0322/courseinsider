import React, { Component } from 'react';
import Navigationbar from './navbar';


import './accountingland.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const Accounting = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">ACCT 202</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 210</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 221</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 222</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 326</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 331</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 332</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 344</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 362</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 443</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 455</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 461</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">ACCT 495</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Gwendolyn J Highsmith-Quick</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Bivian O Ejimakor</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Latesha M Byrd </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Charles F Malone </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Malissa L Davis </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Nicole Renee McCoy</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Stephen T Peoples</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Shernelia G Hawkins  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ronald L Campbell</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Helen R Buck</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Peter M Theuri </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Cynthia Jones Khanlarian</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Brandis Phillips </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kecia Williams Smith</Dropdown.Item>
  <Dropdown.Divider />
  
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default Accounting;