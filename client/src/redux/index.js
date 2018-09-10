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

import {
  scrollToAbout,
  scrollToPortfolio,
  resetScrollTo
} from './actions/scroll';

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
  getPathname,
  getPortfolios,
  getScrollToRef
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
  // actions scroll
  scrollToAbout,
  scrollToPortfolio,
  resetScrollTo,
  // root reducer
  rootReducer,
  // blog selectors
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
  getPathname,
  // portfolio selectors
  getPortfolios,
  // scroll selectors
  getScrollToRef
}