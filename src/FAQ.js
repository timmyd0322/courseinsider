import React, { Component } from "react";
import Navigationbar from "./navbar";
import {
    ListGroup,
  } from "react-bootstrap";

import BottomNavigationbar from "./bottomnavbar";

const FAQ = () => {
  return (
    <div>
      <div>
        <Navigationbar />
      </div>

      <div>
        <ListGroup>
          <ListGroup.Item>What is the this software about?</ListGroup.Item>
          <ListGroup.Item>What happens with my data?</ListGroup.Item>
          <ListGroup.Item>Who can use this software?</ListGroup.Item>
          <ListGroup.Item>Who made this?</ListGroup.Item>
          <ListGroup.Item>How much does it cost to use this software?</ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BottomNavigationbar />
      </div>
    </div>
  );
};

export default FAQ;
