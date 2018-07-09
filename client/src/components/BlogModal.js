import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../utils/utils';

class BlogModal extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { showModal, blogModal, updateShowModal } = this.props;
    const { title, author_date, body, thumbnail } = blogModal;

    const dateObject = new Date(author_date);
    return (
      <Modal 
        show={showModal}
        onHide={ () => { updateShowModal(false) } }
        bsSize="large"
        animation
      >
        <Modal.Header closeButton>
          <Modal.Title>{ formatDate(dateObject) }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{ title }</h2>
          <img src={ thumbnail } alt="blog thumbnail" />
          <ReactMarkdown source={ body } />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ () => { updateShowModal(false) } }>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BlogModal;
