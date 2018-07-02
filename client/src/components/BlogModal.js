import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../utils/utils';

class BlogModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.handleModal(false);
  }

  handleShow() {
    this.props.handleModal(true);
  }

  render() {
    const { title, date, body, thumbnail } = this.props.blogModal;
    const dateObject = new Date(date);
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ formatDate(dateObject) }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="blog thumbnail" />
          <ReactMarkdown source={ body } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BlogModal;
