import { connect } from 'react-redux';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	getNotification
} from '../reducers/rootReducer';
import {
	fetchBlogs,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateNotification,
	updateBlogForm,
	redirectNewBlogForm
} from '../actions/actionCreators';
import Admin from '../components/Admin/Admin';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
	const blogModal = getBlogModal(state);
	const pages = getPages(state);
	const activePage = getActivePage(state);
	const blogsDisplay = getBlogsDisplay(state);
	const filterButton = getFilterButton(state);
	const notification = getNotification(state);
	return {
		filters,
		blogs,
		blogModal,
		pages,
		activePage,
		blogsDisplay,
		filterButton,
		notification
	}
}

const mapDispatchToProps = {
	fetchBlogs,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateNotification,
	updateBlogForm,
	redirectNewBlogForm
}

const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

export default ConnectedAdmin;