import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../styles/About.css';

class About extends Component {
	render() {
		return (
			<div className="about_section">
				<div className="about_header">
					<h1>About Me</h1>
					<hr />
				</div>
				<div className="about_content">
					<Image id="profile_picture" src="http://via.placeholder.com/250x250" alt="Profile Picture" />
					<div className="about_information">
						<p>Hi! I'm Leandra, welcome to my website! I'm an aspiring UX/UI designer, photographer, baker, artist, painter, paranormal investigator, and am dynamite in the sack!</p>
						<p>You'll find my portfolio showcasing examples of my work. I'll also routinely post blogs detailing my many adventures.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default About;