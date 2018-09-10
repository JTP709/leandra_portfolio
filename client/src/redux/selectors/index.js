// BLOGS

export const getSearchQuery = state => state.blogs.searchQuery;

export const getSearchToggle = state => state.blogs.searchToggle;

export const getSearchResults = state => state.blogs.searchResults;

export const getSearchIndex = state => state.blogs.searchIndex;

export const getBlogs = state => state.blogs.blogs;

export const getBlogModal = state => state.blogs.blogModal;

export const getPages = state => state.blogs.pages;

export const getActivePage = state => state.blogs.activePage;

export const getBlogsDisplay = state => state.blogs.blogsDisplay;

export const getFilters = state => state.blogs.filters;

export const getFilterButton = state => state.blogs.filterButton;

export const getNotification = state => state.blogs.notification;

export const getBlogForm = state => state.blogs.blogForm;

export const getShowModal = state => state.blogs.showModal;

export const getPathname = state => state.router.location.pathname;

// PORTFOLIO

export const getPortfolios = state => state.portfolio.portfolios;

// SCROLL

export const getScrollToRef = state => state.scroll.scrollToRef
