import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () =>
	<div className='Header'>
		<div className='Header--text'>
			<h1>Welcome to my World!</h1>
			<p>Something Witty...</p>
		</div>
		<div className='Header--learnMoreButton'>
			<Button>Learn More</Button>
		</div>
	</div>

export default Header;
