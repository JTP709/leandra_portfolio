import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';
import '../styles/Services.css';

const Services = () => (
  <Row className='Services'>
    <Col md={12} className='Services--header'>
      <h1>Services</h1>
      <hr />
    </Col>
    <Col md={4}>
      <div className='Services--content'>
        <Glyphicon className='Services--icon-large' glyph='heart' />
        <p>Making apps with love, because please don't make me go back to my last job!</p>
      </div>
    </Col>
    <Col md={4}>
      <div className='Services--content'>
        <Glyphicon className='Services--icon-large' glyph='phone' />
        <p>Apps you can use on your phone, because unless you're a PC gamer that's what everyone is using.</p>
      </div>
    </Col>
    <Col md={4}>
      <div className='Services--content'>
        <Glyphicon className='Services--icon-large' glyph='piggy-bank' />
        <p>I save you money so you can spend more on my services! Because your customers are spending more on you! I don't know... economics?</p>
      </div>
    </Col>
  </Row>
);

export default Services;