import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	getNotification,
	getPathname,
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
} from 'site-redux';
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
	const pathname = getPathname(state);
	return {
		filters,
		blogs,
		blogModal,
		pages,
		activePage,
		blogsDisplay,
		filterButton,
		notification,
		pathname
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
	redirectNewBlogForm,
	push
}

const ConnectedAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

export default ConnectedAdmin;