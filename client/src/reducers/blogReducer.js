import { testState } from '../testState';

const initialState = { ...testState };

export const getBlogs = (state) => {
	return state.blogs.blogs;
}

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_BLOG':
      return action.payload
    default:
      return state;
  }
}

export default blogReducer
