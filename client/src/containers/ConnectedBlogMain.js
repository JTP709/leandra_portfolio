import { connect } from 'react-redux';
import {
	getBlogs,
	getPages,
	getActivePage,
	getBlogsDisplay,
	getFilters,
	getFilterButton,
	getSearchIndex,
	getSearchResults,
	getSearchToggle,
	getSearchQuery,
	fetchBlogs,
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModalTrue,
	updateSearchResults,
	updateSearchToggleTrue,
	updateSearchToggleFalse,
	updateSearchQuery
} from 'site-redux';
import BlogMain from '../components/Blog/BlogMain';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
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
	updateBlogArray,
	updateBlogModal,
	updatePageNumber,
	updateBlogPage,
	updateBlogsDisplay,
	updateFilterButton,
	updateShowModalTrue,
	updateSearchResults,
	updateSearchToggleTrue,
	updateSearchToggleFalse,
	updateSearchQuery
}

const ConnectedBlogMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMain)

export default ConnectedBlogMain;