import { blogs } from './blogReducer';
import { combineReducers } from 'redux';

export const getBlogs = (state) => {
	return state.blogState.blogs;
}

export const getBlogModal = (state) => {
	return state.blogState.blogModal;
}

export const getPages = (state) => {
	return state.blogState.pages;
}

export const getActivePage = (state) => {
	return state.blogState.activePage;
}

export const getBlogsDisplay = (state) => {
	return state.blogState.blogsDisplay;
}

export const getFilters = (state) => {
	return state.blogState.blogFilters;
}

export const getFilterButton = (state) => {
	return state.blogState.filterButton;
}

const rootReducer = combineReducers({
	blogState: blogs
});

export default rootReducer;
