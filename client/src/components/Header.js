import React from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () =>
	<div id="header_section">
		<PageHeader id="header_text">
			Welcome to My World!
			<br />
			<small>Something Witty</small>
		</PageHeader>
	</div>;

export default Header;
