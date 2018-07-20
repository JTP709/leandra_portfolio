import { connect } from 'react-redux';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	getBlogForm
} from '../reducers/rootReducer';
import {
	fetchBlogs,
	newBlog,
	updateBlog,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateNotification,
	updateBlogForm
} from '../actions/actionCreators';
import BlogForm from '../components/Admin/Blog/BlogForm';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
	const blogModal = getBlogModal(state);
	const pages = getPages(state);
	const activePage = getActivePage(state);
	const blogsDisplay = getBlogsDisplay(state);
	const filterButton = getFilterButton(state);
	const blogForm = getBlogForm(state);
	return {
		filters,
		blogs,
		blogModal,
		pages,
		activePage,
		blogsDisplay,
		filterButton,
		blogForm
	}
}

const mapDispatchToProps = {
	fetchBlogs,
	newBlog,
	updateBlog,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateNotification,
	updateBlogForm
}

const ConnectedBlogForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogForm)

export default ConnectedBlogForm;