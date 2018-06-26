import blogReducer from './blogReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	blogs: blogReducer,
	filters: filterReducer
});

export default rootReducer;
