import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import '../styles/About.css';

const About = () => 
	<Row className='About' id='about'>
		<Col xs={12} className='About--header'>
			<h1>About Me</h1>
			<hr />
		</Col>
		<Col xs={12} md={3}>
			<Image className='About--image' src="https://placedog.net/250/250" alt="Profile Picture" responsive />
		</Col>
		<Col xs={12} md={9} className='About--content'>
			<p>Hi! I'm a dude, playin a dude, disguised as another dude!</p>
			<p>
				You'll find my portfolio showcasing examples of my work. 
				I'll also routinely post blogs detailing my many adventures.
				Occasionally I'll get bored and do a complete restyling of the site, because reasons.
			</p>
			<p>
				You're still reading this, which must mean you're interested ... which makes you the weird one.
				Just sayin - kinda creepy. Ok, stop. Stop now. Stop reading. This is getting really uncomfortable. 
			</p>
			<p>
				The fact you're still reading means I have to keep typing and to be honest my fingers hurt. 
				Do you know how many lines of code I've already had to write in addition to this stilly blurb?
				My text editor deosn't even have a spellchekcer, so who Knows how many grammatrical errors I've typed?
			</p>
			<h3>Technologies</h3>
			<hr/>
			<div className='About--contentTech'>

				<div className='About--contentTechList'>
					<h4>Core</h4>
					<ul>
						<li>Javascript</li>
						<li>Kotlin</li>
						<li>Python</li>
						<li>Java</li>
						<li>MongoDb</li>
						<li>PostgreSQL</li>
					</ul>
				</div>

				<div className='About--contentTechList'>
					<h4>Libraries</h4>
					<ul>
						<li>React</li>
						<li>Redux</li>
						<li>Express</li>
						<li>Spring</li>
						<li>Flask</li>
					</ul>
				</div>

				<div className='About--contentTechList'>
					<h4>Other</h4>
					<ul>
						<li>Photoshop</li>
						<li>Linux (Ubuntu)</li>
						<li>Coffee Consumption</li>
					</ul>
				</div>

			</div>
		</Col>
	</Row>;

export default About;
