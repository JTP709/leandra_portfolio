import { blogs } from './blog';
import { portfolio } from './portfolio';
import { scroll } from './scroll';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	blogs,
	portfolio,
	scroll
});

export default rootReducer;
