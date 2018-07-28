import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
// import '../styles/About.css';

const About = () => 
	<Row id="about_section">
		<Col xs={12} className="about_header">
			<h1>About Me</h1>
			<hr />
		</Col>
		<Col xs={12} md={3}>
			<Image id="profile_picture" src="https://placedog.net/250/250" alt="Profile Picture" responsive />
		</Col>
		<Col xs={12} md={9} className="about_information">
			<p>Hi! I'm a dude, playin a dude, disguised as another dude!</p>
			<p>You'll find my portfolio showcasing examples of my work. I'll also routinely post blogs detailing my many adventures.</p>
		</Col>
	</Row>;

export default About;
