import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

import '../styles/Navbar.css';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = { key: 0 }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return(
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
              JP
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={ this.state.key } onSelect={ this.handleSelect } >
            <IndexLinkContainer to='/'>
              <NavItem eventKey={1} >
                About
              </NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to='/'>
              <NavItem eventKey={2} >
                Portfolio
              </NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to='/blog'>
              <NavItem eventKey={3} >
                Blog
              </NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to='/photography'>
              <NavItem eventKey={4} >
                Photography
              </NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to='/'>
              <NavItem eventKey={5} >
                Contact
              </NavItem>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
