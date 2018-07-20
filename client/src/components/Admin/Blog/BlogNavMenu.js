import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Col,
  Nav,
  NavItem
} from 'react-bootstrap';
import { push } from 'connected-react-router';
import { redirectNewBlogForm } from '../../../actions/actionCreators';
import { getPathname } from '../../../reducers/rootReducer';

class BlogNavMenu extends Component {
  constructor(){
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key){
    const { push, redirectNewBlogForm } = this.props;
    if (key === 1) { push("/admin/blog") }
    if (key === 2) { redirectNewBlogForm() }
    if (key === 3) { push("/admin/blog/filters") }
  }

  render(){
    const { pathname } = this.props;
    let key;
    if (pathname === "/admin/blog") { key = 1 }
    if (pathname === "/admin/blog/new") { key = 2 }
    if (pathname === "/admin/blog/filters") { key = 3 }
    return (
      <Col xs={12} md={2}>
        <Nav bsStyle="pills" stacked activeKey={key} onSelect={this.handleSelect}>
          <NavItem eventKey={1} >
            Blogs Dashboard
          </NavItem>
          <NavItem eventKey={2} >
            Add New Blog
          </NavItem>
          <NavItem eventKey={3} >
            Filter
          </NavItem>
        </Nav>
      </Col>
    )
  }
}

const mapStateToProps = (state) => {
  const pathname = getPathname(state);
  return {
    pathname
  }
}

const mapDispatchToProps = {
  push,
  redirectNewBlogForm
}

const enhance = connect(mapStateToProps, mapDispatchToProps)(BlogNavMenu);

export default enhance;
