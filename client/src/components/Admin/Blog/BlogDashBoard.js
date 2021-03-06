import React, { Component } from 'react';
import {
	Col,
	Table,
	Image,
	Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConnectedBlogModal from '../../../containers/ConnectedBlogModal';
import { capitalizeFirstLetter, formatDate } from '../../../utils/utils';
import '../../../styles/admin/blog/BlogDashBoard.css';

class BlogDashboard extends Component {
	constructor(){
		super();
		this.handleBlogPreview = this.handleBlogPreview.bind(this);
		this.handleBlogDelete = this.handleBlogDelete.bind(this);
	}

	handleBlogPreview(blog){
		const { updateShowModalTrue, updateBlogModal } = this.props;
		updateShowModalTrue();
		updateBlogModal(blog);
	}

	handleBlogDelete(id){
		const { deleteBlog } = this.props;
		deleteBlog(id);
	}

	render(){
		const { blogs } = this.props;
		const blogRows = blogs
			.sort((a,b) => { 
				const dateA = new Date(b.author_date);
				const dateB = new Date(a.author_date);
				return dateA - dateB;
			}).map(blog => {
				const dateObj = new Date(blog.author_date);
				// TODO: replace dead href
				return (
					<tr key={blog._id} >
			      <td>
			      	{ formatDate(dateObj) }
			      </td>
			      <td className="blog_dashboard_title" onClick={ () => { this.handleBlogPreview(blog) } } >
							{ blog.title }
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
			      	<Link to={`/admin/blog/update/${blog.blogId}`}>
			      		Edit
			      	</Link>
			      </td>
			      <td>
							<Button onClick={ () => { this.handleBlogDelete(blog._id) } } >
								X
							</Button>
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
