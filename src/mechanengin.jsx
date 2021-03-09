import React, { Component } from 'react';
import Navigationbar from './navbar';

import { makeStyles } from '@material-ui/core/styles';
import './mechanengin.scss';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Dropdown} from 'react-bootstrap';



const MechanicalEngineering = () => {
  
    return (
        <div>
         
             <Navigationbar/>
             
             <div class="split left">
            <div class="centered">  
            <ul>
      <li>Looking for a Course? Press the Dropdown Menu Below.</li>
      
      </ul>
            <DropdownButton id="dropdown-button1" title="Courses" size="lg" variant="secondary">
  <Dropdown.Item href="#/action-1">MEEN 104</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">MEEN 202</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 210</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 230</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 231</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 232</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 233</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 241</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 260</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 261</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 267</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 316</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 317</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">ISEN 318</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 319</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 321</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 324</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 341</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 343</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 361</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 363</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 404</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 421</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 424</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 425</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 433</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 435</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 451</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 465</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 481</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 482</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">MEEN 492</Dropdown.Item>
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
  <Dropdown.Item href="#/action-1">Daniel K Acree </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-2">Simon Regier Esau </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sanjiv Sarin</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Theophilus Okore Hanson   </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Frederick Ferguson	</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Vernal G Alford</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sae Il Jeon </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Kunigal Shivakumar   </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Paul Mawugnon Akangah  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Jagannathan Sankar  </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Dhananjay Kumar</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">DeRome Osmond Dunn</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">John P Kizito </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Michael D Atkinson </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Sun Yi</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Mookesh Dhanasar </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Daniel H Richards </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">David L Carmon </Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item href="#/action-3">Adrian I Cuc</Dropdown.Item>
  <Dropdown.Divider />
  
</DropdownButton>
  </div>
</div>

        </div>

    );
  };


export default MechanicalEngineering;