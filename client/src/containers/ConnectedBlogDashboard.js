import { connect } from 'react-redux';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton
} from '../reducers/rootReducer';
import {
	fetchBlogs,
	deleteBlog,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModal
} from '../actions/actionCreators';
import BlogDashboard from '../components/Admin/Blog/BlogDashBoard';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
	const blogModal = getBlogModal(state);
	const pages = getPages(state);
	const activePage = getActivePage(state);
	const blogsDisplay = getBlogsDisplay(state);
	const filterButton = getFilterButton(state);
	return {
		filters,
		blogs,
		blogModal,
		pages,
		activePage,
		blogsDisplay,
		filterButton
	}
}

const mapDispatchToProps = {
	fetchBlogs,
	deleteBlog,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModal
}

const ConnectedBlogDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogDashboard)

export default ConnectedBlogDashboard;