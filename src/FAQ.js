import React, { Component } from "react";
import Navigationbar from "./navbar";
import {
    ListGroup,
  } from "react-bootstrap";

import BottomNavigationbar from "./bottomnavbar";

function aboutClicked(){
  window.location.href = "/about";
}

function dataClicked(){
  window.location.href = "/policy";
}

function accessClicked(){
  alert("Students Only!")
}

function whoClicked(){
  window.location.href = "/about";
}

function costClicked(){
  alert("It's Free!")
}

const FAQ = () => {
  return (
    <div>
      <div>
        <Navigationbar />
      </div>

      <div>
        <ListGroup>
          <ListGroup.Item action onClick = {aboutClicked}>What is the this software about?</ListGroup.Item>
          <ListGroup.Item action onClick = {dataClicked}>What happens with my data?</ListGroup.Item>
          <ListGroup.Item action onClick = {accessClicked}>Who can use this software?</ListGroup.Item>
          <ListGroup.Item action onClick = {whoClicked}>Who made this?</ListGroup.Item>
          <ListGroup.Item  action onClick = {costClicked}>How much does it cost to use this software?</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BottomNavigationbar />
      </div>
    </div>
  );
};

export default FAQ;
