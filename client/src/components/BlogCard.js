import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import '../styles/Blog.css';

class BlogCard extends Component {
	render(){
		const { blogCardContentClass, blogCardClass, position } = this.props;
		const imageElement = (
			<Col xs={12} md={3}>
				<Image src="http://via.placeholder.com/250x250" alt="Blog Picture" responsive circle />
			</Col>
		)
		const contentElement = (
			<Col xs={12} md={9} className={ blogCardContentClass }>
				<h2>Kitties</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Col>
		)
		return (
			<Row className={ blogCardClass }>
				{
					position === "left" ? 
						[imageElement, contentElement] : 
						[contentElement, imageElement]
				}
			</Row>
		)
	}
}

export default BlogCard;