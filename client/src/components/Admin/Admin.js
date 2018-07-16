import React, { Component } from 'react';
import { 
	Grid,
	Col,
	Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConnectedBlogForm from '../../containers/ConnectedBlogForm';
import ConnectedBlogDashboard from '../../containers/ConnectedBlogDashboard';
import ConnectedFilterDashboard from '../../containers/ConnectedFilterDashboard';
import Notification from './Notification';

class Admin extends Component {
	render() {
		const { page, notification, blogId, updateBlogForm, redirectNewBlogForm } = this.props;
		const renderPage = () => {
			switch(page){
				case 'blog_dashboard':
					return <ConnectedBlogDashboard />
				case 'new_blog_form':
					return <ConnectedBlogForm type={ page } />
				case 'update_blog_form':
					const editBlog = this.props.blogs.find(blog => blog.blogId === blogId);
					updateBlogForm(editBlog);
					return <ConnectedBlogForm type={ page } blogId={ blogId } />
				case 'filter_dashboard':
					return <ConnectedFilterDashboard />
				default:
					return null
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
							<li>
								<Link to="/admin/blog/filters">Filter</Link>
							</li>
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
