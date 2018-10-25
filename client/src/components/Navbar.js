import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { getPathname, scrollToAbout, scrollToPortfolio } from 'site-redux';

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
    const home = <NavItem eventKey ={1} >
      Home
    </NavItem>
    // TODO: fix nav with anchor points AND change eventKey!
    const about = <NavItem onClick={ this.props.scrollToAbout } eventKey={1} >
        About
      </NavItem>

    const portfolio = <NavItem onClick={ this.props.scrollToPortfolio } eventKey={2} >
        Portfolio
      </NavItem>

    const blog = <NavItem eventKey={2} >
        Blog
      </NavItem>

    const photography = <NavItem eventKey={3} >
        Photography
      </NavItem>

    const contact = <NavItem eventKey={4} >
        Contact
      </NavItem>

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
            {/* 
              {
                this.props.pathname === '/'
                  ? [about, portfolio]
                  : [
                      <IndexLinkContainer to='/'>
                        { about }
                      </IndexLinkContainer>,
                      <IndexLinkContainer to='/'>
                        { portfolio }
                      </IndexLinkContainer>
                    ]
              } 
            */}

            {/* placeholder hom until nav works */}
            <IndexLinkContainer to='/'>
              { home }
            </IndexLinkContainer>
            <IndexLinkContainer to='/about'>
              { about }
            </IndexLinkContainer>
            <IndexLinkContainer to='/portfolio'>
              { portfolio }
            </IndexLinkContainer>
            {/* end placeholder */}

            <IndexLinkContainer to='/blog'>
              { blog }
            </IndexLinkContainer>
            <IndexLinkContainer to='/photography'>
              { photography }
            </IndexLinkContainer>
            <IndexLinkContainer to='/contact'>
              { contact }
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({ pathname: getPathname(state) });

export { Navigation }
export default connect(mapStateToProps, { scrollToAbout, scrollToPortfolio })(Navigation);
