const initialState = {};

const blogReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_BLOG':
      return action.payload
    default:
      return state;
  }
}

export default blogReducer
