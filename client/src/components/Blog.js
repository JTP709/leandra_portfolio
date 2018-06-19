import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import '../styles/Blog.css';

class Blog extends Component {
	render(){
		return (
			<div className="blog_section">
				<div className="blog_header">
					<hr />
					<h1>Blog</h1>
					<hr />
				</div>
				<div className="blog_post blog_post_left">
					<Image src="http://via.placeholder.com/250x250" alt="Blog Picture" circle />
					<div className="blog_post_content_left">
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
					</div>
				</div>
				<div className="blog_post blog_post_right">
					<div className="blog_post_content_right">
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
					</div>
					<Image src="http://via.placeholder.com/250x250" alt="Blog Picture" circle />
				</div>
				<div className="blog_post blog_post_left">
					<Image src="http://via.placeholder.com/250x250" alt="Blog Picture" circle />
					<div className="blog_post_content_left">
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
					</div>
				</div>
			</div>
		)
	}
}

export default Blog;