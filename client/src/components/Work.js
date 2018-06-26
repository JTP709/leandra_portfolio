import React, { Component } from 'react';
import { Row, Col, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../utils/utils';
import BlogCard from './BlogCard';
import '../styles/Work.css';

class Work extends Component {
	constructor(){
		super();
		this.state = { filterButton: 'Filter Blog' }
	}

	componentWillMount(){
		this.props.fetchBlogs();
	}

	handleFilterSelect(filter){
		this.setState({ filterButton: filter })
	}

	renderBlogCards() {
		const blogs = this.props.blogs;
		if (!blogs) return (
			<div>
				<h2>There are no blogs to display</h2>
			</div>
		)
		return blogs.map(blog => {
			const cardAndContentClasses = ((blogs.indexOf(blog)+1) % 2) === 0 ?
				["blog_post blog_post_right blog_post_middle", "blog_post_content_right", "right"] :
				["blog_post blog_post_left", "blog_post_content_left", "left"]

			return (
				<div key={blogs.indexOf(blog)}>
					<BlogCard 
						blogCardClass={ cardAndContentClasses[0] }
						blogCardContentClass={ cardAndContentClasses[1] }
						position={ cardAndContentClasses[2] }
						title={ blog.title }
						blurb={ blog.body }
						thumbnail={ blog.thumbnail }
					/>
					<hr />
				</div>
			)
		})
	}

	renderFilters(){
		const filters = this.props.filters;
		const filterButtons = filters.map(filter => {
			const styledFilter = capitalizeFirstLetter(filter);
			return(
				<MenuItem key={filters.indexOf(filter)} onSelect={ ()=> this.handleFilterSelect(styledFilter) }>
					{ styledFilter }
				</MenuItem>
			)
		});
		const defaultButton = (
			<MenuItem key={'DefaultButton'} onSelect={ ()=> this.handleFilterSelect('Filter Blog') }>
				Show All
			</MenuItem>
		)
		return [ ...filterButtons, defaultButton];
	}
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
							<DropdownButton title={ this.state.filterButton } bsSize="large" id="dropdownButton">
								{ this.renderFilters() }
							</DropdownButton>
					</ButtonToolbar>
				</Col>
				<Col xs={12}>
					<hr />
				</Col>
				<Col xs={12}>

					{ this.renderBlogCards()}

				</Col>
				<hr />
			</Row>
		)
	}
}

export default Work;