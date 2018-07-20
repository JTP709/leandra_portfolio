import React, { Component } from 'react';
import { 
	Grid,
  Row,
  Tab,
  Tabs
} from 'react-bootstrap';
import BlogNavMenu from './Blog/BlogNavMenu';
import ConnectedBlogForm from '../../containers/ConnectedBlogForm';
import ConnectedBlogDashboard from '../../containers/ConnectedBlogDashboard';
import ConnectedFilterDashboard from '../../containers/ConnectedFilterDashboard';
import Notification from './Notification';

class Admin extends Component {
  constructor(){
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key){
    const { push } = this.props;
    if (key === 1) { push("/admin/blog") }
    if (key === 2) { push("/admin/portfolio") }
    if (key === 3) { push("/admin/photography") }
    if (key === 4) { push("/admin/laboratory") }
  }

	render() {
    const { notification, blogId, updateBlogForm, pathname } = this.props;
		const renderPage = () => {
			switch(true){
        default:
        case (pathname === '/admin'):
				case (pathname === '/admin/blog'):
					return <ConnectedBlogDashboard />
				case (pathname === '/admin/blog/new'):
					return <ConnectedBlogForm type={ 'new_blog_form' } />
				case pathname.includes('/admin/blog/update'):
					const editBlog = this.props.blogs.find(blog => blog.blogId === blogId);
					updateBlogForm(editBlog);
					return <ConnectedBlogForm type={ 'update_blog_form' } blogId={ blogId } />
				case (pathname === '/admin/blog/filters'):
					return <ConnectedFilterDashboard />
			}
		}
    let key;
    if (
      pathname === "/admin/blog" || 
      pathname === "/admin" || 
      pathname === "/admin/blog/new" || 
      pathname === "/admin/blog/filters"
    ) { key = 1 }
    if (pathname === "/admin/portfolio") { key =  2}
    if (pathname === "/admin/photography") { key = 3 }
    if (pathname === "/admin/laboratory") { key = 4 }
		return (
			<Grid>
				<Row>
          <Tabs
            activeKey={key}
            onSelect={this.handleSelect}
            id="adminTabs"
          >
            <Tab eventKey={1} title="Blogs" >
              <Notification notification={notification} />
              <BlogNavMenu />
              { renderPage() }
            </Tab>
            <Tab eventKey={2} title="Portfolio" >
              <h1>Portfolio</h1>
            </Tab>
            <Tab eventKey={3} title="Photography" >
              <h1>Photography</h1>
            </Tab>
            <Tab eventKey={4} title="Laboratory" >
              <h1>Laboratory</h1>
            </Tab>
          </Tabs>
				</Row>
			</Grid>
		)
	}
}

export default Admin;
