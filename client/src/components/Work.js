import React, { Component } from 'react';
import { Image, Row, Col, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import BlogCard from './BlogCard';
import '../styles/Work.css';

class Work extends Component {
	render(){
		return (
			<Row id="work_section">
				<Col xs={12}>
					<hr />
				</Col>
				<Col xs={12} md={5} className="blog_header">
				  <ButtonToolbar>
				    <Button bsStyle="primary" bsSize="large">
				      Blog
				    </Button>
				    <Button bsSize="large">
				      Portfolio
				    </Button>
				    <Button bsSize="large">
				      Photography
				    </Button>
				   </ButtonToolbar>
				</Col>
				<Col xs={12} md={7}>
					<ButtonToolbar>
							<DropdownButton title="Filter" bsSize="large">
								<MenuItem>
									Recipies
								</MenuItem>
								<MenuItem>
									Photography
								</MenuItem>
								<MenuItem>
									Design
								</MenuItem>
							</DropdownButton>
					</ButtonToolbar>
				</Col>
				<Col xs={12}>
					<hr />
				</Col>
				<Col xs={12}>
					<BlogCard 
						blogCardClass="blog_post blog_post_left"
						blogCardContentClass="blog_post_content_left"
						position="left"
						title={ this.props.blogs[0].title }
						blurb={ this.props.blogs[0].blurb }
						thumbnail={ this.props.blogs[0].thumbnail }
					/>
					<hr />
					<BlogCard
						blogCardClass="blog_post blog_post_right blog_post_middle"
						blogCardContentClass="blog_post_content_right"
						position="right"
						title={ this.props.blogs[1].title }
						blurb={ this.props.blogs[1].blurb }
						thumbnail={ this.props.blogs[1].thumbnail }
					/>
					<hr />
					<BlogCard
						blogCardClass="blog_post blog_post_left"
						blogCardContentClass="blog_post_content_left"
						position="left"
						title={ this.props.blogs[2].title }
						blurb={ this.props.blogs[2].blurb }
						thumbnail={ this.props.blogs[2].thumbnail }
					/>
				</Col>
				<hr />
			</Row>
		)
	}
}

export default Work;