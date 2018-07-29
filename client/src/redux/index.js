import {
  fetchBlogs,
  newBlog,
  updateBlog,
  deleteBlog,
  fetchFilters,
  newFilter,
  updateFilter,
  deleteFilter,
  redirectPage,
  redirectNewBlogForm,
  updateSearchQuery,
  updateSearchToggleTrue,
  updateSearchToggleFalse,
  updateSearchResults,
  updateSearchIndex,
  updateBlogArray,
  updateBlogModal,
  updatePageNumber,
  updateBlogPage,
  updateBlogsDisplay,
  updateFilterButton,
  updateFilters,
  updateNotification,
  updateBlogForm,
  updateShowModalTrue,
  updateShowModalFalse
} from './actions/blog';

import {
  fetchPortfolio
} from './actions/portfolio';

import rootReducer from './reducers/rootReducer'

import {
  getSearchQuery,
  getSearchToggle,
  getSearchResults,
  getSearchIndex,
  getBlogs,
  getBlogModal,
  getPages,
  getActivePage,
  getBlogsDisplay,
  getFilters,
  getFilterButton,
  getNotification,
  getBlogForm,
  getShowModal,
  getPathname
} from './selectors'

export {
  // actions/blogs
  fetchBlogs,
  newBlog,
  updateBlog,
  deleteBlog,
  fetchFilters,
  newFilter,
  updateFilter,
  deleteFilter,
  redirectPage,
  redirectNewBlogForm,
  updateSearchQuery,
  updateSearchToggleTrue,
  updateSearchToggleFalse,
  updateSearchResults,
  updateSearchIndex,
  updateBlogArray,
  updateBlogModal,
  updatePageNumber,
  updateBlogPage,
  updateBlogsDisplay,
  updateFilterButton,
  updateFilters,
  updateNotification,
  updateBlogForm,
  updateShowModalTrue,
  updateShowModalFalse,
  // actions portfolio
  fetchPortfolio,
  // root reducer
  rootReducer,
  // selectors
  getSearchQuery,
  getSearchToggle,
  getSearchResults,
  getSearchIndex,
  getBlogs,
  getBlogModal,
  getPages,
  getActivePage,
  getBlogsDisplay,
  getFilters,
  getFilterButton,
  getNotification,
  getBlogForm,
  getShowModal,
  getPathname
}