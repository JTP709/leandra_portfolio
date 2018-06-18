const initialState = {};

const filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NEW_FILTER':
      return action.payload
    default:
      return state;
  }
}

export default filterReducer
