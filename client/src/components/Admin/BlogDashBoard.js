import React, { Component } from 'react';import { 
	Grid,
	Col,
	Table
} from 'react-bootstrap';

class BlogDashboard extends Component {
	render(){
		const { blogs } = this.props;
		const blogRows = blogs.map(blog => {
			return (
				<tr>
			      <td>{ blog.date }</td>
			      <td>{ blog.title }</td>
			      <td>{ blog.thumbnail }</td>
			      <td>{ `${blog.body.slice(0,250)}...` }</td>
			      <td>E</td>
			      <td>X</td>
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
			      <th>Image Url</th>
			      <th>Blurb</th>
			      <th>Edit</th>
			      <th>Del</th>
			    </tr>
			  </thead>
			  <tbody>
			  { blogRows }
			  </tbody>
			</Table>
			</Col>
		)
	}
}

export default BlogDashboard;
