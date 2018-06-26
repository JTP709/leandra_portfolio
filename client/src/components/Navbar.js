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

/*
<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#services">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
*/
