import { connect } from 'react-redux';
import {
	getBlogs,
	getActivePage,
	getFilters,
	getFilterButton,
	getSearchIndex,
	getSearchResults,
	getSearchToggle,
	getSearchQuery,
	updateBlogModal,
	updateBlogPage,
	updateFilterButton,
	updateSearchResults,
	updateSearchToggleTrue,
	updateSearchToggleFalse,
	updateShowModalTrue,
	updateShowModalFalse,
	updateSearchQuery
} from 'site-redux';
import BlogMain from '../components/Blog/BlogMain';

const mapStateToProps = (state) => {
	const filters = getFilters(state);
	const blogs = getBlogs(state);
	const activePage = getActivePage(state);
	const filterButton = getFilterButton(state);
	const searchIndex = getSearchIndex(state);
	const searchResults = getSearchResults(state);
	const searchToggle = getSearchToggle(state);
	const searchQuery = getSearchQuery(state);
	return {
		filters,
		blogs,
		activePage,
		filterButton,
		searchIndex,
		searchResults,
		searchToggle,
		searchQuery
	}
}

const mapDispatchToProps = {
	updateBlogModal,
	updateBlogPage,
	updateFilterButton,
	updateSearchResults,
	updateSearchToggleTrue,
	updateSearchToggleFalse,
	updateShowModalTrue,
	updateShowModalFalse,
	updateSearchQuery
}

const ConnectedBlogMain = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogMain)

export default ConnectedBlogMain;