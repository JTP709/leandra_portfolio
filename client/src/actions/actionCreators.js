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
