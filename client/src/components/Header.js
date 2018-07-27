import React from 'react';
import { PageHeader, Row, Col } from 'react-bootstrap';
import '../styles/Header.css';

const Header = () =>
	<PageHeader className="header_section">
		<Row>
			<Col sm={9}>
				<h1>
					<strong>Welcome to My World!</strong>
				</h1>
				<small>Something Witty</small>
			</Col>
		</Row>
	</PageHeader>;

export default Header;