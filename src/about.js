import React, { Component } from 'react';
import Navigationbar from './navbar';

import BottomNavigationbar from './bottomnavbar';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const About = () => {
  
    return (
<div>
    <div>
    <Navigationbar/>
    </div>

    <div>
        <h1>
            About Course Insider
        </h1>
    </div>
<CardGroup>
  <Card>
    
    <Card.Body>
      <Card.Title>Who Made Course Insider</Card.Title>
      <Card.Text>
        Course Insider was made by three Computer Science students at North Carolina Agricultural and Technical State 
        University Seniors that wanted to see a better learning out come for students that are coming under them.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Why was Course Insider Made?</Card.Title>
      <Card.Text>
      The purpose or existence of Course Insider is better help North Carolina AT students be more prepared
for classes. There is a long gap from when you sign up for classes from when you start, and Course
Insider is a tool that helps them be more prepared by letting them be able to see the teachers and
courses they are signing up for. Also, Course Insider gives the students the ability to read and write
reviews on instructors and get useful information on classes as such as past syllabus. Course Insider is
made for students to know whats ahead to be prepared for the semester because I have seen too many
times where the semester catches a lot of people of guard when its start and them not fully knowing
what a class Intel’s. We want all Aggie students to be ready for the semester when it starts and even
having a few months head start would not hurt.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>The impact of Course Insider</Card.Title>
      <Card.Text>
        With Course Insider fully implemented we would hope for all NCAT students past and present to actively be using the application
        to help the current students be more prepared for their classes. There is alot a people that say they are not ready for this semester when
        it starts and we want to lessen those commentsl.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted"></small>
    </Card.Footer>
  </Card>
</CardGroup>
<div>
    <BottomNavigationbar/>
</div>
</div>


  );
};

export default About;