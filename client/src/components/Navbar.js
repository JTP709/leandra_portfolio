import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Navbar.css';

const Navbar = () =>
  <Nav navbar>
    <LinkContainer to='/'>
      <NavItem>
        Home
      </NavItem>
    </LinkContainer>
    <LinkContainer to='/'>
      <NavItem>
        About
      </NavItem>
    </LinkContainer>
    <LinkContainer to='/'>
      <NavItem>
        Portfolio
      </NavItem>
    </LinkContainer>
    <LinkContainer to='/blog'>
      <NavItem>
        Blog
      </NavItem>
    </LinkContainer>
    <LinkContainer to='/photography'>
      <NavItem>
        Photography
      </NavItem>
    </LinkContainer>
    <LinkContainer to='/'>
      <NavItem>
        Contact
      </NavItem>
    </LinkContainer>
  </Nav>

export default Navbar;
