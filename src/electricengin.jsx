import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './electricengin.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const ElectricalEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">ECEN 112</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">ECEN 200</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 206</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 212</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 218</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 227</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 300</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 306</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 320</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 323</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 325</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 326</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 329</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 340</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 351</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 356</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 357</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 375</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 400</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 410</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 421</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 441</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 447</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 450</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 452</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 457</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 460</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 461</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 462</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 466</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 474</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 478</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ECEN 479</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Christopher K Horne </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Tadilo E Bogale </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Stephen C Crist</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kory L Bennett </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Mahmoud Nabil Mahmoud </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jung H Kim </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Numan S Dogan</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Christopher C Doss</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Binbin Yang</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Walter M Gilmore </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">William W Edmonson </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Daniel B Limbrick </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ioannis Raptis</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Corey Albert Graves</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">John C Kelly</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Binbin Yang</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Tadilo E Bogale</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Zhijian Xie </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Hieu T Nguyen</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ali R Osareh</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Ali A Abul-Fadl</Dropdown.Item>
  <Dropdown.Divider />
 
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default ElectricalEngineering;