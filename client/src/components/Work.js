import React, { Component } from 'react';
import { 
	Row,
	Col,
	ButtonToolbar,
	Button,
	DropdownButton,
	MenuItem,
	Pagination
} from 'react-bootstrap';
import { capitalizeFirstLetter } from '../utils/utils';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import '../styles/Work.css';

class Work extends Component {
	constructor(){
		super();
		this.state = {
			showModal: false,
		}
    this.handleModal = this.handleModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
	}

	handlePagination(page){
		const { updateBlogPage } = this.props;
		updateBlogPage(page);
	}

	handleFilterSelect(filter){
		this.props.updateFilterButton(filter);
		this.handlePagination(1);
	}

	handleModal(arg){
		this.setState({ showModal: arg })
	}

	openModal(blog){
		const { updateBlogModal } = this.props;
		const modalInfo = {
			title: blog.title,
			date: blog.date,
			body: blog.body,
			thumbnail: blog.thumbnail
		};
		updateBlogModal(modalInfo);
		this.setState({
			showModal: true
		});
	}

	renderFilters(){
		const { filters } = this.props;
		const filterButtons = filters.map(filter => {
			const styledFilter = capitalizeFirstLetter(filter);
			return(
				<MenuItem 
					key = { filters.indexOf(filter) }
					onSelect = { ()=> this.handleFilterSelect(styledFilter) }
				>
					{ styledFilter }
				</MenuItem>
			);
		});
		const defaultButton = (
			<MenuItem
				key = { 'DefaultButton' }
				onSelect = { ()=> this.handleFilterSelect('Filter Blog') }
			>
				Show All
			</MenuItem>
		);
		return [ ...filterButtons, defaultButton];
	}

	render(){
		const { blogs, activePage, filterButton, blogModal } = this.props;
		const filteredBlogs = blogs.sort((a,b) => {
		  return new Date(b.date) - new Date(a.date);
		}).filter(blog => {
			return filterButton === 'Filter Blog' ? blog :
				blog.filters.includes(filterButton.toLowerCase());
		});
		const pages = Math.ceil(filteredBlogs.length/5);
		const arrayStop = activePage*5;
		const arrayStart = arrayStop-5;
		const pageNumbers = Array.apply(null, {length: pages})
			.map(Number.call, Number)
			.map(n => {
				const num = n+1;
				return(
					<Pagination.Item
			    	key = { num }
			    	active = { num === activePage }
			    	onClick = { ()=>{this.handlePagination(num)} }
		    	>{num}</Pagination.Item>
				)
			});
		const noBlogsCard = (
			<div>
				<h2>There are no blogs to display</h2>
			</div>
		);
		const blogCards = !blogs ? noBlogsCard :
			filteredBlogs.slice(arrayStart,arrayStop).map(blog => {
				const cardAndContentClasses = ((filteredBlogs.indexOf(blog)+1) % 2) === 0 ?
					[
						"blog_post blog_post_right blog_post_middle",
						"blog_post_content_right",
						"right"
					] :
					[
						"blog_post blog_post_left",
						"blog_post_content_left",
						"left"
					];

				return (
					<div key={ blogs.indexOf(blog) }>
						<BlogCard 
							blogCardClass={ cardAndContentClasses[0] }
							blogCardContentClass={ cardAndContentClasses[1] }
							position={ cardAndContentClasses[2] }
							blog={ blog }
							openModal={ this.openModal }
						/>
						<hr />
					</div>
				);
			});

		return (
			<Row id = "work_section">
				<Col xs = { 12 }>
					<hr />
				</Col>
				<Col xs = { 12 } md = { 5 } className = "blog_header">
				  <ButtonToolbar>
				    <Button active bsSize = "large">
				      Blog
				    </Button>
				    <Button bsSize = "large">
				      Portfolio
				    </Button>
				    <Button bsSize = "large">
				      Photography
				    </Button>
				   </ButtonToolbar>
				</Col>
				<Col xs = { 12 } md = { 7 }>
					<ButtonToolbar>
							<DropdownButton
								title = { this.props.filterButton }
								bsSize = "large"
								id = "dropdownButton"
							>
								{ this.renderFilters() }
							</DropdownButton>
					</ButtonToolbar>
				</Col>
				<Col xs = { 12 }>
					<hr />
				</Col>
				<Col xs = { 12 }>
					{ blogCards }
				</Col>
				<Col md = { 12 } className = "text-center">
		    	<Pagination bsSize = "medium">{ pageNumbers }</Pagination>
		    </Col>
				<BlogModal
					handleModal = { this.handleModal }
					show = { this.state.showModal }
					blogModal={ this.props.blogModal }
				/>
			</Row>
		);
	}
}

export default Work;
