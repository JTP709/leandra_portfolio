import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { formatDate } from '../../utils/utils';

const BlogModal = ({ showModal, blogModal, updateShowModalFalse }) => {
  const { title, author_date, body, header_img } = blogModal;
  const dateObject = new Date(author_date);

  return (
    <Modal 
      show={showModal}
      onHide={ () => updateShowModalFalse() }
      bsSize="large"
      animation
    >
      <Modal.Header closeButton>
        <Modal.Title>{ formatDate(dateObject) }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image responsive src={ header_img } alt="blog thumbnail" />
        <h2>{ title }</h2>
        <ReactMarkdown source={ body } />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ () => updateShowModalFalse() }>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlogModal;
