import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/Stack.css';

const Stack = () => (
  <Row className='Stack'>
    <Col className='Stack--header' md={12}>
      <h1>Technologies</h1>
      <hr/>
    </Col>
      <Col md={4} className='Stack--contentTech' >
        <h2>Core</h2>
        <span className='Stack--contentTechItem' >Javascript</span>
        <span className='Stack--contentTechItem' >Node</span>
        <span className='Stack--contentTechItem' >HTML5</span>
        <span className='Stack--contentTechItem' >CSS3</span>
        <span className='Stack--contentTechItem' >Kotlin</span>
        <span className='Stack--contentTechItem' >Python</span>
        <span className='Stack--contentTechItem' >Java</span>
        <span className='Stack--contentTechItem' >MongoDb</span>
        <span className='Stack--contentTechItem' >PostgreSQL</span>
      </Col>
      <Col md={4} className='Stack--contentTech'>
        <h2>Libraries</h2>
        <span className='Stack--contentTechItem' >React</span>
        <span className='Stack--contentTechItem' >Redux</span>
        <span className='Stack--contentTechItem' >Express</span>
        <span className='Stack--contentTechItem' >jQuery</span>
        <span className='Stack--contentTechItem' >Spring</span>
        <span className='Stack--contentTechItem' >Flask</span>
        <span className='Stack--contentTechItem' >Bootstrap</span>
      </Col>
      <Col md={4} className='Stack--contentTech'>
        <h2>Other</h2>
        <span className='Stack--contentTechItem' >Mobile and Responsive Design</span>
        <span className='Stack--contentTechItem' >Photoshop</span>
        <span className='Stack--contentTechItem' >Linux (Ubuntu)</span>
        <span className='Stack--contentTechItem' >Coffee Consumption</span>
      </Col>
  </Row>
)

export default Stack;
