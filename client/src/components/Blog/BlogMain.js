import React, { Component } from 'react';
import { 
	Row,
	Col,
	ButtonToolbar,
	Button,
	DropdownButton,
	MenuItem,
	Pagination,
	Form,
	FormGroup,
	FormControl,
	Glyphicon
} from 'react-bootstrap';
import { capitalizeFirstLetter } from '../../utils/utils';
import BlogCard from './BlogCard';
import ConnectedBlogModal from '../../containers/ConnectedBlogModal';

import '../../styles/blog/BlogMain.css';

class BlogMain extends Component {
	constructor(){
		super();

    this.openModal = this.openModal.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
    this.handleSearchQuery = this.handleSearchQuery.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
	}

	handlePagination(page){
		const { updateBlogPage } = this.props;
		updateBlogPage(page);
	}

	handleFilterSelect(filter){
		this.props.updateFilterButton(filter);
		this.handlePagination(1);
	}

	handleSearchQuery(event){
		const { updateSearchQuery } = this.props;
		const query = event.target.value;
		updateSearchQuery(query);
	}

	handleSearch(){
		const { 
			searchIndex,
			updateSearchResults,
			updateSearchToggleTrue,
			updateSearchToggleFalse,
			searchQuery 
		} = this.props;
		const search = searchIndex.search(searchQuery);
		this.handleFilterSelect('Filter Blog');
		this.handlePagination(1);
		if(searchQuery === '' || searchQuery === undefined) {
			updateSearchToggleFalse()
		} else {
			updateSearchToggleTrue();
			updateSearchResults(search);
		}
	}

	handleClearSearch(){
		const { updateSearchToggleFalse, updateSearchQuery } = this.props;
		updateSearchQuery('')
		updateSearchToggleFalse();
	}

	openModal(blog){
		const { updateBlogModal, updateShowModalTrue } = this.props;
		const { title, author_date, body, thumbnail, header_img } = blog;
		const modalInfo = {
			title,
			author_date,
			body,
			thumbnail,
			header_img
		};
		updateBlogModal(modalInfo);
		updateShowModalTrue();
	}

	renderFilters(){
		const { filters } = this.props;
		const filterButtons = filters.map(filter => {
			const styledFilter = capitalizeFirstLetter(filter.filter);
			return(
				<MenuItem 
					key={ filter._id }
					onSelect={ ()=> this.handleFilterSelect(styledFilter) }
				>
					{ styledFilter }
				</MenuItem>
			);
		});
		const defaultButton = (
			<MenuItem
				key={ 'DefaultButton' }
				onSelect={ ()=> this.handleFilterSelect('Filter Blog') }
			>
				Show All
			</MenuItem>
		);
		return [ ...filterButtons, defaultButton];
	}

	render(){
		const { 
			blogs,
			activePage,
			filterButton,
			searchResults,
			searchToggle,
			searchQuery,
		} = this.props;
		const filteredBlogs = searchToggle ?
			searchResults.sort((a,b) => {
				return a.score - b.score
			}).map(result => {
				return blogs.find(blog => {
					return blog.blogId === result.ref
				});
			}) :
			blogs.sort((a,b) => {
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
			    	key={ num }
			    	active={ num === activePage }
			    	onClick={ ()=>{this.handlePagination(num)} }
		    	>{num}</Pagination.Item>
				)
			});
		const noBlogsCard = (
			<div>
				<h2>There are no blogs to display</h2>
			</div>
		);
		const blogCards = !blogs ? noBlogsCard :
			filteredBlogs
			.sort((a,b) => { 
				const dateA = new Date(b.author_date);
				const dateB = new Date(a.author_date);
				return dateA - dateB;
			})
			.slice(arrayStart,arrayStop)
			.map(blog => {
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
			<Row className='BlogMain'>

				{/* Blog Filters */}

				<Col className='BlogMain--filter' xs={ 4 } md={ 6 }>
					<ButtonToolbar>
							<DropdownButton
								title={ this.props.filterButton }
								bsSize = "large"
								id = "dropdownButton"
							>
								{ this.renderFilters() }
							</DropdownButton>
					</ButtonToolbar>
				</Col>

				{/* Blog Search */}

				<Col className='BlogMain--search' xd={ 8 } md={ 6 }>
					<Form inline>
						<FormGroup bsSize="large" controlId="search_box">
					  	<FormControl
					  		type="text"
					  		placeholder="Search for a Blog"
					  		value={ searchQuery}
					  		onChange={ this.handleSearchQuery }
					  	/>
						</FormGroup>
						<Button bsSize="large" onClick={ this.handleSearch }>
							<Glyphicon glyph='search' />
						</Button>
						<Button bsSize="large" onClick={ this.handleClearSearch }>
							<Glyphicon glyph='remove' />
						</Button>
					</Form>
				</Col>

				<Col xs={ 12 }><hr /></Col>

				{/* Blog Cards */}

				<Col className='BlogMain--cardContainer' xs={ 12 }>
					{ blogCards }
				</Col>

				{ 
					filteredBlogs.length > 5 ?
						<Col md={ 12 } className = "text-center">
							<Pagination bsSize = "medium">
								{ pageNumbers }
							</Pagination>
						</Col> :
						null
				}

				{/* Blog Modal */}

				<ConnectedBlogModal />

			</Row>
		);
	}
}

export default BlogMain;
