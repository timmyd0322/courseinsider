import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';



const Navigationbar = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href='/home'>Course-Insider</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="College Of Engineering" id="collasible-nav-dropdown1">
        <NavDropdown.Item href="/architecturalengineering">Architectural Engineering</NavDropdown.Item>
        <NavDropdown.Item href="/civilengineering">Civil Engineering</NavDropdown.Item>
        <NavDropdown.Item href='/chemicalengineering'>Chemical Engineering</NavDropdown.Item>
        <NavDropdown.Item href='/bioengineering'>Biological/Bio Engineering</NavDropdown.Item>
        <NavDropdown.Item href="/computerscience">Computer Science</NavDropdown.Item>
        <NavDropdown.Item href='/electcompengineering'>Electrical/Computer Engineering</NavDropdown.Item>
        <NavDropdown.Item href='/industrialengineering'>Industrial and Systems Engineering</NavDropdown.Item>
        <NavDropdown.Item href='/mechanicalengineering'>Mechanical Engineering </NavDropdown.Item>
      </NavDropdown>
    <NavDropdown title="College Of Education" id="collasible-nav-dropdown2">
        <NavDropdown.Item href="/elementaryeducation">Elementary Education</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="College of Business and Economics" id="collasible-nav-dropdown3">
        <NavDropdown.Item href="accounting">Accounting</NavDropdown.Item>
        <NavDropdown.Item href="finance">Finance</NavDropdown.Item>
        <NavDropdown.Item href="economics">Economics</NavDropdown.Item>
        <NavDropdown.Item href="management">Management</NavDropdown.Item>
        <NavDropdown.Item href="marketing">Marketing</NavDropdown.Item>
        <NavDropdown.Item href="supplyChainManagement">Supply Chain Management</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="College of Arts Humanities and Social Sciences" id="collasible-nav-dropdown4">
        <NavDropdown.Item href="#action/4.1">Criminal Justice</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.2">English Literature</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.3">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">History</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Political Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">History, Secondary Education</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Journalism and Mass Communication</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Liberal Studies </NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Visual Arts</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Secondary Education (Art Education)</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Professional Theatre</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">Music</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="College of Agriculture and E.S." id="collasible-nav-dropdown5">
        <NavDropdown.Item href="#action/5.1">Agricultural and Environmental Systems </NavDropdown.Item>
        <NavDropdown.Item href="#action/5.2">Agricultural Education </NavDropdown.Item>
        <NavDropdown.Item href="#action/5.3">Animal Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Child Development and Family Studies</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Family And Consumer Sciences </NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Food And Nutritional Sciences </NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Biological Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/5.4">Landscape Architecture</NavDropdown.Item>

      </NavDropdown>
    </Nav>
    <Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Navbar sticky="top" />
      </div>

  );
};
export default Navigationbar;

