import { connect } from 'react-redux';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	fetchBlogs,
	fetchFilters,
	fetchPortfolio,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton
} from 'site-redux';
import App from '../components/App';

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
	fetchFilters,
	fetchPortfolio,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp;