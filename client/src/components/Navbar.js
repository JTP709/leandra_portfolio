import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import '../styles/Navbar.css';

const Navbar = () =>
  <Nav navbar>
    <NavItem href="#">
      Home
    </NavItem>
    <NavItem href="#about_section">
      About
    </NavItem>
    <NavItem href="#work">
      Work
    </NavItem>
    <NavItem href="#contact">
      Contact
    </NavItem>
  </Nav>

export default Navbar;
