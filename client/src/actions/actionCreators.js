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
