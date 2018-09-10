import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getScrollToRef } from 'site-redux';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    // this.props.location !== prevProps.location && this.props.scrollToRef && window.scrollTo(0, 0)
  }

  render() {
    return this.props.children
  };
}

const mapStateToProps = state => ({ scrollToRef: getScrollToRef(state) })

const enhance = connect(mapStateToProps)(ScrollToTop)

export default withRouter(enhance)