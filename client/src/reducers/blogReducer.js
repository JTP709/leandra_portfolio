const initialState = { };

export const getBlogs = (state) => {
	return state.blogs.blogs;
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_BLOG':
      return {
      	...state,
      	blogs: action.payload
      }
    case 'UPDATE_BLOG_ARRAY':
    	return {
    		...state,
    		blogs: action.payload
    	}
    default:
      return state;
  }
}

export default blogReducer
