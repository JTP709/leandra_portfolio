import axios from 'axios';
import lunr from 'lunr';
import { push } from 'connected-react-router';
import {
  UPDATE_SEARCH,
  UPDATE_BLOG,
  UPDATE_FILTER,
  UPDATE_NOTIFICATION
} from '../constants';

const BACKEND_URL = 'http://localhost:5000';

export const fetchBlogs = () => {
  return dispatch => {
    dispatch(loadingBlogsStarted());
    fetch(`${BACKEND_URL}/api/blogs/get`)
      .then(response => {
        if (!response.ok) {
          alert('API call returned an error.');
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('DATE: ', data);
        const idx = lunr(function() {
          this.ref('blogId');
          this.field('body');
          this.field('title');
          this.metadataWhitelist = ['position'];

          data.forEach(function (doc) { this.add(doc) }, this)
          console.log('DATA TWO: ', data);
          dispatch(updateBlogArray(data));
        })
        dispatch(updateSearchIndex(idx));
        dispatch(loadingBlogsFinished());
      })
      .catch(error => {
        dispatch(loadingBlogsStarted())
        dispatch(blogError(error));
      })
  };
}

export const newBlog = blog => {
  return dispatch => {
    axios({
      method: 'post',
      url: `${BACKEND_URL}/api/blogs/new`,
      data: {
        title: blog.title,
        author_date: Date.now(),
        thumbnail: blog.thumbnail,
        filters: blog.filters,
        body: blog.body
      }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('blog_submission_successful'));
        dispatch(fetchBlogs());
      }
    }).catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('blog_submission_fail'));
      dispatch(blogError(error));
    });
  }
}

export const updateBlog = blog => {
  return dispatch => {
    axios({
      method: 'put',
      url: `${BACKEND_URL}/api/blogs/update`,
      data: {
        _id: blog._id,
        blogId: blog.blogId,
        title: blog.title,
        author_date: blog.author_date,
        thumbnail: blog.thumbnail,
        filters: blog.filters,
        body: blog.body
      }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('blog_update_successful'));
        dispatch(fetchBlogs());
      }
    })
    .catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('blog_update_fail'));
      dispatch(blogError(error));
    });
  }
}

export const deleteBlog = id => {
  return dispatch => {
    axios({
      method: 'delete',
      url: `${BACKEND_URL}/api/blogs/delete`,
      data: { id }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('blog_deletion_successful'));
        dispatch(fetchBlogs());
      }
    })
    .catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('blog_deletion_fail'));
      dispatch(blogError(error));
    });
  };
}

export const fetchFilters = () => {
  return dispatch => {
    fetch(`${BACKEND_URL}/api/blogs/filters`)
      .then(response => {
        if (!response.ok) {
          alert('API call returned an error.');
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        dispatch(updateFilters(data));
      })
  }
}

export const newFilter = filter => {
  return dispatch => {
    axios({
      method: 'post',
      url: `${BACKEND_URL}/api/blogs/filters/new`,
      data: {
        filter
      }
    }).then(response => {
      if(response.status === 200) {
        dispatch(updateNotification('filter_submission_successful'));
        dispatch(fetchFilters());
      }
    }).catch(error => {
      dispatch(updateNotification('filter_submission_fail'));
    });
  }
}

export const updateFilter = payload => {
  const { id, filter } = payload;
  return dispatch => {
    axios({
      method: 'put',
      url: `${BACKEND_URL}/api/blogs/filters/update`,
      data: {
        id,
        filter
      }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('filter_update_successful'));
        dispatch(fetchFilters());
      }
    })
    .catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('filter_update_fail'));
    });
  }
}

export const deleteFilter = id => {
return dispatch => {
    axios({
      method: 'delete',
      url: `${BACKEND_URL}/api/blogs/filters/delete`,
      data: { id }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('filter_update_successful'));
        dispatch(fetchFilters());
      }
    })
    .catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('filter_update_fail'));
    });
  }
}

export const redirectPage = url => {
  return dispatch => {
    dispatch(push(url));
  }
}

export const redirectNewBlogForm = () => {
  return dispatch => {
    dispatch(updateBlogForm({}));
    dispatch(push('/admin/blog/new'));
  }
}

export const loadingBlogsStarted = () => {
  return {
    type: UPDATE_BLOG.LOADING_TRUE
  }
}

export const loadingBlogsFinished = () => {
  return {
    type: UPDATE_BLOG.LOADING_FALSE
  }
}

export const blogError = error => {
  return {
    type: UPDATE_BLOG.ERROR,
    error
  }
}

export const updateSearchQuery = payload => {
  return {
    type: UPDATE_SEARCH.QUERY,
    payload
  }
}

export const updateSearchToggleTrue = () => {
  return {
    type: UPDATE_SEARCH.TOGGLE_TRUE
  }
}

export const updateSearchToggleFalse = () => {
  return {
    type: UPDATE_SEARCH.TOGGLE_FALSE
  }
}

export const updateSearchResults = payload => {
  return {
    type: UPDATE_SEARCH.RESULTS,
    payload
  }
}

export const updateSearchIndex = payload => {
  return {
    type: UPDATE_SEARCH.INDEX,
    payload
  }
}

export const updateBlogArray = blogs => {
	return {
		type: UPDATE_BLOG.ARRAY,
		blogs
	}
}

export const updateBlogModal = payload => {
  return {
    type: UPDATE_BLOG.MODAL,
    payload
  }
}

export const updatePageNumber = payload => {
	return {
		type: UPDATE_BLOG.PAGE_NUMBER,
		payload
	}
}

export const updateBlogPage = payload => {
	return {
		type: UPDATE_BLOG.PAGE,
		payload
	}
}

export const updateBlogsDisplay = payload => {
  return {
    type: UPDATE_BLOG.DISPLAY,
    payload
  }
}

export const updateFilterButton = payload => {
  return {
    type: UPDATE_FILTER.FILTER_BUTTON,
    payload
  }
}

export const updateFilters = payload => {
  return {
    type: UPDATE_FILTER.FILTERS,
    payload
  }
}

export const updateNotification = payload => {
  return {
    type: UPDATE_NOTIFICATION,
    payload
  }
}

export const updateBlogForm = payload => {
  return {
    type: UPDATE_BLOG.FORM,
    payload
  }
}

export const updateShowModalTrue = () => {
  return {
    type: UPDATE_BLOG.SHOW_MODAL_TRUE
  }
}

export const updateShowModalFalse = () => {
  return {
    type: UPDATE_BLOG.SHOW_MODAL_FALSE
  }
}
