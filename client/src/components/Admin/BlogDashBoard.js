import React, { Component } from 'react';import { 
	Grid,
	Col,
	Table,
	Image
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/utils';
import ConnectedBlogModal from '../../containers/ConnectedBlogModal';
import { capitalizeFirstLetter } from '../../utils/utils';

class BlogDashboard extends Component {
	constructor(){
		super();
		this.handleBlogPreview = this.handleBlogPreview.bind(this);
		this.handleBlogDelete = this.handleBlogDelete.bind(this);
	}

	handleBlogPreview(blog){
		const { updateShowModal, updateBlogModal } = this.props;
		updateShowModal(true);
		updateBlogModal(blog);
	}

	handleBlogDelete(id){
		const { deleteBlog } = this.props;
		deleteBlog(id);
	}

	render(){
		const { blogs, updateShowModal, updateBlogModal } = this.props;
		const blogRows = blogs
			.sort((a,b) => { 
				const dateA = new Date(b.author_date);
				const dateB = new Date(a.author_date);
				return dateA - dateB;
			}).
			map(blog => {
				const dateObj = new Date(blog.author_date);
				// TODO: replace dead href
				return (
					<tr>
			      <td>
			      	{ formatDate(dateObj) }
			      </td>
			      <td>
			      	<a onClick={ () => { this.handleBlogPreview(blog) } } href='#'>
			      		{ blog.title }
			      	</a>
			      </td>
			      <td>
			      	<Image src={ blog.thumbnail } responsive />
			      </td>
			      <td>
			      	{ `${blog.body.slice(0,250)}...` }
			      </td>
			      <td>
			      	{ blog.filters.map(filter => capitalizeFirstLetter(filter)).join(', ') }
			      </td>
			      <td>
			      	{/* TODO: do i need to pass state? */}
			      	<Link to={{pathname: `/admin/blog/update/${blog.blogId}`}, state:{ newBlog: false }}>
			      		Edit
			      	</Link>
			      </td>
			      <td>
			      	<a onClick={ () => { this.handleBlogDelete(blog._id) } } href='#'>
			      		Del
			      	</a>
			      </td>
			    </tr>
			  )
		});
		return(
			<Col xs={12} md={10}>
				<h2>Blog Dashboard</h2>
				<Table striped bordered condensed hover>
				  <thead>
				    <tr>
				      <th>Date</th>
				      <th>Title</th>
				      <th>Image</th>
				      <th>Blurb</th>
				      <th>Filters</th>
				      <th>Edit</th>
				      <th>Del</th>
				    </tr>
				  </thead>
				  <tbody>
				  { blogRows }
				  </tbody>
				</Table>
				<ConnectedBlogModal />
			</Col>
		)
	}
}

export default BlogDashboard;
