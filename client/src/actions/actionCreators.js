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

export const updateBlogArray = payload => {
	return {
		type: 'UPDATE_BLOG_ARRAY',
		payload
	}
}

export const addNewBlog = payload => {
  return {
    type: 'ADD_NEW_BLOG',
    payload
  }
}

export const updateBlog = payload => {
	return {
		type: 'UPDATE_BLOG',
		payload
	}
}

export const addFilter = payload => {
	return {
		type: 'ADD_FILTER',
		payload
	}
}
