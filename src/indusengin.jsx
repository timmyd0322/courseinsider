import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './indusengin.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const IndustrialEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">ISEN 121</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">ISEN 162</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 255</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 260</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 286</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 324</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 370</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 380</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 386</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 435</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 440</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 458</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 465</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 472</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 473</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 480</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 486</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 495</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Paul Michael Stanfield </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Stephen J Oneyear  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sanjiv Sarin</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jacqueline A Chestnut </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Zhichao Li </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jeffrey Kenard Ingram</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Steven Xiaochun Jiang </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Faisal M Alkaabneh  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Lauren Davis </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Michael Andre Hamilton </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Younho Seong </Dropdown.Item>
  <Dropdown.Divider />
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default IndustrialEngineering;