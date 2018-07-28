import { blogs } from './blog';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	blogState: blogs
});

export default rootReducer;
