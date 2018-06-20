import React, { Component } from 'react';
import { Image, Col, Row } from 'react-bootstrap';
// import '../styles/About.css';

class About extends Component {
	render() {
		return (
			<Row className="about_section">

				<Col xs={12} md={3}>
					<Image id="profile_picture" src="http://via.placeholder.com/250x250" alt="Profile Picture" responsive />
				</Col>

				<Col xs={12} md={9} className="about_information">
					<p>Hi! I'm Leandra, welcome to my website! I'm an aspiring UX/UI designer, photographer, baker, artist, painter, paranormal investigator, and am dynamite in the sack!</p>
					<p>You'll find my portfolio showcasing examples of my work. I'll also routinely post blogs detailing my many adventures.</p>
				</Col>

			</Row>
		)
	}
}

export default About;