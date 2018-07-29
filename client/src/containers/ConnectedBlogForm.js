import { connect } from 'react-redux';
import {
	getFilters,
	getBlogForm,
	newBlog,
	updateBlog,
	updateNotification,
	updateBlogForm
} from 'site-redux';
import BlogForm from '../components/Admin/Blog/BlogForm';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogForm = getBlogForm(state);
	return {
		filters,
		blogForm
	}
}

const mapDispatchToProps = {
	newBlog,
	updateBlog,
	updateNotification,
	updateBlogForm
}

const ConnectedBlogForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm)

export default ConnectedBlogForm;