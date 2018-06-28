import React, { Component } from 'react';
import { Row, Col, ButtonToolbar, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import { capitalizeFirstLetter } from '../utils/utils';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import '../styles/Work.css';

class Work extends Component {
	constructor(){
		super();
		this.state = { 
			filterButton: 'Filter Blog',
			showModal: false,
			title: "",
			body: "",
			thumbnail: ""
		}
    this.handleModal = this.handleModal.bind(this);
    this.openModal = this.openModal.bind(this);
	}

	componentWillMount(){
		this.props.fetchBlogs();
	}

	handleFilterSelect(filter){
		const oldState = { ...this.state };
		this.setState({ ...oldState, filterButton: filter })
	}

	handleModal(state){
		const oldState = { ...this.state };
		this.setState({ ...oldState, showModal: state })
	}

	openModal(blog){
		const oldState = { ...this.state };
		this.setState({ 
			...oldState,
			showModal: true,
			title: blog.title,
			body: blog.body,
			thumbnail: blog.thumbnail
		})
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
						body={ blog.body }
						thumbnail={ blog.thumbnail }
						blog={ blog }
						openModal={ this.openModal }
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
				<BlogModal
					handleModal={this.handleModal}
					show={this.state.showModal}
					title={this.state.title}
					body={this.state.body}
					thumbnail={this.state.thumbnail}
				/>
			</Row>
		)
	}
}

export default Work;