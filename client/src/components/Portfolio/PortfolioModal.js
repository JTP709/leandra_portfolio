import React from 'react';
import { Modal, Button, Carousel, Row, Col } from 'react-bootstrap';

const PortfolioModal = ({ portfolio, closeModal, showModal }) => (
  <Modal 
    show={ showModal }
    onHide={ closeModal }
    bsSize="large"
    animation
    >
    <Modal.Header closeButton>
      <Modal.Title data-testid="portfolio-modal-title">{ portfolio && portfolio.title }</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Carousel>
        <Carousel.Item>
          <img alt="project-one" src={ portfolio && portfolio.carousel[0].img } />
          <Carousel.Caption>
            <h3>{ portfolio && portfolio.carousel[0].label }</h3>
            <p>{ portfolio && portfolio.carousel[0].subLabel }</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="project-two" src={ portfolio && portfolio.carousel[1].img } />
          <Carousel.Caption>
            <h3>{ portfolio && portfolio.carousel[1].label }</h3>
            <p>{ portfolio && portfolio.carousel[1].subLabel }</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="project-three" src={ portfolio && portfolio.carousel[2].img } />
          <Carousel.Caption>
            <h3>{ portfolio && portfolio.carousel[2].label }</h3>
            <p>{ portfolio && portfolio.carousel[2].subLabel }</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row>
        <Col md={8}>
          <p>{ portfolio && portfolio.about }</p>
        </Col>
        <Col md={2}>
          {
            portfolio && portfolio.front_end ?
            <div>
              <h4>Front End</h4>
              <ul>
                { portfolio && portfolio.front_end.map(item => (
                  <li>{item}</li>
                )) }
              </ul>
            </div> :
            null
          }
        </Col>
        <Col md={2}>
          {
            portfolio && portfolio.back_end ?
            <div>
              <h4>Back End</h4>
              <ul>
                { portfolio && portfolio.back_end.map(item => (
                  <li>{item}</li>
                )) }
              </ul>
            </div> :
            null
          }
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          { portfolio && portfolio.github ? <a href={ portfolio && portfolio.github }>Github</a> : null }
        </Col>
        <Col md={6}>
          { portfolio && portfolio.demo ? <a href={ portfolio && portfolio.demo }>Demo</a> : null }
        </Col>
      </Row>
    </Modal.Body>
    <Modal.Footer>
      <Button data-testid="portfolio-modal-close-button" onClick={ closeModal }>Close</Button>
    </Modal.Footer>
  </Modal>
);

export { PortfolioModal };
export default PortfolioModal;
