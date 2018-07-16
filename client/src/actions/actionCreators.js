import axios from 'axios';
import lunr from 'lunr';
import { push } from 'connected-react-router';

export const fetchBlogs = () => {
  return dispatch => {
    fetch(`http://localhost:5000/api/blogs`)
      .then(response => {
        if (!response.ok) {
          alert('API call returned an error.');
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const idx = lunr(function() {
          this.ref('blogId');
          this.field('body');
          this.field('title');
          this.metadataWhitelist = ['position'];

          data.forEach(function (doc) { this.add(doc) }, this)
          dispatch(updateBlogArray(data));
        })
        dispatch(updateSearchIndex(idx));
      })
  };
}

export const newBlog = blog => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/blogs/new',
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
    });
  }
}

export const updateBlog = blog => {
  return dispatch => {
    axios({
      method: 'put',
      url: 'http://localhost:5000/api/blogs/update',
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
    });
  }
}

export const deleteBlog = id => {
  return dispatch => {
    axios({
      method: 'delete',
      url: 'http://localhost:5000/api/blogs/delete',
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
    });
  };
}

export const fetchFilters = () => {
  return dispatch => {
    fetch(`http://localhost:5000/api/blogs/filters`)
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
      url: 'http://localhost:5000/api/blogs/filters/new',
      data: {
        filter
      }
    }).then(response => {
      if(response.status === 200) {
        //TODO : LOADING false
        dispatch(updateNotification('filter_submission_successful'));
        dispatch(fetchFilters());
      }
    }).catch(error => {
      //TODO : LOADING false
      dispatch(updateNotification('filter_submission_fail'));
    });
  }
}

export const updateFilter = payload => {
  const { id, filter } = payload;
  return dispatch => {
    axios({
      method: 'put',
      url: 'http://localhost:5000/api/blogs/filters/update',
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
      url: 'http://localhost:5000/api/blogs/filters/delete',
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

export const updateSearchQuery = payload => {
  return {
    type: 'UPDATE_SEARCH_QUERY',
    payload
  }
}

export const updateSearchToggle = payload => {
  return {
    type: 'UPDATE_SEARCH_TOGGLE',
    payload
  }
}

export const updateSearchResults = payload => {
  return {
    type: 'UPDATE_SEARCH_RESULTS',
    payload
  }
}

export const updateSearchIndex = payload => {
  return {
    type: 'UPDATE_SEARCH_INDEX',
    payload
  }
}

export const updateBlogArray = payload => {
	return {
		type: 'UPDATE_BLOG_ARRAY',
		payload
	}
}

export const updateBlogModal = payload => {
  return {
    type: 'UPDATE_BLOG_MODAL',
    payload
  }
}

export const updatePageNumber = payload => {
	return {
		type: 'UPDATE_PAGE_NUMBER',
		payload
	}
}

export const updateBlogPage = payload => {
	return {
		type: 'UPDATE_BLOG_PAGE',
		payload
	}
}

export const updateBlogsDisplay = payload => {
  return {
    type: 'UPDATE_BLOG_DISPLAY',
    payload
  }
}

export const updateFilterButton = payload => {
  return {
    type: 'UPDATE_FILTER_BUTTON',
    payload
  }
}

export const updateFilters = payload => {
  return {
    type: 'UPDATE_FILTERS',
    payload
  }
}

export const updateNotification = payload => {
  return {
    type: 'UPDATE_NOTIFICATION',
    payload
  }
}

export const updateBlogForm = payload => {
  return {
    type: 'UPDATE_BLOG_FORM',
    payload
  }
}

export const updateShowModal = payload => {
  return {
    type: 'UPDATE_SHOW_MODAL',
    payload
  }
}
