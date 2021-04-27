import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



const BottomNavigationbar = () => {
    return (
        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Course Insider</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/policy">Policy</Nav.Link>
      <Nav.Link href="/FAQ">FAQ</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Navbar sticky="bottom" />
      </div>

  );
};
export default BottomNavigationbar;
