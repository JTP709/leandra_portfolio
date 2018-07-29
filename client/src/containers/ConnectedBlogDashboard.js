import { connect } from 'react-redux';
import {
	getBlogs,
	deleteBlog,
	updateBlogModal,
	updateShowModalTrue,
} from 'site-redux';
import BlogDashboard from '../components/Admin/Blog/BlogDashBoard';

const mapStateToProps = (state) => {
	const blogs = getBlogs(state);
	return {
		blogs
	}
}

const mapDispatchToProps = {
	deleteBlog,
	updateBlogModal,
	updateShowModalTrue
}

const ConnectedBlogDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDashboard)

export default ConnectedBlogDashboard;