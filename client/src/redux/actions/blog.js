import axios from 'axios';
import lunr from 'lunr';
import { push } from 'connected-react-router';
import {
  UPDATE_SEARCH,
  UPDATE_BLOG,
  UPDATE_FILTER,
  NOTIFICATION
} from '../constants';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

const fetchBlogs = (notification = '') => dispatch => {
  dispatch(loadingBlogsStarted(notification));
  axios.get(`${BACKEND_URL}/api/blogs/get`)
    .then(response => {
      const idx = lunr(function() {
        this.ref('blogId');
        this.field('body');
        this.field('title');
        this.metadataWhitelist = ['position'];
        response.data.forEach(function(doc) { this.add(doc) }, this);
      });
      dispatch(updateBlogArray(response.data, idx));
    })
    .catch(error => dispatch(blogError(error)));
}

const newBlog = blog => dispatch => {
    axios({
      method: 'post',
      url: `${BACKEND_URL}/api/blogs/new`,
      data: {
        title: blog.title,
        author_date: Date.now(),
        thumbnail: blog.thumbnail,
        header_img: blog.header_img,
        filters: blog.filters,
        body: blog.body
      }
    })
    .then(() => dispatch(fetchBlogs(NOTIFICATION.BLOG_SUBMISSION_SUCCESSFUL)))
    .catch(error => dispatch(blogError(error, NOTIFICATION.BLOG_SUBMISSION_FAIL)))
}

const updateBlog = blog => dispatch => {
    axios({
      method: 'put',
      url: `${BACKEND_URL}/api/blogs/update`,
      data: {
        _id: blog._id,
        blogId: blog.blogId,
        title: blog.title,
        author_date: blog.author_date,
        thumbnail: blog.thumbnail,
        header_img: blog.header_img,
        filters: blog.filters,
        body: blog.body
      }
    })
    .then(() => dispatch(fetchBlogs(NOTIFICATION.BLOG_UPDATE_SUCCESSFUL)))
    .catch(error => dispatch(blogError(error, NOTIFICATION.BLOG_UPDATE_FAIL)));
}

const deleteBlog = id => dispatch => {
    axios({
      method: 'delete',
      url: `${BACKEND_URL}/api/blogs/delete`,
      data: { id }
    })
    .then(() => dispatch(fetchBlogs(NOTIFICATION.BLOG_DELETION_SUCCESSFUL)))
    .catch(error => dispatch(blogError(error, NOTIFICATION.BLOG_DELETION_FAIL)));
}

const fetchFilters = notificaiton => dispatch => {
  dispatch(loadingFiltersStarted(notificaiton));
  axios.get(`${BACKEND_URL}/api/blogs/filters`)
    .then(response => dispatch(updateFilters(response.data)))
    .catch(error => dispatch(filterError(error, NOTIFICATION.FILTER_UPDATE_FAIL)));
}

const newFilter = filter => dispatch => {
  axios({
    method: 'post',
    url: `${BACKEND_URL}/api/blogs/filters/new`,
    data: { filter }
  })
  .then(() => dispatch(fetchFilters(NOTIFICATION.FILTER_SUBMISSION_SUCCESSFUL)))
  .catch(error => dispatch(filterError(error, NOTIFICATION.FILTER_SUBMISSION_FAIL)));
}

const updateFilter = payload => dispatch => {
  const { id, filter } = payload;
  axios({
    method: 'put',
    url: `${BACKEND_URL}/api/blogs/filters/update`,
    data: {
      id,
      filter
    }
  })
  .then(() => dispatch(fetchFilters(NOTIFICATION.FILTER_UPDATE_SUCCESSFULL)))
  .catch(error => dispatch(filterError(error, NOTIFICATION.FILTER_UPDATE_FAIL)));
}

const deleteFilter = id => dispatch => {
  axios({
    method: 'delete',
    url: `${BACKEND_URL}/api/blogs/filters/delete`,
    data: { id }
  })
  .then(() => dispatch(fetchFilters(NOTIFICATION.FILTER_UPDATE_SUCCESSFULL)))
  .catch(error => dispatch(filterError(error, NOTIFICATION.FILTER_UPDATE_FAIL)));
}

const redirectPage = url => dispatch => dispatch(push(url));

const redirectNewBlogForm = () => dispatch => {
    dispatch(updateBlogForm({}));
    dispatch(push('/admin/blog/new'));
}

const loadingBlogsStarted = notification => ({
    type: UPDATE_BLOG.LOADING_TRUE,
    notification
});

const blogError = error => ({
    type: UPDATE_BLOG.ERROR,
    error
})

const updateSearchQuery = payload => ({
    type: UPDATE_SEARCH.QUERY,
    payload
})

const updateSearchToggleTrue = () => ({ type: UPDATE_SEARCH.TOGGLE_TRUE })

const updateSearchToggleFalse = () => ({ type: UPDATE_SEARCH.TOGGLE_FALSE })

const updateSearchResults = payload => ({
    type: UPDATE_SEARCH.RESULTS,
    payload
})

const updateBlogArray = (blogs, index) => ({
		type: UPDATE_BLOG.ARRAY,
		payload: {
      blogs,
      index
    }
})

const updateBlogModal = payload => ({
    type: UPDATE_BLOG.MODAL,
    payload
})

const updatePageNumber = payload => ({
		type: UPDATE_BLOG.PAGE_NUMBER,
		payload
})

const updateBlogPage = payload => ({
		type: UPDATE_BLOG.PAGE,
		payload
})

const updateBlogsDisplay = payload => ({
    type: UPDATE_BLOG.DISPLAY,
    payload
})

const loadingFiltersStarted = notification => ({
    type: UPDATE_FILTER.LOADING_TRUE,
    notification
})

const updateFilterButton = payload => ({
    type: UPDATE_FILTER.FILTER_BUTTON,
    payload
})

const updateFilters = payload => ({
    type: UPDATE_FILTER.FILTERS,
    payload
})

const filterError = error => ({
    type: UPDATE_FILTER.ERROR,
    error
})

const updateBlogForm = payload => ({
    type: UPDATE_BLOG.FORM,
    payload
})

const updateShowModalTrue = () => ({ type: UPDATE_BLOG.SHOW_MODAL_TRUE })

const updateShowModalFalse = () => ({ type: UPDATE_BLOG.SHOW_MODAL_FALSE })

export {
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
  loadingBlogsStarted,
  blogError,
  updateSearchQuery,
  updateSearchToggleTrue,
  updateSearchToggleFalse,
  updateSearchResults,
  updateBlogArray,
  updateBlogModal,
  updatePageNumber,
  updateBlogPage,
  updateBlogsDisplay,
  updateFilterButton,
  updateFilters,
  updateBlogForm,
  updateShowModalTrue,
  updateShowModalFalse,
}
