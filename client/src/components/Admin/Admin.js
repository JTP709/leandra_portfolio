import React, { Component } from 'react';
import { 
	Grid,
	Col,
	Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConnectedBlogForm from '../../containers/ConnectedBlogForm';
import ConnectedBlogDashboard from '../../containers/ConnectedBlogDashboard';
import Notification from './Notification';

class Admin extends Component {
	render() {
		const { page, notification, blogId, updateBlogForm, redirectNewBlogForm } = this.props;
		const renderPage = () => {
			if(page === "blog_dashboard") {
				return <ConnectedBlogDashboard />
			} else if (page === "new_blog_form") {
				return <ConnectedBlogForm type={ page } />
			} else if (page === "update_blog_form") {
				const editBlog = this.props.blogs.filter(blog => blog.blogId === blogId)[0];
				updateBlogForm(editBlog);
				return <ConnectedBlogForm type={ page } blogId={ blogId } />
			} else {
				return null;
			}
		}
		return (
			<Grid>
				<Row>
					<Col md={12}>
						<h1>ADMIN!</h1>
					</Col>
				</Row>
				<Notification notification={notification} />
				<Row>
					<Col xs={12} md={2}>
						<ul>
							<li>
			          <Link to="/admin/blog">Blogs Dashboard</Link>
			        </li>
			        <li>
			        	<a href='#' onClick={ redirectNewBlogForm }>Add New Blog</a>
			        </li>
							<li>Filter</li>
						</ul>
					</Col>
					{
		        renderPage()
					}
				</Row>
			</Grid>
		)
	}
}

export default Admin;
