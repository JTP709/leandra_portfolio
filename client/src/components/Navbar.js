import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../styles/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <Nav navbar>
        <NavItem href="#">
          Home
        </NavItem>
        <NavItem href="#about_section">
          About
        </NavItem>
        <NavItem href="#work_section">
          Blog
        </NavItem>
        <NavItem href="#work_section">
          Portfolio
        </NavItem>
        <NavItem href="#work_section">
          Photography
        </NavItem>
      </Nav>
    )
  }
}

export default Navbar;
