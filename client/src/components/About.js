import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
// import '../styles/About.css';

const About = () => 
	<Row className='About'>
		<Col xs={12} className='About--header'>
			<h1>About Me</h1>
			<hr />
		</Col>
		<Col xs={12} md={3}>
			<Image className='About--image' src="https://placedog.net/250/250" alt="Profile Picture" responsive />
		</Col>
		<Col xs={12} md={9} className='About--text'>
			<p>Hi! I'm a dude, playin a dude, disguised as another dude!</p>
			<p>You'll find my portfolio showcasing examples of my work. I'll also routinely post blogs detailing my many adventures.</p>
		</Col>
	</Row>;

export default About;
