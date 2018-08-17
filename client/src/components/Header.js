import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () =>
	<Jumbotron className="Header">
		<h1>Welcome to my World!</h1>
		<p>
			Something Witty...
		</p>
	</Jumbotron>

export default Header;
