import React from 'react';
import { connect } from 'react-redux';
import { getPathname } from 'site-redux';
import { Button } from 'react-bootstrap';
import '../styles/Header.css';

const Header = ({ pathname }) =>
	<div className={pathname === '/' ? 'Header Header--fullScreen': 'Header'}>
		<div className='Header--content'>
			<h1>Welcome to my World!</h1>
			<p>Something Witty...</p>
			<div className='Header--content'>
				<Button>Learn More</Button>
			</div>
		</div>
	</div>

const mapStateToProps = state => ({ pathname: getPathname(state)});

const ConnectedHeader = connect(mapStateToProps, null)(Header);

export { Header };
export default ConnectedHeader;
