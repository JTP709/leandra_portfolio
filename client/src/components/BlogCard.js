import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import '../styles/Work.css';

class BlogCard extends Component {
	render(){
		const { blogCardContentClass, blogCardClass, position, title, blurb, thumbnail } = this.props;
		const imageElement = (
			<Col xs={12} md={3}>
				<Image src={ thumbnail } alt="Blog Picture" responsive circle />
			</Col>
		)
		const contentElement = (
			<Col xs={12} md={9} className={ blogCardContentClass }>
				<h2>{ title }</h2>
				<p>
					{ blurb }
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