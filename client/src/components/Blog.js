import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';
import '../styles/Blog.css';

class Blog extends Component {
	render(){
		return (
			<Row className="blog_section">
				<Col xs={12} className="blog_header">
					<hr />
					<h1>Blog</h1>
					<hr />
				</Col>
				<BlogCard 
					blogCardClass="blog_post blog_post_left"
					blogCardContentClass="blog_post_content_left"
					position="left"
				/>
				<hr />
				<BlogCard
					blogCardClass="blog_post blog_post_right blog_post_middle"
					blogCardContentClass="blog_post_content_right"
					position="right"
				/>
				<hr />
				<BlogCard
					blogCardClass="blog_post blog_post_left"
					blogCardContentClass="blog_post_content_left"
					position="left"
				/>
				<hr />
			</Row>
		)
	}
}

export default Blog;