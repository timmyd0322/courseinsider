import React from 'react';
import Navigationbar from './navbar';


export class TeacherPage extends React.Component { 
  render(){
    return (
      <div>
        <Navigationbar/>
        <div class="wrapper">
      <div class="one"><center><h1>TeacherName</h1>
      </center>
      </div>
      <div class="two"><center>Two
      </center>
      </div>
      <div class="three"><center>Three
      </center>
      </div>
      <div class="four"><center>Four
      </center>
      </div>
      <div class="five"><center>Five
      </center>
      </div>
      <div class="six"><center>Six
      </center>
      </div>
      </div>
      </div>

      );
    }
}

export default TeacherPage;