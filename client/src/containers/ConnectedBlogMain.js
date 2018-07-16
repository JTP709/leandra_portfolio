import { connect } from 'react-redux';
import {
	getBlogs,
	getBlogModal,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	getSearchIndex,
	getSearchResults,
	getSearchToggle,
	getSearchQuery
} from '../reducers/rootReducer';
import {
	fetchBlogs,
	redirectPage,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModal,
	updateSearchResults,
	updateSearchToggle,
	updateSearchQuery
} from '../actions/actionCreators';
import BlogMain from '../components/Blog/BlogMain';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
	const blogModal = getBlogModal(state);
	const pages = getPages(state);
	const activePage = getActivePage(state);
	const blogsDisplay = getBlogsDisplay(state);
	const filterButton = getFilterButton(state);
	const searchIndex = getSearchIndex(state);
	const searchResults = getSearchResults(state);
	const searchToggle = getSearchToggle(state);
	const searchQuery = getSearchQuery(state);
	return {
		filters,
		blogs,
		blogModal,
		pages,
		activePage,
		blogsDisplay,
		filterButton,
		searchIndex,
		searchResults,
		searchToggle,
		searchQuery
	}
}

const mapDispatchToProps = {
	fetchBlogs,
	redirectPage,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModal,
	updateSearchResults,
	updateSearchToggle,
	updateSearchQuery
}

const ConnectedBlogMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMain)

export default ConnectedBlogMain;