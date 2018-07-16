import { blogs } from './blogReducer';
import { combineReducers } from 'redux';

export const getSearchQuery = state => { return state.blogState.searchQuery }

export const getSearchToggle = state => { return state.blogState.searchToggle }

export const getSearchResults = state => { return state.blogState.searchResults }

export const getSearchIndex = state => { return state.blogState.searchIndex }

export const getBlogs = state => { return state.blogState.blogs }

export const getBlogModal = state => { return state.blogState.blogModal }

export const getPages = state => { return state.blogState.pages }

export const getActivePage = state => { return state.blogState.activePage }

export const getBlogsDisplay = state => { return state.blogState.blogsDisplay }

export const getFilters = state => { return state.blogState.filters }

export const getFilterButton = state => { return state.blogState.filterButton }

export const getNotification = state => { return state.blogState.notification }

export const getBlogForm = state => { return state.blogState.blogForm }

export const getShowModal = state => { return state.blogState.showModal }

const rootReducer = combineReducers({
	blogState: blogs
});

export default rootReducer;
