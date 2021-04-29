import React, { Component } from 'react';
import Navigationbar from './navbar';


import './marketingland.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const Marketing = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="/">MKTG 230</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 332</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 333</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 335</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 338</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 444</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 445</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 447</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 486</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="/">MKTG 489</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Jacqueline Williams  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Omar Peyton Woodham </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">George W Stone</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kathryn T. Cort</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kimberly R McNeil  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Roland L Leak  </Dropdown.Item>
  <Dropdown.Divider />
  
 
</DropdownButton>
  </div>
</div>
<div>
 
</div>
        </div>

    );
  };


export default Marketing;