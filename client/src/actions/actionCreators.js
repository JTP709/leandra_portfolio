import axios from 'axios';
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
      .then(data => dispatch(updateBlogArray(data)))
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

export const redirectNewBlogForm = () => {
  return dispatch => {
    dispatch(updateBlogForm({}));
    dispatch(push('/admin/blog/new'));
  }
}

// export const dispatchThenRoute = (myAction, myPath) => {
//     return (dispatch) => {
//         dispatch(myAction)
//         browserHistory.push(myPath);
//     }
// };

// import { push } from 'connected-react-router'

// export const login = (username, password) => (dispatch) => {

//   /* do something before redirection */

//   dispatch(push('/home'))
// }

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
